"use client"

import Link from "next/link"

type ListItemProps = {
  path: string
  text: string
}

export const ListItem = ({ path, text }: ListItemProps) => {
  return (
    <li>
      <Link
        href={path}
        className="text-white hover:text-pink-200 transition duration-300"
      >
        {text}
      </Link>
    </li>
  )
}
