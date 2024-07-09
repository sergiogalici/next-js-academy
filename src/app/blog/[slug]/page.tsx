import { getPost } from "@/lib/posts"
import Image from "next/image"

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{post?.title}</h1>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post?.content ?? "" }}
      />
    </article>
  )
}
