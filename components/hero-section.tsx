"use client";

import Link from "next/link";
import { ArrowRight, Shield, Star, Award, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint1-nw0F46YyEtHwBWwL109vlSaqVQYK5q.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint9-xr3e1KSZl6x7BhcKTbVxcOpUeG0JDd.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint8-jSL9op9MwBztaTXRQ5kbKuRgAMD6AC.jpg",
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[2000ms]"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`CarTint Arad - lucrare profesionala ${i + 1}`}
            className="w-full h-full object-cover scale-110"
            style={{
              transform: current === i ? "scale(1.05)" : "scale(1.1)",
              transition: "transform 8s ease-out",
            }}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 z-[2] w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm px-5 py-2 opacity-0 ${loaded ? "animate-fade-up" : ""}`}
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Omologat R.A.R. | Arad
            </span>
          </div>

          <h1
            className={`text-4xl font-display font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl opacity-0 ${loaded ? "animate-fade-up delay-200" : ""}`}
          >
            <span className="text-balance">Protejeaza-ti</span>
            <br />
            <span className="text-primary">masina</span>{" "}
            <span className="text-balance">cu stil</span>
          </h1>

          <p
            className={`mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground opacity-0 ${loaded ? "animate-fade-up delay-400" : ""}`}
          >
            Folii auto omologate, detailing premium, colantari profesionale si
            protectie PPF. Fiecare detaliu conteaza.
          </p>

          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row opacity-0 ${loaded ? "animate-fade-up delay-500" : ""}`}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Programeaza-te
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pachete"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:bg-card/80"
            >
              Vezi pachetele
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`mt-14 flex flex-wrap gap-8 opacity-0 ${loaded ? "animate-fade-up delay-600" : ""}`}
          >
            {[
              { icon: Star, label: "5+ ani experienta", value: "500+" },
              { icon: Award, label: "Materiale premium", value: "100%" },
              { icon: Shield, label: "Garantie inclusa", value: "24" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              current === i ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
