import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Phone, Menu, X, CheckCircle2, CalendarCheck, ShieldCheck, Video, FileText,
  Home as HomeIcon, Briefcase, Banknote, FileSignature, KeyRound, ScrollText, RefreshCw, Wallet,
  ShieldCheck as ShieldIcon, Clock, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import logo from "@/assets/virginia-notary-logo.png";
import logoDark from "@/assets/virginia-notary-logo-dark.png";

const PAGE_TITLE = "Virginia Notary for Florida Real Estate Closings | RON Notary Services";
const PAGE_DESC = "Need a notary for your Florida real estate closing? Virginia Notary provides certified Remote Online Notarization for Florida buyers, sellers, and title companies. Available 7 days a week.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virginia Notary — Florida Real Estate Closing Services",
  provider: {
    "@type": "NotaryService",
    name: "Virginia Notary",
    url: "https://virginia-notary.com",
    telephone: "(540) 603-0359",
  },
  areaServed: { "@type": "State", name: "Florida" },
  serviceType: "Remote Online Notarization",
  description:
    "Certified Virginia RON notary services for Florida real estate closings, buyer and seller signings, refinances, and mortgage documents.",
};

export const Route = createFileRoute("/florida")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: "https://virginia-notary.com/florida" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://virginia-notary.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: "https://virginia-notary.com/og-image.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
    ],
  }),
  component: FloridaPage,
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

const WHY_CARDS = [
  {
    icon: ShieldIcon,
    title: "Florida Accepts Virginia RON",
    text: "Florida law recognizes Remote Online Notarization performed by Virginia-commissioned notaries. Our certifications are accepted by Florida title companies, lenders, and courts.",
  },
  {
    icon: Clock,
    title: "Same-Day Florida Closings",
    text: "Closing emergencies happen. We offer same-day and emergency appointments for Florida real estate transactions, available 7 days a week including evenings.",
  },
  {
    icon: Building2,
    title: "We Work With Florida Title Companies",
    text: "We regularly partner with Florida title companies, real estate attorneys, and escrow officers to ensure smooth, compliant closings every time.",
  },
];

const STEPS = [
  { n: "01", icon: CalendarCheck, title: "Book Online", desc: "Schedule your appointment at virginia-notary.com/book in minutes. Same-day availability." },
  { n: "02", icon: ShieldCheck, title: "Verify Your Identity", desc: "Complete a quick, secure digital ID verification before your appointment." },
  { n: "03", icon: Video, title: "Connect via Video Call", desc: "Join your notary via secure video call from anywhere in Florida — your home, office, or closing table." },
  { n: "04", icon: FileText, title: "Receive Your Documents", desc: "Your notarized documents are delivered digitally and accepted by Florida title companies and lenders." },
];

const DOCUMENTS = [
  { icon: HomeIcon, title: "Seller Closings" },
  { icon: KeyRound, title: "Buyer Closings" },
  { icon: RefreshCw, title: "Refinance Documents" },
  { icon: FileSignature, title: "Mortgage Signings" },
  { icon: Wallet, title: "Cash Purchase Closings" },
  { icon: ScrollText, title: "Powers of Attorney" },
  { icon: Briefcase, title: "Loan Modifications" },
  { icon: Banknote, title: "HELOCs" },
];

const FAQS = [
  {
    q: "Is Remote Online Notarization legal for Florida real estate?",
    a: "Yes. Florida Statute 117.265 recognizes RON performed by out-of-state notaries, including Virginia-commissioned eNotaries. Our notarizations are fully legal and accepted by Florida title companies and lenders.",
  },
  {
    q: "Can a Virginia notary notarize Florida real estate documents?",
    a: "Yes. Virginia RON notaries are authorized to notarize documents for Florida clients remotely. Virginia was one of the first states to authorize RON and our certifications are widely accepted in Florida.",
  },
  {
    q: "How quickly can I get a closing notarized?",
    a: "We offer same-day appointments 7 days a week. Book online and we'll confirm within 2 hours during business hours.",
  },
  {
    q: "What do I need for a remote closing?",
    a: "A computer, tablet, or smartphone with a camera, a valid government-issued ID, and a stable internet connection. We'll guide you through everything.",
  },
  {
    q: "How much does it cost?",
    a: "Visit our Pricing page for current rates. We offer competitive flat-rate pricing for Florida real estate closings.",
  },
];

function FloridaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Virginia Notary — RON & Mobile Services" className="h-14 sm:h-16 w-auto" />
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm text-slate-500">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors whitespace-nowrap">
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

      {/* Hero */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-4">Florida Real Estate Closings</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Virginia Notary Services for{" "}
            <span className="bg-gradient-to-r from-pink-700 via-rose-700 to-rose-900 bg-clip-text text-transparent">
              Florida Real Estate Closings
            </span>
          </h1>
          <p className="lg:text-xl text-slate-500 mt-6 max-w-3xl mx-auto leading-relaxed text-base">
            Certified RON notary serving Florida buyers, sellers, title companies, and real estate attorneys —
            remotely via secure video call. No travel required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/book">
              <Button size="lg" className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-rose-900/30 w-full sm:w-auto">
                Book Your Closing
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Florida */}
      <section className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Why Florida</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Florida Clients Choose Virginia Notary
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center mb-5 shadow-lg shadow-rose-900/25">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Florida Remote Closings Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <span className="absolute top-6 right-6 text-4xl font-extrabold text-slate-100">{s.n}</span>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center mb-5 shadow-lg shadow-rose-900/25">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Documents */}
      <section className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Florida Real Estate Documents We Notarize
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {DOCUMENTS.map((d) => (
              <div key={d.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:shadow-md transition-all">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center mb-3 shadow-md shadow-rose-900/25">
                  <d.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{d.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <details key={item.q} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                  {item.q}
                  <span className="ml-4 text-rose-800 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-rose-950 via-pink-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-pink-500 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Close Your Florida Property?
          </h2>
          <p className="text-base lg:text-lg text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed">
            Book your appointment online in minutes. Same-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/book">
              <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 rounded-full px-10 py-6 text-base font-semibold shadow-xl w-full sm:w-auto">
                Book Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setQuoteOpen(true)}
              className="rounded-full px-10 py-6 text-base font-semibold border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto"
            >
              Get a Free Quote
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-rose-300" />
            Available 7 days a week
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-950 text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm lg:flex-row lg:justify-between lg:gap-4">
          <img src={logoDark} alt="Virginia Notary" className="h-11 w-auto shrink-0" />
          <p className="text-center order-last lg:order-none lg:text-left">
            © {new Date().getFullYear()} Virginia Notary. All Rights Reserved. Powered by{" "}
            <span className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-transparent font-semibold">OpenSked™</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 shrink-0">
            <Link to="/florida" className="hover:text-white transition-colors whitespace-nowrap">Florida Real Estate Closings</Link>
            <Link to="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors whitespace-nowrap">Cookie Policy</Link>
          </div>
        </div>
      </footer>

      <QuoteFormModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
}
