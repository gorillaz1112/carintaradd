"use client";

import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { TidyCalEmbed } from "@/components/tidycal-embed";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0740 77 64 38",
    href: "tel:0740776438",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Arad, Romania",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Vineri: 09:00 - 18:00",
    href: undefined,
  },
];

export function ContactContent() {
  const { ref: calRef, isVisible: calVisible } = useScrollReveal();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint2-D4An9KTwwToxKOpafovpyt5Br0b087.jpg"
            alt="CarTint Arad - contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6 animate-fade-up">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground sm:text-6xl text-balance animate-fade-up delay-200">
            Ia <span className="text-primary">legatura</span> cu noi
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up delay-300">
            Programeaza-te online sau contacteaza-ne direct. Suntem mereu
            pregatiti.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="card-hover group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center animate-fade-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                  <info.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="mt-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-bold text-foreground">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/cartintArad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:scale-105"
              aria-label="Instagram CarTint Arad"
            >
              <Instagram className="h-4 w-4 transition-colors group-hover:text-primary" />
              @cartintArad
            </a>
            <a
              href="https://facebook.com/cartintarad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:scale-105"
              aria-label="Facebook CarTint Arad"
            >
              <Facebook className="h-4 w-4 transition-colors group-hover:text-primary" />
              cartintarad
            </a>
          </div>
        </div>
      </section>

      {/* TidyCal */}
      <section className="py-20 lg:py-28 bg-card" ref={calRef}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div
            className={`text-center opacity-0 ${calVisible ? "animate-fade-up" : ""}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Programare
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Programeaza online
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed">
              Selecteaza data si ora, iar noi te vom contacta pentru confirmare.
            </p>
          </div>
          <div
            className={`mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-4 shadow-2xl shadow-black/20 opacity-0 ${calVisible ? "animate-fade-up delay-200" : ""}`}
          >
            <TidyCalEmbed />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl text-balance">
            Ne gasesti in Arad
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Vino cu masina ta sau contacteaza-ne pentru deplasare.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:0740776438"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Suna: 0740 77 64 38
            </a>
            <a
              href="https://wa.me/40740776438?text=Buna%20ziua!%20As%20dori%20sa%20fac%20o%20programare."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
            >
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
