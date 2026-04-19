import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/virginia-notary-logo.png";
import logoDark from "@/assets/virginia-notary-logo-dark.png";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Appointment — Virginia Notary" },
      {
        name: "description",
        content:
          "Schedule your Remote Online Notarization with Virginia Notary. Available 7 days a week, including evenings and holidays.",
      },
      { property: "og:title", content: "Book Your Appointment — Virginia Notary" },
      {
        property: "og:description",
        content:
          "Schedule your Remote Online Notarization with Virginia Notary. Available 7 days a week.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BookPage,
});

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#how", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
  { href: "/#join-team", label: "Join Our Team" },
];

function BookPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden flex flex-col">
      {/* Nav — matches homepage */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <Link to="/" className="flex flex-col items-start shrink-0 leading-none">
            <img
              src={logo}
              alt="Virginia Notary — RON & Mobile Services"
              className="h-9 sm:h-10 w-auto"
            />
            <span className="mt-1 text-[10px] sm:text-xs text-slate-500">
              Powered by{" "}
              <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent font-semibold">
                OpenSked™
              </span>
            </span>
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
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6">
          <iframe
            title="Book your Virginia Notary appointment"
            src="https://opensked.com/book/virginia-notary"
            width="100%"
            height="700"
            frameBorder={0}
            scrolling="yes"
            style={{
              border: "none",
              display: "block",
              width: "100%",
              height: "calc(100vh - 200px)",
              minHeight: "700px",
            }}
          />
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
