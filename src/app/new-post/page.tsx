import PostForm from "@/components/PostForm";

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Crea un nuovo post
      </h1>
      <PostForm />
    </div>
  )
}
