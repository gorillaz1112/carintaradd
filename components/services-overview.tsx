"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sun,
  Droplets,
  Palette,
  Shield,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Sun,
    title: "Folii Auto Omologate R.A.R.",
    description:
      "Protectie solara omologata R.A.R. Reducerea caldurii, protectie UV si intimitate, totul conform legislatiei.",
    href: "/servicii/folii-auto-rar",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint5-Kr1e5LAgEDvaev2LGgLYQuNsDh6RYB.jpg",
  },
  {
    icon: Droplets,
    title: "Detailing Interior & Exterior",
    description:
      "Curatare si reconditionare profesionala. Polish, ceara, curatare tapiterie, tratamente ceramice.",
    href: "/servicii/detailing",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polishing-Scv0nwRMxGJbLGN1dRX0Pzv7JGlBMb.webp",
  },
  {
    icon: Palette,
    title: "Colantari Auto",
    description:
      "Transformare completa prin colantare profesionala. De la accente decorative la wrap integral.",
    href: "/servicii/colantari",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint6-l8pOXIKxxOPDbAkA4fBxclPQR12iWR.jpg",
  },
  {
    icon: Shield,
    title: "Folii Protectie PPF",
    description:
      "Protectie invizibila impotriva zgarieturilor si factorilor externi. Pastreaza vopseaua originala.",
    href: "/servicii/ppf",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint3-m86PW9TsSbe12anXzmDi6oWn5lC5hu.jpg",
  },
  {
    icon: Building2,
    title: "Folii Arhitecturale",
    description:
      "Folii profesionale pentru cladiri. Protectie solara, intimitate si estetica pentru orice geam.",
    href: "/servicii/folii-arhitecturale",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint7-0suSS9m6pT9OQ3TVv1TSAGt68Y07KN.jpg",
  },
];

export function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.offsetWidth * 0.8; // 80% width card
    container.scrollTo({
      left: index * (cardWidth + 24),
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.offsetWidth * 0.8 + 24;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.12),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Serviciile Noastre
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Servicii premium realizate cu precizie, materiale certificate si
            atentie la fiecare detaliu.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4"
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.href}
                  className="snap-center shrink-0 w-[80%] sm:w-[420px]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl"
                  >
                    {/* Refined red glow frame */}
                    <div
                      className={`absolute -inset-[1px] rounded-3xl transition-opacity duration-500 ${
                        isActive
                          ? "opacity-100 bg-gradient-to-r from-red-600 via-red-500 to-red-600 blur-md"
                          : "opacity-0"
                      }`}
                    />

                    <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                      <div className="relative h-56">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-red-600/10 p-2 rounded-lg text-red-500">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* ONLY CTA CLICKABLE */}
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors group"
                        >
                          Vezi detalii
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={() =>
              scrollToIndex(
                activeIndex === 0 ? services.length - 1 : activeIndex - 1,
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-red-600 text-white p-3 rounded-full transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              scrollToIndex(
                activeIndex === services.length - 1 ? 0 : activeIndex + 1,
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-red-600 text-white p-3 rounded-full transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-red-600" : "w-2 bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
