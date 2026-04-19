import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/virginia-notary-logo.png";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/florida#how-it-works", label: "How It Works" },
  { href: "/florida#services", label: "Services" },
  { href: "/florida#pricing", label: "Pricing" },
  { href: "/florida#faq", label: "FAQ" },
  { href: "https://virginia-notary.com/#contact", label: "Contact" },
];

export function FloridaHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Virginia Notary — RON & Mobile Services" className="h-14 sm:h-16 w-auto" />
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 text-sm text-slate-500">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="whitespace-nowrap hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex lg:hidden flex-1 justify-center">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex gap-2 sm:gap-3 items-center shrink-0">
          <a
            href="tel:+15406030359"
            className="hidden xl:flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Phone className="h-4 w-4" />
            (540) 603-0359
          </a>
          <Link to="/book" className="hidden sm:block">
            <Button className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-5 sm:px-6 shadow-lg shadow-rose-900/25 text-sm font-medium">
              Book Now
            </Button>
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <div className="w-full mt-2 pt-2 border-t border-slate-100 flex flex-col items-center gap-2">
              <a href="tel:+15406030359" className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 hover:text-slate-900">
                <Phone className="h-4 w-4" />
                (540) 603-0359
              </a>
              <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full shadow-lg shadow-rose-900/25 text-sm font-medium">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
