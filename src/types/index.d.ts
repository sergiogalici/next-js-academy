export interface Post {
  id: number
  title: string
  content: string
  slug: string
  excerpt: string
}

export interface NewPost {
  title: string
  content: string
  excerpt: string
}
