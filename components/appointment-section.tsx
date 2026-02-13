"use client";

import { TidyCalEmbed } from "@/components/tidycal-embed";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function AppointmentSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="programare"
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div
          className={`text-center opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Programare
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground sm:text-5xl text-balance">
            Programeaza-te online
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Alege data si ora. Confirmarile sunt rapide, iar echipa noastra te
            va contacta pentru detalii.
          </p>
        </div>

        <div
          className={`mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-4 shadow-2xl shadow-black/20 opacity-0 ${isVisible ? "animate-fade-up delay-200" : ""}`}
        >
          <TidyCalEmbed />
        </div>
      </div>
    </section>
  );
}
