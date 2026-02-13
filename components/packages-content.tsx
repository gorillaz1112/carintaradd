"use client";

import Link from "next/link";
import { Check, ArrowRight, Star, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const detailingPackages = [
  {
    name: "Basic",
    price: "150",
    popular: false,
    description: "Curatare standard pentru masina ta",
    features: [
      "Spalare exterioara 2 faze",
      "Aspirare interior complet",
      "Curatare bord si elemente plastice",
      "Curatare geamuri interior/exterior",
      "Odorizare salon",
    ],
  },
  {
    name: "Premium",
    price: "350",
    popular: true,
    description: "Tratament complet interior si exterior",
    features: [
      "Tot ce include pachetul Basic",
      "Polish caroserie o etapa",
      "Tratament plastic exterior",
      "Curatare jante detaliat",
      "Hidratare tapiterie piele",
      "Curatare chimica tapiterie textila",
      "Decontaminare caroserie",
    ],
  },
  {
    name: "Deluxe",
    price: "550",
    popular: false,
    description: "Reconditionare avansata cu protectie",
    features: [
      "Tot ce include pachetul Premium",
      "Polish caroserie 2 etape",
      "Aplicare ceara protectie 3 luni",
      "Curatare motor",
      "Curatare detaliata compartiment portbagaj",
      "Tratament anti-ploaie geamuri",
      "Innegrire anvelope premium",
    ],
  },
  {
    name: "Deluxe+",
    price: "800",
    popular: false,
    description: "Restaurare completa a masinii",
    features: [
      "Tot ce include pachetul Deluxe",
      "Polish caroserie 3 etape",
      "Coating ceramic protectie 6 luni",
      "Curatare chimica plafon",
      "Reconditionare faruri",
      "Decontaminare completa",
      "Curatare si protectie jante ceramica",
      "Tratament piele complet",
    ],
  },
  {
    name: "High Class",
    price: "1200",
    popular: false,
    description: "Experienta suprema de detailing",
    features: [
      "Tot ce include pachetul Deluxe+",
      "Coating ceramic protectie 12+ luni",
      "Polish corectie completa multi-etape",
      "Protectie ceramica jante",
      "Protectie ceramica geamuri",
      "Protectie ceramica tapiterie piele",
      "Ozonizare si dezinfectie completa",
      "Inspectie finala cu lampa profesionala",
      "Raport foto inainte si dupa",
    ],
  },
];

const ppfPackages = [
  {
    name: "Starter PPF",
    price: "800",
    features: [
      "Bara fata",
      "Faruri",
      "Proiectoare",
      "Oglinzi",
      "Sub manere",
      "Margini usi",
    ],
  },
  {
    name: "Premium PPF",
    price: "1500",
    features: [
      "Tot ce include Starter",
      "Capota fata partial",
      "Aripi fata partial",
      "Stalpi parbriz",
      "Banda pe plafon",
      "Aripi spate (partea inferioara)",
      "Spoiler/polita bara spate",
    ],
  },
  {
    name: "Full PPF",
    price: "3500",
    features: [
      "Protectie integrala caroserie",
      "Toate panourile acoperite",
      "Protectie bara fata si spate",
      "Capota, plafon, portbagaj",
      "Aripi si usi complete",
      "Praguri si ornamente",
      "Garantie extinsa material",
    ],
  },
];

function DetailingPackages() {
  return (
    <section className="py-28 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Pachete Detailing
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Alege nivelul potrivit pentru masina ta.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {detailingPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-3xl border bg-zinc-900/80 backdrop-blur-xl p-6 transition-all ${
                pkg.popular
                  ? "border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.25)]"
                  : "border-zinc-800"
              }`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full flex items-center gap-1"
                >
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Popular</span>
                </motion.div>
              )}

              <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{pkg.description}</p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">
                  {pkg.price}
                </span>
                <span className="text-gray-400 text-sm">RON</span>
              </div>

              <div className="my-6 h-px bg-zinc-800" />

              <ul className="flex-1 flex flex-col gap-3">
                {pkg.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <Check className="w-4 h-4 text-red-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-wide transition-all ${
                  pkg.popular
                    ? "bg-red-600 text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                    : "border border-zinc-700 text-white hover:border-red-600 hover:text-red-500"
                }`}
              >
                Programeaza
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PPFPackages() {
  return (
    <section className="py-28 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-white"
          >
            Protectie PPF
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ppfPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
              <div className="mt-4 text-3xl font-bold text-white">
                {pkg.price} RON
              </div>

              <ul className="mt-6 space-y-3 text-gray-400 text-sm">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex gap-2">
                    <Check className="w-4 h-4 text-red-500 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-full border border-zinc-700 py-3 text-sm font-bold uppercase text-white hover:border-red-600 hover:text-red-500 transition-all"
              >
                Solicita oferta
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesContent() {
  return (
    <article className="bg-black text-white">
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_60%)]" />
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl sm:text-6xl font-bold">
            Alege pachetul <span className="text-red-500">potrivit</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            De la intretinere la restaurare completa — experienta premium pentru
            masina ta.
          </p>
        </motion.div>
      </section>

      <DetailingPackages />
      <PPFPackages />

      <section className="py-28 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-bold"
        >
          Ai nevoie de un pachet personalizat?
        </motion.h2>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:0740776438"
            className="flex items-center gap-2 bg-red-600 px-8 py-4 rounded-full font-bold uppercase hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all"
          >
            <Phone className="w-4 h-4" />
            Suna acum
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-2 border border-zinc-700 px-8 py-4 rounded-full font-bold uppercase hover:border-red-600 hover:text-red-500 transition-all"
          >
            Programeaza online
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
