import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact & Programari | CarTint Arad",
  description:
    "Contacteaza CarTint Arad pentru programari folii auto, detailing, colantari si PPF. Telefon: 0740 77 64 38.",
}

export default function ContactPage() {
  return <ContactContent />
}
