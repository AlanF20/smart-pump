import { z } from "zod";
export declare const updateUserDto: z.ZodObject<{
    name: z.ZodOptional<z.ZodObject<{
        first: z.ZodString;
        last: z.ZodString;
    }, z.core.$strip>>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    picture: z.ZodOptional<z.ZodString>;
    age: z.ZodOptional<z.ZodNumber>;
    eyeColor: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodString>;
    guid: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
