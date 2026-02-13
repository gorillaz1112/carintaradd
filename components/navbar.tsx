"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Phone, X } from "lucide-react";

const services = [
  { name: "Folii Auto Omologate R.A.R.", href: "/servicii/folii-auto-rar" },
  { name: "Detailing Interior & Exterior", href: "/servicii/detailing" },
  { name: "Colantari Auto", href: "/servicii/colantari" },
  { name: "Folii Protectie PPF", href: "/servicii/ppf" },
  { name: "Folii Arhitecturale", href: "/servicii/folii-arhitecturale" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F2ED]/95 backdrop-blur-md border-b border-slate-300 shadow-sm"
          : "bg-[#F4F2ED]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo (40% smaller) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/carint-logo.png"
            alt="Carint Logo"
            width={120}
            height={40}
            priority
            className="h-auto w-[95px] sm:w-[110px] lg:w-[120px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex">
          <NavLink href="/" label="Acasa" />

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-blue-800 hover:text-blue-950 transition-colors">
              Servicii
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-lg border border-slate-200 bg-[#F4F2ED] shadow-md">
                <div className="p-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-900"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink href="/pachete" label="Pachete" />
          <NavLink href="/contact" label="Contact" />

          <a
            href="tel:0740776438"
            className="flex items-center gap-1.5 rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800"
          >
            <Phone className="h-3.5 w-3.5" />
            0740 77 64 38
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open navigation"
        >
          <span className="block h-0.5 w-5 bg-blue-900" />
          <span className="block h-0.5 w-5 bg-blue-900" />
          <span className="block h-0.5 w-5 bg-blue-900" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F4F2ED] transition-all duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="rounded-full p-2 text-blue-900 hover:bg-blue-100 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex h-full flex-col items-center justify-center gap-7 px-6 text-center">
          <Link
            href="/"
            className="text-xl font-semibold text-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Acasa
          </Link>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2 text-xl font-semibold text-blue-900"
            >
              Servicii
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-slate-700 hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/pachete"
            className="text-xl font-semibold text-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Pachete
          </Link>

          <Link
            href="/contact"
            className="text-xl font-semibold text-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:0740776438"
            className="mt-3 flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            0740 77 64 38
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-blue-800 hover:text-blue-950 transition-colors"
    >
      {label}
    </Link>
  );
}
