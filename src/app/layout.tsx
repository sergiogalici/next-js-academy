import { Inter } from "next/font/google"
import { ReactNode } from "react"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next.js 14 Blog",
  description: "Un blog di esempio con Next.js 14, TypeScript e Tailwind CSS",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
