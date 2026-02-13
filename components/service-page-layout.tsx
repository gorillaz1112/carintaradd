"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Sun, Droplets, Palette, Shield, Building2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface Benefit {
  title: string
  description: string
}

type ServiceIconName = "sun" | "droplets" | "palette" | "shield" | "building2"

const serviceIcons: Record<ServiceIconName, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  droplets: Droplets,
  palette: Palette,
  shield: Shield,
  building2: Building2,
}

interface ServicePageLayoutProps {
  badge: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  benefits: Benefit[]
  processSteps: string[]
  faqItems: { q: string; a: string }[]
  icon: ServiceIconName
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div ref={ref} className={`opacity-0 ${isVisible ? "animate-fade-up" : ""} ${className}`}>
      {children}
    </div>
  )
}

export function ServicePageLayout({
  badge,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  benefits,
  processSteps,
  faqItems,
  icon,
}: ServicePageLayoutProps) {
  const Icon = serviceIcons[icon]

  return (
    <article className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        {/* Red accent */}
        <div className="absolute left-0 top-0 bottom-0 z-[1] w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm px-5 py-2 animate-fade-up">
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{badge}</span>
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground sm:text-5xl lg:text-6xl text-balance animate-fade-up delay-200">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed animate-fade-up delay-300">{subtitle}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up delay-400">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                Programeaza-te <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0740776438"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary/50"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> 0740 77 64 38
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Despre serviciu</span>
              </div>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                {description}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Beneficii</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
                De ce sa alegi acest serviciu
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <AnimatedSection key={i}>
                <div className="card-hover rounded-2xl border border-border bg-background p-6 h-full group">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary group-hover:border-primary">
                    <CheckCircle2 className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Proces</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
                Cum lucram
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-2xl">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i}>
                <div className="flex gap-6 mb-8 group">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary text-sm font-bold text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      {i + 1}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
                Intrebari frecvente
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-2xl flex flex-col gap-4">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={i}>
                <div className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30">
                  <h3 className="font-bold text-foreground">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl text-balance">
              Interesat de acest serviciu?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Contacteaza-ne pentru o consultatie gratuita si o oferta personalizata.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                Programeaza online <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0740776438"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary/50 hover:bg-primary/10"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> 0740 77 64 38
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </article>
  )
}
