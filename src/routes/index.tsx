import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, MapPin, Calendar, Zap, ArrowRight, ArrowUp, Check, CheckCircle2, Phone, Mail, Clock, Award,
  Home as HomeIcon, Briefcase, HeartPulse, Users, Car, FileText,
  CalendarCheck, ShieldCheck, Video, Globe2, Stamp, Sparkles, CalendarClock,
  UserPlus, LogIn, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeferredQuoteForm } from "@/components/DeferredQuoteForm";
import globalNetwork from "@/assets/global-network.webp.asset.json";
import globalNetworkMobile from "@/assets/global-network-640.webp.asset.json";
import logo from "@/assets/virginia-notary-logo.webp.asset.json";
import logoDark from "@/assets/virginia-notary-logo-dark.webp.asset.json";
import fifthExitLogo from "@/assets/fifthexit-logo-for-dark.webp.asset.json";

const HOME_FAQS = [
  { q: "What is Remote Online Notarization?", a: "RON allows you to have documents notarized via live video call, without needing to meet in person. It's legal, secure, and accepted in all 50 states." },
  { q: "What do I need for a RON session?", a: "A computer or smartphone with camera and microphone, a valid government-issued photo ID, and an internet connection." },
  { q: "How long does it take?", a: "Most sessions take 15-30 minutes depending on the number of documents." },
  { q: "Is RON legally accepted everywhere?", a: "RON documents notarized in Virginia are accepted in all 50 states and internationally in most countries." },
  { q: "What are your fees?", a: "Fees vary by document type and quantity. Request a free quote or view our fee schedule." },
  { q: "Do you offer emergency services?", a: "Yes! Short notice and emergency notarizations are always welcome. Call (434) 260-0070 anytime." },
];

const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Virginia Notary",
    url: "https://virginia-notary.com",
    logo: "https://virginia-notary.com/og-image.png",
    telephone: "(434) 260-0070",
    email: "notary@virginia-notary.com",
    address: { "@type": "PostalAddress", addressLocality: "Charlottesville", addressRegion: "VA", postalCode: "22911", addressCountry: "US" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Virginia Notary",
    url: "https://virginia-notary.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virginia Notary: RON & Mobile Notary Services" },
      {
        name: "description",
        content:
          "Book a certified Virginia notary online in minutes. Remote Online Notarization and Mobile Notary services available 7 days a week.",
      },
      { property: "og:title", content: "Virginia Notary: RON & Mobile Notary Services" },
      {
        property: "og:description",
        content: "Book a certified Virginia notary online in minutes. Remote Online Notarization and Mobile Notary services available 7 days a week.",
      },
      { property: "og:url", content: "https://virginia-notary.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Virginia Notary: RON & Mobile Notary Services" },
      { name: "twitter:description", content: "Book a certified Virginia notary online in minutes. Remote Online Notarization and Mobile Notary services available 7 days a week." },
    ],
    links: [{ rel: "canonical", href: "https://virginia-notary.com/" }],
    scripts: HOME_JSON_LD.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  }),
  component: LandingPage,
});

const HERO_BADGES = [
  { icon: Shield, label: "Licensed & Bonded" },
  { icon: MapPin, label: "All 50 States & International" },
  { icon: Calendar, label: "Available 7 days/week" },
  { icon: Zap, label: "Emergency Appointments" },
];

const SERVICES = [
  { icon: HomeIcon, title: "Real Estate Documents", desc: "Seller closings, buyer closings, refinance, and mortgage documents.", color: "from-rose-500 to-rose-600" },
  { icon: Briefcase, title: "Business Documents", desc: "Contracts, corporate documents, employment and financial documents.", color: "from-pink-600 to-pink-700" },
  { icon: HeartPulse, title: "Medical Documents", desc: "Healthcare directives, medical powers of attorney, HIPAA forms.", color: "from-fuchsia-600 to-pink-700" },
  { icon: Users, title: "Family Documents", desc: "Adoption, divorce, wills, domestic partnership, estate documents.", color: "from-rose-400 to-rose-500" },
  { icon: Car, title: "Motor Vehicle Documents", desc: "DMV documents, title transfers, traffic school exams.", color: "from-emerald-500 to-emerald-600" },
  { icon: FileText, title: "Additional Services", desc: "Acknowledgments, jurats, oaths, passport documents, jail documents.", color: "from-amber-500 to-amber-600" },
];

const STEPS = [
  { n: "01", icon: CalendarCheck, title: "Book Your Appointment", desc: "Schedule online in minutes, 7 days a week including evenings and holidays." },
  { n: "02", icon: ShieldCheck, title: "Verify Your Identity", desc: "Secure online ID verification through our trusted notarization platform." },
  { n: "03", icon: Video, title: "Sign Your Documents", desc: "Connect via video call and complete your notarization from anywhere." },
];

const RON_FEATURES = [
  "Notarize from home or office",
  "Available to all 50 states",
  "International clients welcome",
  "No travel required",
  "Documents delivered digitally",
  "Fastest turnaround",
];

const MOBILE_FEATURES = [
  "In-person at your location",
  "Charlottesville & surrounding areas",
  "Flexible scheduling",
  "Great for large document packages",
  "Personal one-on-one service",
];

const REASONS = [
  "Notarize from home",
  "Serve all 50 states",
  "International clients welcome",
  "Online ID verification",
  "No travel needed",
  "Flexible appointment times",
  "Short notice & emergency welcome",
  "7 days a week availability",
];

const RON_FEES = [
  { tier: "1 seal", price: "$60", highlight: true },
  { tier: "2 seals", price: "$120" },
  { tier: "3–5 seals", price: "$180" },
  { tier: "6–10 seals", price: "$220" },
  { tier: "RE Purchase File", price: "$340" },
  { tier: "RE Refinance File", price: "$300" },
];

const RON_FEE_INCLUSIONS = [
  "Up to 2 signers",
  "ID proofing included",
  "Includes signatures that do not need notarization",
];

const RON_FEE_NOTES = [
  "$30 upcharge for each additional signer",
  "$20 upcharge for each additional 30 minutes after the 1st hour",
  "$30 flat fee for international signing (signors are outside the US)",
];

const FAQS = HOME_FAQS;

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Location", value: "Charlottesville, VA 22911" },
  { icon: Mail, label: "Email", value: "notary@virginia-notary.com", href: "mailto:notary@virginia-notary.com" },
  { icon: Phone, label: "Phone", value: "(434) 260-0070", href: "tel:+14342600070" },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 8am – 8pm" },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#careers", label: "Join Our Network" },
  { href: "#contact", label: "Contact" },
];

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById("services");
      if (!services) {
        setShowScrollTop(false);
        return;
      }
      const triggerY = services.getBoundingClientRect().top + window.scrollY;
      setShowScrollTop(window.scrollY >= triggerY - 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Smooth-scroll to hash section on page load and hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      // Wait a frame for the DOM to be fully laid out
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);



  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-clip">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo.url} width={600} height={200} loading="eager" fetchPriority="high" decoding="async"
              alt="Virginia Notary: RON & Mobile Services"
              className="h-14 sm:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav (lg+) */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm text-muted-foreground">
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

          {/* Centered hamburger for tablet (md to lg) */}
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

          {/* Right side actions */}
          <div className="flex gap-2 sm:gap-3 items-center shrink-0">
            <a
              href="tel:+14342600070"
              className="hidden xl:flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (434) 260-0070
            </a>
            <Link to="/book" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-5 sm:px-6 shadow-lg shadow-rose-900/25 text-sm font-medium">
                Book Now
              </Button>
            </Link>

            {/* Hamburger for mobile only (below md) */}
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

        {/* Mobile / Tablet dropdown menu */}
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
                  href="tel:+14342600070"
                  className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 hover:text-slate-900"
                >
                  <Phone className="h-4 w-4" />
                  (434) 260-0070
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

        <div className="relative max-w-7xl mx-auto text-center">


          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] max-w-5xl mx-auto tracking-tight">
            Professional Notary Services{" "}
            <span className="bg-gradient-to-r from-pink-700 via-rose-700 to-rose-900 bg-clip-text text-transparent">
              from the comfort of your home
            </span>
          </h1>

          <p className="lg:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed text-base">
            Certified Virginia Electronic Notaries serving all 50 states and International clients.<br />
            Remote Online Notarizations available 7 days a week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/book">
              <Button size="lg" className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-rose-900/30 w-full sm:w-auto">
                Book Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full px-10 py-6 text-base font-semibold border-slate-200 bg-white shadow-sm w-full sm:w-auto"
            >
              Explore Pricing
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {HERO_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-700 text-sm"
              >
                <b.icon className="h-4 w-4 text-rose-800 shrink-0" />
                <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </div>

          <div id="about" className="mt-20 max-w-6xl mx-auto scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center text-left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-100 aspect-[4/5]">
                  <img
                    src={globalNetwork.url}
                    srcSet={`${globalNetworkMobile.url} 640w, ${globalNetwork.url} 1024w`}
                    sizes="(min-width: 1024px) 550px, calc(100vw - 48px)"
                    decoding="async"
                    alt="Modern remote notary workspace with laptop"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-slate-100 whitespace-nowrap">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs">Certified, Bonded & Insured</p>
                    <p className="text-xs text-muted-foreground">Trusted notary network</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">About Virginia Notary</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                  Services Without Boundaries
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Virginia Notary</span> is a trusted network of certified, bonded, and insured notary professionals dedicated to making the notarization process simple, secure, and accessible, no matter where you are in the world.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Based in the Commonwealth of Virginia, our notaries are uniquely positioned to serve clients across all 50 United States and internationally. Virginia's progressive Remote Online Notarization laws allow our certified electronic notaries to legally notarize documents for clients located anywhere in the world, from London to Tokyo, Dubai to São Paulo, as long as our notaries are physically present in Virginia at the time of signing.
                </p>

                <h3 className="mt-8 text-xl font-bold text-slate-900">The Virginia Advantage</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Virginia was one of the first states in the nation to enact comprehensive Remote Online Notarization legislation, making it a leader in digital notarization services. Documents notarized by our Virginia-commissioned notaries carry full legal authority and are widely accepted by courts, financial institutions, government agencies, and international bodies worldwide.
                </p>

              </div>
            </div>
          </div>

          <div id="why-us" className="mt-20 max-w-6xl mx-auto scroll-mt-20">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why hire us?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {REASONS.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="services" className="mt-20 scroll-mt-20">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Choose Your Service</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Two ways to get notarized
              </h2>
              <p className="text-sm text-muted-foreground mt-3">Click a card to start your booking.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/book"
                className="relative block text-left rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-rose-800 to-pink-900 text-white shadow-2xl shadow-pink-900/40 hover:-translate-y-1 hover:shadow-pink-900/50 transition-all"
              >
                <span className="absolute -top-3 left-8 bg-white text-rose-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                  Recommended
                </span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center">
                    <Globe2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Remote Online Notarization</h3>
                </div>
                <ul className="space-y-3">
                  {RON_FEATURES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Book RON <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <div
                aria-disabled="true"
                className="relative block text-left rounded-3xl p-8 lg:p-10 bg-muted border border-slate-100 shadow-sm cursor-not-allowed select-none"
              >
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-slate-900 text-white text-xs font-semibold px-3 py-1 shadow">
                  Coming Soon
                </span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Car className="h-5 w-5 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Mobile Notary</h3>
                </div>
                <ul className="space-y-3">
                  {MOBILE_FEATURES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-green-500" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                  Book Mobile <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="scope" className="py-12 lg:py-16 px-6 bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Scope of Services</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How can we help you?
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-3xl mx-auto">
              Comprehensive notary services for every type of document, all delivered with the highest professional standards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group bg-slate-50/50 rounded-xl p-5 border border-slate-100 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-lg shadow-pink-500/10 group-hover:scale-105 transition-transform`}>
                  <s.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RON Pricing */}
      <section id="pricing" className="py-24 lg:py-32 px-6 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Remote Online Notarization Fees</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent, flat-rate pricing
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Every package includes ID proofing and signatures that don't require notarization, with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {RON_FEES.map((fee) => (
              <div
                key={fee.tier}
                className={`rounded-2xl p-5 border text-center transition-all duration-300 hover:-translate-y-1 ${
                  fee.highlight
                    ? "bg-gradient-to-br from-rose-800 to-pink-900 border-transparent text-white shadow-xl shadow-rose-900/30"
                    : "bg-white border-slate-100 hover:shadow-lg"
                }`}
              >
                <h3 className={`text-sm font-bold mb-2 ${fee.highlight ? "text-white" : "text-slate-900"}`}>
                  {fee.tier}
                </h3>
                <p className={`text-3xl font-extrabold tracking-tight ${fee.highlight ? "text-white" : "text-slate-900"}`}>
                  {fee.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rose-800" />
                Every package includes
              </h3>
              <ul className="space-y-2">
                {RON_FEE_INCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-rose-800 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-800" />
                Additional fees
              </h3>
              <ul className="space-y-2">
                {RON_FEE_NOTES.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-rose-800 mt-0.5">*</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10 flex flex-col items-center gap-4">
            <Link to="/book">
              <Button size="lg" className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-rose-900/30">
                Book Your Notarization
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-slate-600">Have a custom order or questions? Get a free quote.</p>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setQuoteOpen(true)}
              className="rounded-full px-10 py-6 text-base font-semibold border-rose-800 text-rose-800 hover:bg-rose-50 hover:text-rose-900 bg-white shadow-sm"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-slate-950 via-rose-950 to-slate-950 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3">Simple Online Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Notarize in 3 simple steps
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto">
            From booking to sealed PDF in under 30 minutes: no appointments in person, no traffic, no paperwork.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Step {s.n}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-24 lg:py-32 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">
            Book Online
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            Schedule your Remote Online Notarization in minutes. Available 7 days a week, including evenings and holidays.
          </p>
          <div className="mt-10">
            <Link to="/book">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-12 py-7 text-lg font-semibold shadow-xl shadow-rose-900/30"
              >
                Book Your Appointment
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition"
              >
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

      {/* Contact */}
      <section id="contact" className="py-24 lg:py-32 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-800 uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact information
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map((it) => {
              const content = (
                <>
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center mb-4 shadow-lg shadow-rose-900/25 mx-auto sm:mx-0">
                    <it.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">{it.label}</p>
                  <p className="text-slate-900 font-semibold text-sm whitespace-nowrap">{it.value}</p>
                </>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  className="block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center sm:text-left"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={it.label}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center sm:text-left"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join our Team */}
      <section id="careers" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-rose-950 via-pink-950 to-slate-950 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-pink-500 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3">Careers</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Join our Network
            </h2>
            <p className="text-base lg:text-lg text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed">
              Are you a Notary Public looking to grow your business? Sign in to your OpenSked℠ provider account
              to manage appointments, accept new clients, and access training resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <a
              href="https://opensked.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-5 shadow-lg shadow-rose-900/40">
                <LogIn className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Existing Notaries</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Already part of our network? Sign in to your OpenSked℠ notary portal.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-300 group-hover:text-rose-200">
                Notary Login <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <Link
              to="/join"
              className="group block p-8 rounded-3xl bg-gradient-to-br from-brand-action to-brand-action-end hover:from-brand-action-end hover:to-brand-action transition-all hover:-translate-y-1 shadow-2xl shadow-pink-900/40"
            >
              <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-5">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">New Notaries</h3>
              <p className="text-sm text-rose-50 leading-relaxed mb-5">
                Become a certified notary partner and start receiving client bookings through OpenSked℠.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Apply to Join <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-950 text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm lg:flex-row lg:justify-between lg:gap-4">
          <Link to="/" aria-label="Virginia Notary - Home" className="shrink-0">
            <img src={logoDark.url} width={600} height={200} loading="lazy" decoding="async" alt="Virginia Notary" className="h-11 w-auto" />
          </Link>
          <div className="order-last lg:order-none flex flex-col items-center gap-2 lg:flex-row lg:flex-wrap lg:gap-x-2 lg:text-left text-center">
            <p>
              © {new Date().getFullYear()} Virginia Notary. All Rights Reserved. Powered by{" "}
              <a
                href="https://opensked.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-link font-semibold hover:text-footer-link-hover transition-colors"
              >
                OpenSked℠
              </a>
            </p>
            <span className="inline-flex items-center gap-0.5">
              Web design by
              <a href="https://fifthexit.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={fifthExitLogo.url} width={300} height={100} loading="lazy" decoding="async" alt="Fifth Exit" className="h-4 w-auto" />
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 shrink-0">
            <Link to="/florida" className="hover:text-white transition-colors whitespace-nowrap">Florida Real Estate Closings</Link>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link to="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors whitespace-nowrap">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white shadow-lg shadow-rose-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <DeferredQuoteForm open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
}
