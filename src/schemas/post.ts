import { z } from "zod"

export const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Il titolo è obbligatorio")
    .max(100, "Il titolo non può superare i 100 caratteri"),
  excerpt: z
    .string()
    .min(1, "L'estratto è obbligatorio")
    .max(200, "L'estratto non può superare i 200 caratteri"),
  content: z.string().min(1, "Il contenuto è obbligatorio"),
})

export type PostInput = z.infer<typeof PostSchema>
