import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(2, { message: "Name must be atlease 2 characters" }),
  email: z.string().email(),
  message: z
    .string()
    .min(20, { message: "Message must be aleast 20 characters" }),
});
