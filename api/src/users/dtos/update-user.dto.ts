import { z } from "zod";
export const updateUserDto = z.object({
  name: z
    .object({
      first: z.string(),
      last: z.string(),
    })
    .optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  company: z.string().optional(),
  picture: z.string().optional(),
  age: z.number().optional(),
  eyeColor: z.string().optional(),
  balance: z.string().optional(),
  guid: z.string().optional(),
  isActive: z.boolean().optional(),
});
