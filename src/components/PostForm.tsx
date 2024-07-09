"use client"

import { FieldError, FieldErrors, UseFormRegister, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { createPostAction } from "@/actions/actions"
import { PostSchema } from "@/schemas/post"
import { FormElement } from "./FormElement"


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
      <FormElement
        label="title"
        register={register}
        inputType="text"
        errors={errors}
      />
      <FormElement
        label="excerpt"
        register={register}
        inputType="text"
        errors={errors}
      />
      <FormElement
        label="content"
        register={register}
        inputType="textarea"
        errors={errors}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Crea Post
      </button>
    </form>
  )
}


