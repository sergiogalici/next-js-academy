"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { createPostAction } from "@/actions/actions"

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

export default function PostForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PostInput>({
    resolver: zodResolver(PostSchema),
  })

  const onSubmit = async (data: PostInput) => {
    const result = await createPostAction(data)
    if (result.success) {
      router.push("/blog")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Titolo
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="excerpt" className="block text-gray-700 font-bold mb-2">
          Estratto
        </label>
        <textarea
          {...register("excerpt")}
          id="excerpt"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          rows={3}
        />
        {errors.excerpt && (
          <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Contenuto
        </label>
        <textarea
          {...register("content")}
          id="content"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          rows={10}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Crea Post
      </button>
    </form>
  )
}
