"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApertureLogo from "./ApertureLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/#solutions" },
    { name: "How It Works", href: "/#philosophy" },
    { name: "14-Day Audit", href: "/#process" },
    { name: "Our Mission", href: "/mission" },
    { name: "WA Grants", href: "/#grants" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs"
          : "bg-white border-b border-zinc-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Mark + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="hAI Mate! Home"
          >
            <ApertureLogo
              className="h-8 w-8 group-hover:scale-105 transition-transform duration-200"
              glow
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-zinc-950 font-sans flex items-baseline">
                hAI Mate
                <span className="inline-block relative">
                  !
                  <span
                    className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC]"
                    style={{ bottom: "2px", right: "0px" }}
                  />
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium -mt-1">
                Applied AI for Hospitality
              </span>
            </div>
          </Link>

          {/* Center Links - Clean & Minimal */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center px-4.5 py-2.5 text-sm font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-xs group"
            >
              <span>Book an Audit</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#00BFCC] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-zinc-900 text-white"
            >
              Book Audit
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-800 hover:text-zinc-950"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800"
            >
              Book 14-Day Venue Review
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
