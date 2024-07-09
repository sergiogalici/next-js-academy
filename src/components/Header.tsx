import Link from "next/link"
import { ListItem } from "./ListItem"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Next.js Blog
        </Link>
        <ul className="flex space-x-4">
          <ListItem path="/" text="Home" />
          <ListItem path="/blog" text="Blog" />
          <ListItem path="/new-post" text="Nuovo Post" />
        </ul>
      </nav>
    </header>
  )
}