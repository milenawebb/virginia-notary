import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/virginia-notary-logo.png";
import logoDark from "@/assets/virginia-notary-logo-dark.png";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#how", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
  { href: "/#join-team", label: "Join Our Team" },
];

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden flex flex-col">
      {/* Nav — matches homepage */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Virginia Notary — RON & Mobile services"
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm text-slate-500">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
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
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="w-full mt-2 pt-2 border-t border-slate-100 flex flex-col items-center gap-2">
                <a
                  href="tel:+15406030359"
                  className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 hover:text-slate-900"
                >
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

      {/* Page content */}
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
          <div className="mt-8 space-y-6 text-slate-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-1 [&_p]:text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-rose-800 [&_a:hover]:text-rose-900 [&_a]:underline">
            {children}
          </div>
        </div>
      </main>

      {/* Footer — matches homepage */}
      <footer className="border-t border-slate-100 bg-slate-950 text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm lg:flex-row lg:justify-between lg:gap-4">
          <img src={logoDark} alt="Virginia Notary" className="h-10 w-auto shrink-0" />
          <p className="text-center order-last lg:order-none lg:text-left">
            © {new Date().getFullYear()} Virginia Notary. All Rights Reserved. Powered by{" "}
            <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent font-semibold">
              OpenSked™
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 shrink-0">
            <Link to="/privacy" className="hover:text-white transition-colors whitespace-nowrap">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors whitespace-nowrap">
              Terms
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
