import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, MapPin, Calendar, Zap, ArrowRight, Check, Phone, Mail, Clock, Award,
  Home as HomeIcon, Briefcase, HeartPulse, Users, Car, FileText,
  CalendarCheck, ShieldCheck, Video, Globe2, Stamp, Sparkles, CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import milena from "@/assets/milena.jpg";
import logo from "@/assets/virginia-notary-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virginia Notary — Remote Online Notary Services in Virginia" },
      {
        name: "description",
        content:
          "Certified Electronic Notary serving all 50 states. Remote Online Notarizations 7 days a week. Book your appointment with Milena Webb today.",
      },
      { property: "og:title", content: "Virginia Notary — Professional Remote Online Notary" },
      {
        property: "og:description",
        content: "Certified Electronic Notary serving all 50 states and international clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: milena },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: milena },
    ],
  }),
  component: LandingPage,
});

const HERO_BADGES = [
  { icon: Shield, label: "Licensed & Bonded" },
  { icon: MapPin, label: "All 50 States" },
  { icon: Calendar, label: "Available 7 Days" },
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

const FAQS = [
  { q: "What is Remote Online Notarization?", a: "RON allows you to have documents notarized via live video call, without needing to meet in person. It's legal, secure, and accepted in all 50 states." },
  { q: "What do I need for a RON session?", a: "A computer or smartphone with camera and microphone, a valid government-issued photo ID, and an internet connection." },
  { q: "How long does it take?", a: "Most sessions take 15-30 minutes depending on the number of documents." },
  { q: "Is RON legally accepted everywhere?", a: "RON documents notarized in Virginia are accepted in all 50 states and internationally in most countries." },
  { q: "What are your fees?", a: "Fees vary by document type and quantity. Request a free quote or view our fee schedule." },
  { q: "Do you offer emergency services?", a: "Yes! Short notice and emergency notarizations are always welcome. Call (540) 603-0359 anytime." },
];

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Location", value: "Charlottesville, VA 22911" },
  { icon: Mail, label: "Email", value: "notary@virginia-notary.com", href: "mailto:notary@virginia-notary.com" },
  { icon: Phone, label: "Phone", value: "(540) 603-0359", href: "tel:+15406030359" },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 8am – 8pm" },
];

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function LandingPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Request received!", {
        description: "I'll reach out shortly to confirm your appointment.",
      });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Virginia Notary — RON & Mobile Services" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8 text-sm text-slate-500">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="tel:+15406030359"
              className="hidden sm:flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (540) 603-0359
            </a>
            <a href="#book">
              <Button className="bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white rounded-full px-6 shadow-lg shadow-pink-600/25 text-sm font-medium">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs text-slate-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Certified Electronic Notary Public
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] max-w-5xl mx-auto tracking-tight">
            Professional Notary Services{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-700 to-fuchsia-700 bg-clip-text text-transparent">
              from the comfort of your home
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-500 mt-6 max-w-3xl mx-auto leading-relaxed">
            Certified Electronic Notary serving all 50 states and international clients.
            Remote Online Notarizations available 7 days a week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#book">
              <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-pink-600/30 w-full sm:w-auto">
                Book Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-slate-200 bg-white shadow-sm w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {HERO_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-700 text-sm"
              >
                <b.icon className="h-4 w-4 text-pink-700 shrink-0" />
                <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center text-left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-100">
                  <img
                    src={milena}
                    alt="Milena Webb, Electronic Notary Public"
                    width={768}
                    height={960}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[260px] border border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Certified & Bonded</p>
                    <p className="text-xs text-slate-500">Years of experience</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Meet your notary</p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I am <span className="font-semibold text-slate-900">Milena Webb</span>, a certified, bonded, insured, and experienced
                  Electronic Notary Public serving clients across Virginia and all 50 states.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  With years of experience in remote online notarizations, I provide secure,
                  reliable, and professional notary services using one of the most trusted
                  platforms in the US.
                </p>

                <div className="mt-8 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
                  <p className="text-pink-700 text-xs font-semibold tracking-wider uppercase mb-4">
                    Commission Information
                  </p>
                  <dl className="space-y-2.5">
                    {[
                      ["Name", "Milena Webb"],
                      ["Title", "Electronic Notary Public"],
                      ["Jurisdiction", "Commonwealth of Virginia"],
                      ["Registration #", "7873500"],
                      ["Commission Expires", "Jan 31, 2028"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 text-sm">
                        <dt className="text-slate-500">{k}</dt>
                        <dd className={`font-medium ${k === "Registration #" ? "text-pink-700 font-semibold" : "text-slate-900"}`}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="mt-20 max-w-6xl mx-auto scroll-mt-20">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Why Choose Us</p>
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
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 px-6 bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How can I help you?
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">
              Comprehensive notary services for every type of document, all delivered remotely with the highest professional standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group bg-slate-50/50 rounded-2xl p-7 border border-slate-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-slate-950 via-rose-950 to-slate-950 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Notarize in 3 simple steps
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto">
            From booking to sealed PDF in under 30 minutes — no appointments in person, no traffic, no paperwork.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5">
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

      {/* Compare */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Choose Your Service</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Two ways to get notarized
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-2xl shadow-pink-600/40">
              <span className="absolute -top-3 left-8 bg-white text-pink-700 text-xs font-bold px-3 py-1 rounded-full shadow">
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
            </div>

            <div className="relative rounded-3xl p-8 lg:p-10 bg-white border border-slate-100 shadow-sm">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why hire me */}
      <section id="about" className="py-24 lg:py-32 px-6 bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Why Choose Me</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why hire me?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {REASONS.map((r) => (
              <div
                key={r}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-slate-700">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="py-24 lg:py-32 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Book Online</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
              Book your appointment online in minutes. Same-day and emergency appointments available.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-700 text-white text-xs font-semibold shadow-lg shadow-pink-600/40">
                <Sparkles className="h-3.5 w-3.5" />
                OpenSked™ Booking — Coming Soon
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="bg-white rounded-3xl shadow-2xl shadow-slate-300/30 border border-slate-100 p-6 sm:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(540) 555-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="docType" className="text-slate-700 font-medium">Document Type</Label>
                  <select
                    id="docType"
                    name="docType"
                    required
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
                  >
                    <option value="">Select document type</option>
                    <option>Real Estate</option>
                    <option>Business</option>
                    <option>Medical</option>
                    <option>Family / Estate</option>
                    <option>Motor Vehicle</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-slate-700 font-medium">Preferred Date</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 font-medium">Service Type</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
                  >
                    <option value="">Select service</option>
                    <option>Remote Online Notarization (RON)</option>
                    <option>Mobile Notary</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your documents or any special requests..."
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-pink-700" />
                  Most appointments confirmed within 1 business hour.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white rounded-full px-8 shadow-lg shadow-pink-600/30 font-semibold"
                >
                  {submitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">FAQ</p>
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
                  <span className="ml-4 text-pink-700 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
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
            <p className="text-sm font-semibold text-pink-700 uppercase tracking-wider mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact information
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map((it) => {
              const content = (
                <>
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center mb-4 shadow-lg shadow-pink-600/25">
                    <it.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{it.label}</p>
                  <p className="text-slate-900 font-semibold">{it.value}</p>
                </>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  className="block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={it.label}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-950 text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Virginia Notary" className="h-8 w-auto brightness-0 invert opacity-90" />
          </div>
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Virginia Notary. All Rights Reserved. Powered by{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent font-semibold">OpenSked™</span>
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
