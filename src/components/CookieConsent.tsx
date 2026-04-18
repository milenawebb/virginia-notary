import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "vn-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:left-6 sm:right-6 sm:bottom-6 z-[60] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-rose-900/10"
    >
      <div className="flex flex-col gap-3 p-4 sm:p-5 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex-1 text-sm text-slate-700">
          <p className="font-semibold text-slate-900 mb-1">We value your privacy</p>
          <p className="text-slate-600 leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            Under US privacy laws (including CCPA/CPRA), you may opt out of the sale or sharing of your
            personal information. See our{" "}
            <Link to="/cookie-policy" className="text-rose-800 underline hover:text-rose-900">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-rose-800 underline hover:text-rose-900">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            onClick={() => persist("rejected")}
            className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Reject
          </Button>
          <Button
            onClick={() => persist("accepted")}
            className="rounded-full bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white shadow-md shadow-rose-900/25"
          >
            Accept All
          </Button>
          <button
            type="button"
            aria-label="Close"
            onClick={() => persist("rejected")}
            className="ml-1 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 sm:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
