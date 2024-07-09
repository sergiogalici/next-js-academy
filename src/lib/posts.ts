import { NewPost, Post } from "../types"

const API_URL = "http://localhost:3001/posts"

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(API_URL, { cache: "no-cache" })
  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }
  return res.json()
}

export async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`${API_URL}?slug=${slug}`)
  if (!res.ok) {
    throw new Error("Failed to fetch post")
  }
  const posts: Post[] = await res.json()
  return posts[0]
}

export async function createPost(newPost: NewPost): Promise<Post> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })

  if (!res.ok) {
    throw new Error("Failed to create post")
  }

  return res.json()
}
