"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl opacity-0 ${isVisible ? "animate-scale-in" : ""}`}
        >
          {/* Background image */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint5-Kr1e5LAgEDvaev2LGgLYQuNsDh6RYB.jpg"
            alt="CarTint Arad - atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

          {/* Red accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-20 text-center">
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-5xl text-balance">
              Pregatit sa-ti transformi masina?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Contacteaza-ne pentru o consultatie gratuita. Echipa noastra te
              ajuta sa alegi solutia perfecta.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:0740776438"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Suna: 0740 77 64 38
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                Programeaza online
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
