import { mutation, query } from "./_generated/server";
import{v} from "convex/values";
export const createHolidayDetails= mutation({
    args: {
        tripId: v.string(),
        uid: v.id('UserTable'),
        holidayDetails: v.optional(v.any()),
    },
    handler: async (ctx, args) => {
        const result=await ctx.db.insert('HolidayDetails',
            {
                tripId: args.tripId,
                uid: args.uid,
                holidayDetails: args.holidayDetails
            }
        );
        return result;
    }
})

export const GetUserTrip=query({
    args:{
        uid:v.id('UserTable')
    },
    
    
   handler:async (ctx,args)=>{
    
      console.log("GetUserTrip uid:", args.uid);
     const result =await ctx.db.query("HolidayDetails")
        .filter(q=>q.eq(q.field('uid'),args.uid)).order('desc')
        .collect();
        
        console.log("Fetched trips for user:");
        console.log("Fetched trips for user:", args.uid, "→", result);
        return result;
   }
});


export const GetTripById=query({
    args:{
        uid:v.id('UserTable'),
        tripid:v.string()
    },
    
    
   handler:async (ctx,args)=>{
    
      console.log("GetUserTrip uid:", args.uid);
     const result =await ctx.db.query("HolidayDetails")
        .filter(q=>q.and( 
          q.eq(q.field('uid'),args.uid),
        q.eq(q.field('tripId'),args?.tripid)))
        
        .collect();
        
        console.log("Fetched trips for user:");
        console.log("Fetched trips for user:", args.uid, "→", result[0]);
        return result[0];
   }
});



export const fixHolidayDetails = mutation({
  args: {
    uid: v.id("UserTable"), // which user to attach these trips to
  },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("HolidayDetails").collect();
    for (const doc of all) {
      if (!doc.uid) {
        await ctx.db.patch(doc._id, { uid: args.uid });
      }
    }
    return "HolidayDetails updated with uid";
  },
});