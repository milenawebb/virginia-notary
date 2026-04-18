import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Video, FileSignature, ShieldCheck, Clock, Globe2, Lock,
  Check, ArrowRight, Stamp, Scale, Home as HomeIcon, Briefcase, HeartPulse, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-notary.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virginia Notary — Online Electronic Notary, Available 24/7" },
      {
        name: "description",
        content:
          "Get documents notarized online in minutes by a Virginia commissioned electronic notary. Secure, legally binding remote online notarization (RON) — available nationwide.",
      },
      { property: "og:title", content: "Virginia Notary — Online Electronic Notary" },
      {
        property: "og:description",
        content:
          "Notarize documents from anywhere with a commissioned Virginia electronic notary. Secure, fast, and legally recognized in all 50 states.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: LandingPage,
});

const FEATURES = [
  {
    icon: Video,
    title: "Remote Online Notarization",
    desc: "Meet your notary face-to-face on a secure video call from anywhere in the world. No printing, no driving, no waiting rooms.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileSignature,
    title: "Legally Binding eSignatures",
    desc: "Documents are signed and sealed electronically with a tamper-evident digital certificate that meets Virginia and federal law.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Identity Verified",
    desc: "Multi-factor identity proofing with KBA and government ID verification — exceeding Virginia's RON requirements.",
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    desc: "Need a notary at midnight? On a Sunday? We're online when you need us — most sessions completed in under 15 minutes.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Globe2,
    title: "Notarize From Anywhere",
    desc: "Virginia electronic notarizations are recognized in all 50 states and over 90 countries. Sign from your couch, your office, or abroad.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    desc: "End-to-end encryption, audit trails, and a permanent tamper-sealed copy delivered to your inbox — every session, every time.",
    color: "from-amber-500 to-amber-600",
  },
];

const DOCUMENTS = [
  { icon: HomeIcon, label: "Real Estate & Closings" },
  { icon: Scale, label: "Affidavits & Legal" },
  { icon: Briefcase, label: "Business Contracts" },
  { icon: HeartPulse, label: "Power of Attorney" },
  { icon: Building2, label: "Trusts & Estate Docs" },
  { icon: FileSignature, label: "Title Transfers" },
];

const STEPS = [
  {
    step: "01",
    title: "Upload Your Document",
    desc: "Drag and drop the PDF or document you need notarized. Add signers and tag any required signatures.",
  },
  {
    step: "02",
    title: "Verify Your Identity",
    desc: "Confirm your identity with a quick ID scan and knowledge-based authentication — the secure standard for RON.",
  },
  {
    step: "03",
    title: "Meet Your Notary on Video",
    desc: "Connect with a commissioned Virginia electronic notary, sign your document, and get it notarized live.",
  },
  {
    step: "04",
    title: "Download & Share",
    desc: "Receive your tamper-sealed, electronically notarized document instantly — legally binding and ready to use.",
  },
];

const PRICING = [
  {
    name: "Single Notarization",
    price: "$25",
    period: "per session",
    desc: "One document, one notary seal. Perfect for a one-off signing.",
    features: [
      "Up to 1 notary seal",
      "Live video session",
      "Identity verification included",
      "Sealed PDF delivered instantly",
      "Stored securely for 7 years",
    ],
    cta: "Notarize Now",
    highlighted: false,
  },
  {
    name: "Multi-Seal Session",
    price: "$10",
    period: "per additional seal",
    desc: "Multiple documents in a single session — only pay $25 for the first seal.",
    features: [
      "Unlimited additional seals",
      "Single live session",
      "Multiple signers supported",
      "All documents tamper-sealed",
      "Priority queue access",
    ],
    cta: "Start Session",
    highlighted: true,
  },
  {
    name: "Business Plan",
    price: "Custom",
    period: "volume pricing",
    desc: "For title companies, law firms, and high-volume teams.",
    features: [
      "Dedicated notaries",
      "API & integration support",
      "Custom branding",
      "Volume discounts",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Stamp className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Virginia<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> Notary</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm text-slate-500">
            <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#pricing" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Sign in
            </a>
            <a href="#pricing">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full px-6 shadow-lg shadow-violet-500/20 text-sm font-medium">
                Notarize Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-violet-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs text-slate-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Commissioned in the Commonwealth of Virginia
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] max-w-5xl mx-auto tracking-tight">
            Notarize any document,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              online in minutes
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-500 mt-6 max-w-3xl mx-auto leading-relaxed">
            Meet a commissioned Virginia electronic notary on a secure video call, sign your documents,
            and walk away with a tamper-sealed legal record — all without leaving home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#pricing">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-violet-500/25 w-full sm:w-auto">
                Start a Session
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#how">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-slate-200 bg-white shadow-sm w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Legally binding in all 50 states</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Average session under 15 min</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Available 24/7</span>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-2 shadow-2xl shadow-slate-300/40 border border-slate-100">
              <img
                src={heroImage}
                alt="Virginia Notary online electronic notarization session"
                className="rounded-2xl w-full"
                width={1280}
                height={896}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document types */}
      <section className="py-16 border-y border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-slate-400 mb-8 uppercase tracking-wider font-medium text-center">
            Notarize any document, anywhere
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DOCUMENTS.map((d) => (
              <div
                key={d.label}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <d.icon className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700 leading-tight">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Why Virginia Notary</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The fastest, safest way to get notarized
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">
              Built on Virginia's industry-leading remote online notarization laws — the gold standard for digital signings nationwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Notarized in four simple steps
          </h2>
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto">
            From upload to sealed PDF in under 15 minutes — no appointments, no traffic, no paperwork.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="text-left">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-blue-300">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
              Pay only for what you need. No subscriptions, no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 border transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-blue-600 to-violet-600 border-transparent text-white shadow-2xl shadow-violet-500/30 scale-105"
                    : "bg-white border-slate-100 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-violet-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-white" : "text-green-500"}`} />
                      <span className={plan.highlighted ? "text-white" : "text-slate-700"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full py-6 font-semibold ${
                    plan.highlighted
                      ? "bg-white text-violet-600 hover:bg-blue-50"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Is online notarization legal?",
                a: "Yes. Remote online notarization (RON) performed by a Virginia commissioned electronic notary is legally valid in all 50 states under the Uniform Electronic Transactions Act and Virginia Code § 47.1-2.",
              },
              {
                q: "Do I need to live in Virginia to use this service?",
                a: "No. Anyone in the world can be notarized by a Virginia electronic notary, as long as they have a valid government-issued ID and a device with camera and microphone.",
              },
              {
                q: "How long does a session take?",
                a: "Most sessions are completed in under 15 minutes — including identity verification, the live notary call, and document delivery.",
              },
              {
                q: "What documents can you NOT notarize?",
                a: "We cannot notarize wills, codicils, or testamentary trusts via RON in some jurisdictions. If you're unsure, contact us before booking.",
              },
              {
                q: "How will I receive my notarized document?",
                a: "Immediately after the session, your tamper-sealed PDF is emailed to you and stored securely in your account for at least 7 years.",
              },
            ].map((item) => (
              <details key={item.q} className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                  {item.q}
                  <span className="ml-4 text-violet-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 px-8 py-16 lg:px-16 lg:py-20 text-center text-white shadow-2xl shadow-violet-500/30">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to notarize?
            </h2>
            <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
              Skip the trip. Skip the wait. Get your document legally notarized from anywhere in minutes.
            </p>
            <div className="mt-8">
              <a href="#pricing">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-blue-50 rounded-full px-10 py-6 text-base font-semibold shadow-xl">
                  Start a Session
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Stamp className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-900">
              Virginia Notary
            </span>
            <span className="text-xs text-slate-400 ml-2">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
