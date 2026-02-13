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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1C2D]/95 backdrop-blur-md shadow-lg" : "bg-[#0B1C2D]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/carint-logo.png"
            alt="Carint Logo"
            width={120}
            height={40}
            priority
            className="h-auto w-[105px]"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink href="/" label="Acasa" />
          <NavLink href="/pachete" label="Pachete" />
          <NavLink href="/contact" label="Contact" />

          <a
            href="tel:0740776438"
            className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <Phone className="h-4 w-4" />
            0740 77 64 38
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white"
          aria-label="Open navigation"
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#081521] transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close navigation"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 px-6 text-center">
          <MobileLink href="/" label="Acasa" close={() => setIsOpen(false)} />

          {/* Services Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-center gap-2 text-xl font-semibold text-white"
            >
              Servicii
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`mt-4 flex flex-col gap-4 transition-all duration-300 ${
                servicesOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {services.map((s) => (
                <MobileLink
                  key={s.href}
                  href={s.href}
                  label={s.name}
                  close={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>

          <MobileLink
            href="/pachete"
            label="Pachete"
            close={() => setIsOpen(false)}
          />
          <MobileLink
            href="/contact"
            label="Contact"
            close={() => setIsOpen(false)}
          />

          <a
            href="tel:0740776438"
            className="mt-6 flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
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
      className="text-sm font-medium text-white transition hover:text-blue-400"
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="text-xl font-semibold text-white transition hover:text-blue-400"
    >
      {label}
    </Link>
  );
}
