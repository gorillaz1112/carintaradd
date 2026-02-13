"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useEffect, useState, useRef } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} className="text-4xl font-display font-bold text-foreground sm:text-5xl lg:text-6xl">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 500, suffix: "+", label: "Masini lucrate" },
  { value: 5, suffix: "+", label: "Ani experienta" },
  { value: 100, suffix: "%", label: "Clienti multumiti" },
  { value: 24, suffix: "h", label: "Timp de raspuns" },
]

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint6-l8pOXIKxxOPDbAkA4fBxclPQR12iWR.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/92 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`grid grid-cols-2 gap-8 lg:grid-cols-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
