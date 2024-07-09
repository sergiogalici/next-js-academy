import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Benvenuto nel nostro blog
        </h1>
        <p className="mt-3 text-2xl text-white mb-8">
          Esplora i nostri articoli e condividi le tue idee
        </p>
        <div className="flex space-x-4">
          <Link
            href="/blog"
            className="bg-white text-pink-500 font-bold py-2 px-4 rounded-full hover:bg-pink-100 transition duration-300"
          >
            Vai al blog
          </Link>
          <Link
            href="/new-post"
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
          >
            Nuovo Post
          </Link>
        </div>
      </main>
    </div>
  )
}
