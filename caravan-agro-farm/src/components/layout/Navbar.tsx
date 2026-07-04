"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "প্রোডাক্টস", href: "/products" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "ব্লগ", href: "/blog" },
  { name: "যোগাযোগ", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
              C
            </div>
            <span className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)]">
              Caravan Agro Farm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bangla text-[17px] font-medium transition-colors hover:text-[var(--color-brand-green)] ${
                  pathname === link.href
                    ? "text-[var(--color-brand-green)]"
                    : "text-[var(--color-brand-muted)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:01744715206"
              className="flex items-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-accent)] text-white px-5 py-2.5 rounded-full font-bangla font-medium transition-colors"
            >
              <PhoneCall size={18} />
              <span>কল করুন</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-brand-dark)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-bangla text-lg font-medium p-2 rounded-md ${
                pathname === link.href
                  ? "bg-[var(--color-brand-beige)] text-[var(--color-brand-green)]"
                  : "text-[var(--color-brand-dark)] hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:01744715206"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[var(--color-brand-green)] text-white px-5 py-3 rounded-xl font-bangla font-medium mt-2"
          >
            <PhoneCall size={20} />
            <span>01744-715206</span>
          </a>
        </div>
      )}
    </header>
  );
}
