import * as z from "zod";
export declare const UserResponse: z.ZodObject<{
    _id: z.ZodString;
    guid: z.ZodString;
    isActive: z.ZodBoolean;
    picture: z.ZodString;
    age: z.ZodNumber;
    eyeColor: z.ZodString;
    name: z.ZodObject<{
        first: z.ZodString;
        last: z.ZodString;
    }, z.core.$strip>;
    company: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    address: z.ZodString;
}, z.core.$strip>;
