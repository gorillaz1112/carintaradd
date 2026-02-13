import type { Metadata } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const _inter = Manrope({ subsets: ["latin"], variable: "--font-inter" })
const _oswald = Space_Grotesk({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  title: "CarTint Arad | Folii Auto Omologate RAR, Detailing, PPF, Colantari",
  description:
    "Servicii profesionale de folii auto omologate R.A.R., detailing interior si exterior, colantari, folii protectie PPF si folii arhitecturale in Arad. Programeaza-te acum!",
  keywords:
    "folii auto arad, folii omologate RAR, detailing auto arad, colantari auto, PPF protectie vopsea, folii arhitecturale, cartint arad",
  openGraph: {
    title: "CarTint Arad | Folii Auto Omologate RAR, Detailing, PPF",
    description:
      "Servicii profesionale de folii auto, detailing, colantari si PPF in Arad.",
    locale: "ro_RO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-20 lg:pt-24 space-y-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
