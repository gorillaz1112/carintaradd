"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { GallerySection } from "@/components/gallery-section";
import { StatsSection } from "@/components/stats-section";
import { WhyUsSection } from "@/components/why-us-section";
import { AppointmentSection } from "@/components/appointment-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main
      ref={containerRef}
      className="
        bg-[hsl(230_25%_6%)]
        text-[hsl(210_20%_96%)]
        antialiased
        overflow-x-hidden
      "
    >
      {/* Minimal Progress Line */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="
          fixed top-0 left-0 right-0
          h-[1.5px]
          bg-[hsl(222_85%_60%)]
          origin-left
          z-50
        "
      />

      {/* HERO — FULL BLEED */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* Content Wrapper (no top padding) */}
      <div
        className="
          mx-auto
          max-w-6xl
          
          flex flex-col
          
          pb-16
        "
      >
        <Section shouldReduceMotion={shouldReduceMotion}>
          <ServicesOverview />
        </Section>

        <Section shouldReduceMotion={shouldReduceMotion}>
          <StatsSection />
        </Section>

        <Section shouldReduceMotion={shouldReduceMotion}>
          <GallerySection />
        </Section>

        <Section shouldReduceMotion={shouldReduceMotion}>
          <WhyUsSection />
        </Section>

        <Section shouldReduceMotion={shouldReduceMotion}>
          <AppointmentSection />
        </Section>

        <Section shouldReduceMotion={shouldReduceMotion}>
          <CTASection />
        </Section>
      </div>
    </main>
  );
}

/* =============================== */
/* Stable Micro Section Reveal */
/* =============================== */

function Section({
  children,
  shouldReduceMotion = false,
}: {
  children: React.ReactNode;
  shouldReduceMotion?: boolean;
}) {
  if (shouldReduceMotion) {
    return (
      <section className="w-full border border-white/5 rounded-xl p-4 sm:p-6">
        {children}
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        w-full
        border
        border-white/5
        rounded-xl
        p-4
        sm:p-6
        bg-white/[0.02]
        backdrop-blur-[2px]
      "
    >
      {children}
    </motion.section>
  );
}
