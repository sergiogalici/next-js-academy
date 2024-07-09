import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Next.js Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-pink-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white hover:text-pink-200 transition duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/new-post"
              className="text-white hover:text-pink-200 transition duration-300"
            >
              Nuovo Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
