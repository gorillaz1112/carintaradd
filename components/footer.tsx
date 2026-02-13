import Link from "next/link"
import { Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card overflow-hidden">
      {/* Top red accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-foreground">
              CAR<span className="text-primary">TINT</span>
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Arad</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Servicii profesionale de folii auto, detailing, colantari si protectie PPF. Calitate premium, rezultate garantate.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/cartintArad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Instagram CarTint Arad"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/cartintarad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Facebook CarTint Arad"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">Servicii</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Folii Auto R.A.R.", href: "/servicii/folii-auto-rar" },
                { name: "Detailing Auto", href: "/servicii/detailing" },
                { name: "Colantari", href: "/servicii/colantari" },
                { name: "Protectie PPF", href: "/servicii/ppf" },
                { name: "Folii Arhitecturale", href: "/servicii/folii-arhitecturale" },
                { name: "Pachete & Oferte", href: "/pachete" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:0740776438" className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                    <Phone className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  0740 77 64 38
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                Arad, Romania
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">Program</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Luni - Vineri</span>
                <span className="text-foreground">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sambata</span>
                <span className="text-foreground">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Duminica</span>
                <span className="text-primary">Inchis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CarTint Arad. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/pachete" className="hover:text-primary transition-colors">Pachete</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
