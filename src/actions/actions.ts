"use server"

import { createPost } from "@/lib/posts"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const PostSchema = z.object({
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

type PostInput = z.infer<typeof PostSchema>

export async function createPostAction(data: PostInput) {
  const validationResult = PostSchema.safeParse(data)

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  try {
    await createPost(validationResult.data)
    revalidatePath("/blog")
    return { success: true }
  } catch (error) {
    return { errors: { server: ["Failed to create post"] } }
  }
}
