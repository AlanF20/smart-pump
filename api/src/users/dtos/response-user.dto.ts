import * as z from "zod";

export const UserResponse = z.object({
  _id: z.string(),
  guid: z.string(),
  isActive: z.boolean(),
  picture: z.string(),
  age: z.number(),
  eyeColor: z.string(),
  name: z.object({
    first: z.string(),
    last: z.string(),
  }),
  company: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
});
