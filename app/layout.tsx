import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Get Notified LLC – Smart Home Protection",
  description: "Safety Without Surveillance. Smart monitoring systems for elders, landlords, veterans, and families in Rowan County NC.",
}
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-navy">{children}<Analytics /></body>
    </html>
  )
}
