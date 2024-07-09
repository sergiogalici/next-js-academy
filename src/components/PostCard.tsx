import Link from "next/link"
import Image from "next/image"
import { Post } from "../types"

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-pink-500 font-semibold hover:text-pink-600 transition duration-300"
        >
          Leggi di più &rarr;
        </Link>
      </div>
    </div>
  )
}
