import * as z from "zod";

export const BodyLogin = z.object({
  email: z.string(),
  password: z.string(),
});
