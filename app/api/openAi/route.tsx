import { NextRequest, NextResponse } from "next/server";


import OpenAI from 'openai';
import { aj } from "../arcject/router";
import { auth, currentUser } from "@clerk/nextjs/server";
export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
 
});


const PROMPT = `You are "Holiday Buddy" — a friendly, upbeat AI that can both plan trips 🏖️✈️ and chat casually with users on any topic 😄.

🎯 GOAL:
- If the user is planning a trip, switch to **Trip Planning Mode** and follow the fixed question order below.
- If the user is chatting casually (non-travel topics), switch to **Normal Conversation Mode**.

---

## TRIP PLANNING MODE:
Ask **ONE relevant trip-related question at a time** in this fixed order. Wait for the user's answer before moving on:

1. Starting location (source)
2. Destination city or country (end location)
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Final Trip Plan

When all answers are collected, return the **final trip plan**.

### RULES:
- Ask only ONE question at a time, in the above order.
- Never ask irrelevant or already-answered questions.
- If an answer is missing or unclear, politely ask the user to clarify before moving on.
- Maintain a **chatty, fun, and friendly style** while staying professional.
- Use **only travel-related emojis** (✈️🏖️🏔️🍽️🚢🗺️) in trip mode — maximum 3 per message.
- Always include which **UI component** should be displayed:
  - "budget"
  - "groupSize"
  - "tripDuration"
  - "final" (when the trip plan is ready)
  - "" (empty if no special UI is needed)

When ALL details are collected:
Return the final trip plan strictly in JSON:
{
  "resp": "Your complete trip plan text here",
  "ui": "final"
}

---

## NORMAL CONVERSATION MODE:
- Respond as a friendly conversational buddy.
- Use **topic-related emojis** naturally (🍕 for food, 📚 for books, 🌧️ for weather, 🎉 for celebration, 🐶 for pets, etc.).
- Do NOT use travel emojis unless the topic is travel.
- UI tag should always be empty ("").

---

## NAME HANDLING:
- If the user shares their name, remember it and use it naturally in future replies.
- If no name is given, greet them casually.

---

## RESPONSE FORMAT (ALWAYS):
- Return ONLY valid JSON:
{
  "resp": "Main reply text for the user",
  "ui": "<UI tag or empty string>"
}
- No extra text, no explanations outside JSON.

---

## SPECIAL FIRST MESSAGE RULE:
For the first message in a conversation, always return:
{
  "resp": "Hey there! 🌍 I'm Holiday Buddy 😎🙌 — your personal travel companion. Tell me your name and where you’d like to go, and I’ll help you plan your perfect trip!",
  "ui": ""
}`;





const FINAL_PROMPT = `
You are "Holiday Buddy" — a travel planning assistant.  
Your task: Generate a detailed travel plan using the given trip details.  

The output must **strictly follow the JSON schema below** and include:

1. **Trip Plan Information**:
   - Destination
   - Duration
   - Origin
   - Budget
   - Group Size

2. **Hotels List**:
   - Hotel Name
   - Hotel Address
   - Price Per Night
   - Hotel Image URL
   - Geo Coordinates (Latitude, Longitude)
   - Rating (1–5)
   - Description

3. **Itinerary Plan**:
   - Place Name
   - Place Details
   - Place Image URL
   - Geo Coordinates (Latitude, Longitude)
   - Place Address
   - Ticket Pricing
   - Time to Travel from Previous Location
   - Best Time to Visit

4. **Day-by-Day Schedule**:
   - Divide the itinerary into days based on duration.
   - Assign best times to visit each location per day.

---

## Output Schema (Strict JSON Only):

{
  "Holiday_plan": {
    "destination": "string",
    "duration": "string",
    "origin": "string",
    "budget": "string",
    "group_size": "string",
    "hotels": [
      {
        "hotel_name": "string",
        "hotel_address": "string",
        "price_per_night": "string",
        "hotel_image_url": "string",
        "geo_coordinates": {
          "latitude": number,
          "longitude": number
        },
        "rating": number,
        "description": "string"
      }
    ],
    "itinerary": [
      {
        "day": number,
        "places": [
          {
            "place_name": "string",
            "place_details": "string",
            "place_image_url": "string",
            "geo_coordinates": {
              "latitude": number,
              "longitude": number
            },
            "place_address": "string",
            "ticket_pricing": "string",
            "time_to_travel": "string",
            "best_time_to_visit": "string"
          }
        ]
      }
    ]
  }
}

---

## RULES:
- Output only valid JSON — no markdown, no explanations.
- Do not include extra keys or comments.
- Ensure all string values are filled meaningfully.
- Use realistic prices, coordinates, and ratings.
- Ensure itinerary matches the trip duration.

`;


export async function POST(req:NextRequest) {
    const body = await req.json();
    const messageArray = body.messageArray || body.messages ||[];
    const isFinal=body.isFinal || false;
    // const {message}=await req.json();
    
    const user=await currentUser();
    const {has}=await auth();
    const hasPremiumAccess = has({ plan: 'mothly' })
    const decision = await aj.protect(req, { userId:user?.primaryEmailAddress?.emailAddress?? "", requested: isFinal?5:0 });
     console.log(decision, "i am from eeee");
    // TODO: Check the correct property on ArcjetReason for limit reached, e.g. 'type' or 'code'
        for (const result of decision.results){
          if (result.reason.isRateLimit()) {
            if(result.reason.remaining===0 && !hasPremiumAccess){
              return NextResponse.json({
                resp:"No free Credit Remaining",
                ui:"limit"
              })
            }
      // console.log("Rate limit triggered:", result.reason.remaining);
      // You can check result.ttl or result state for more context
    }  
        
        }
     

     if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENROUTER_API_KEY in environment variables" },
        { status: 500 }
      );
    }

      if (!Array.isArray(messageArray)) {
      return NextResponse.json(
        { error: "Invalid 'message' format. Must be an array of chat messages.!!" },
        { status: 400 }
      );
    }

    console.log("Incoming Messages:", messageArray);

    try{
        const completion = await openai.chat.completions.create({
    model: 'openai/gpt-4o-mini',
    response_format: {type: 'json_object'},
    messages: [
        {
            role: 'system',
            content:isFinal?FINAL_PROMPT: PROMPT
        },
        ...messageArray
    ],
  });
  console.log(completion.choices[0].message);

  const messageContent = completion.choices[0]?.message.content ||"";
     console.log("🤖 AI Raw Output:");
    console.log(messageContent);
  
  let parsedResponse;
    try {
      parsedResponse = JSON.parse(messageContent);
    } catch (err) {
      console.warn("Failed to parse JSON from AI:", messageContent);
      parsedResponse = { resp: messageContent };
    }

  return NextResponse.json(parsedResponse)
    }
    catch(e:any){
        console.error("Error in AI Model API:", e);
        return NextResponse.json({error:"Something went wrong"}, {status:500});
    }
}
