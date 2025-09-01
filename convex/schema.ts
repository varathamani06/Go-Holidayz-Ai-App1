import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values";
export default defineSchema({
    UserTable: defineTable({
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
        subscription: v.optional(v.string()),

    }),

    HolidayDetails: defineTable({
        tripId:v.string(),
        holidayDetails:v.optional(v.any()),
        uid:v.id('UserTable')

    })
});
