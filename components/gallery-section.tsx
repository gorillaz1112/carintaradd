"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const gallery = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint1-nw0F46YyEtHwBWwL109vlSaqVQYK5q.jpg",
    alt: "BMW cu folii auto aplicate profesional - CarTint Arad",
    caption: "BMW - Folii Premium",
    tag: "Folii Auto",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint2-D4An9KTwwToxKOpafovpyt5Br0b087.jpg",
    alt: "Volkswagen CC cu geamuri fumurii omologate RAR",
    caption: "VW CC - Omologare R.A.R.",
    tag: "Omologat",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polishing-Scv0nwRMxGJbLGN1dRX0Pzv7JGlBMb.webp",
    alt: "Polishing profesional auto - CarTint Arad",
    caption: "Polish Profesional",
    tag: "Detailing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint9-xr3e1KSZl6x7BhcKTbVxcOpUeG0JDd.jpg",
    alt: "BMW 3 Series alb cu folii auto",
    caption: "BMW 3 Series - Folii Fumurii",
    tag: "Folii Auto",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auto-detailing-car-interior-eps-2048x1367-1-5QPw2LhIsSLkhbAKqWcTCqKVFpltdI.jpeg",
    alt: "Detailing interior auto profesional",
    caption: "Interior Detailing",
    tag: "Detailing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint4-HmFgpJ9Y9Rv1a6RvrA8HPnLaoRcjEp.jpg",
    alt: "Stopuri fumurii BMW - CarTint Arad",
    caption: "Folii Stopuri",
    tag: "Colantari",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint7-0suSS9m6pT9OQ3TVv1TSAGt68Y07KN.jpg",
    alt: "Audi A4 cu luneta fumurie",
    caption: "Audi A4 - Folie Luneta",
    tag: "Folii Auto",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint8-jSL9op9MwBztaTXRQ5kbKuRgAMD6AC.jpg",
    alt: "BMW X1 cu folii fumurii profesionale",
    caption: "BMW X1 - Full Tint",
    tag: "Folii Auto",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint3-m86PW9TsSbe12anXzmDi6oWn5lC5hu.jpg",
    alt: "Detaliu oglinda cu folie PPF",
    caption: "Protectie PPF Oglinda",
    tag: "PPF",
  },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div
          className={`text-center opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Portofoliu
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground sm:text-5xl text-balance">
            Lucrarile noastre
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Fiecare masina este o lucrare de arta. Iata cateva din proiectele
            recente.
          </p>
        </div>

        {/* Bento grid gallery */}
        <div className="mt-16 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px]">
          {gallery.map((img, i) => {
            const isLarge = i === 0 || i === 4;
            const isTall = i === 2 || i === 7;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border cursor-pointer opacity-0 ${
                  isVisible ? "animate-scale-in" : ""
                } ${isLarge ? "col-span-2 row-span-2" : ""} ${isTall ? "row-span-2" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Tag */}
                <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {img.tag}
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-foreground">
                    {img.caption}
                  </p>
                </div>

                {/* Red accent line bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
