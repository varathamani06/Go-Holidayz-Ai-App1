// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req:NextRequest) {
    
//     const {placeName}=await req.json();
//     const BASE_URL="https://places.googleapis.com/v1/places:searchText";
//     const config={
//         headers:{
//             'Content-Type':'application/json',
//             'X-Goog-Api-Key': process.env.GOOGLE_PLACE_API_KEY as string,
//             // 'X-Goog-FieldMask':[
//             //     'places.photos',
//             //     'places.displayName',
//             //     'places.id'
//             // ]
//             "X-Goog-FieldMask": "places.photos,places.displayName,places.id"
//         }
//     };


//     try{

//         const result= await axios.post(BASE_URL,{
//         textQuery:placeName
//     },
//     config);
    
//     return NextResponse.json( result?.data);


//     }catch(error){

//         return NextResponse.json(error);
//     }

    
// }

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { placeName } = await req.json();

    const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

    const result = await axios.post(
      BASE_URL,
      {
        textQuery: placeName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_PLACE_API_KEY as string,
          "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
        },
      }
    );

    return NextResponse.json(result.data);
  } catch (error: any) {
    console.error("Google Places API error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || error.message },
      { status: error.response?.status || 500 }
    );
  }
}
