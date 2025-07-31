import * as z from "zod";
export declare const BodyLogin: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
