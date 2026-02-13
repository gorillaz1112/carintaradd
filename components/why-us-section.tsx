"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Materiale de calitate superioara",
    description: "Folosim doar folii si materiale de la branduri recunoscute international.",
  },
  {
    title: "Omologare R.A.R. garantata",
    description: "Foliile sunt certificate si omologate, conform legislatiei romanesti.",
  },
  {
    title: "Experienta si precizie",
    description: "Echipa noastra combina tehnicile profesionale cu pasiunea pentru masini.",
  },
  {
    title: "Consultanta personalizata",
    description: "Sfaturi adaptate, de la alegerea foliei pana la nivelul de protectie dorit.",
  },
  {
    title: "Garantie pentru fiecare lucrare",
    description: "Oferim garantie pentru toate serviciile - satisfactia ta e prioritara.",
  },
  {
    title: "Programari flexibile",
    description: "Programare rapida online sau telefonic, fara batai de cap.",
  },
]

export function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Image + text */}
          <div className={`opacity-0 ${isVisible ? "animate-slide-left" : ""}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">De ce noi</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-5xl text-balance">
              Pasiune pentru detalii
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nu suntem doar un atelier. Suntem pasionati de masini si intelegem cat de mult
              inseamna fiecare detaliu. Fiecare vehicul este tratat ca si cum ar fi al nostru.
            </p>

            {/* Image showcase */}
            <div className="mt-8 relative rounded-2xl overflow-hidden group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auto-detailing-car-interior-eps-2048x1367-1-5QPw2LhIsSLkhbAKqWcTCqKVFpltdI.jpeg"
                alt="Detailing interior profesional - CarTint Arad"
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right - Cards */}
          <div className={`grid gap-3 sm:grid-cols-2 opacity-0 ${isVisible ? "animate-slide-right delay-200" : ""}`}>
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl border border-border bg-card p-5 group"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary group-hover:border-primary">
                  <CheckCircle2 className="h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{reason.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
