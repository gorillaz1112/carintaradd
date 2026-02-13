import type { Metadata } from "next"
import { PackagesContent } from "@/components/packages-content"

export const metadata: Metadata = {
  title: "Pachete & Oferte | CarTint Arad - Detailing, Folii Auto, PPF",
  description:
    "Descopera pachetele noastre de servicii: Basic, Premium, Deluxe, Deluxe+ si High Class. Detailing auto, folii auto omologate RAR, PPF si colantari in Arad.",
}

export default function PachetePage() {
  return <PackagesContent />
}
