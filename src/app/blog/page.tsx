import { Suspense } from "react"
import PostCard from "../../components/PostCard"
import { getPosts } from "../../lib/posts"
import Loading from "./loading"

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Il nostro Blog
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}
