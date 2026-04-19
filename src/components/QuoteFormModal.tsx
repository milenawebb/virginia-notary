import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqewboon";

type Status = "idle" | "submitting" | "success" | "error";

interface QuoteFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteFormModal({ open, onOpenChange }: QuoteFormModalProps) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      // Reset status when closing
      setTimeout(() => setStatus("idle"), 200);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Get a Free Quote
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Tell us about your notarization needs and we'll get back to you within 1 business day.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-base font-semibold text-slate-900">
              Thank you! We'll be in touch within 2 hours during business hours.
            </p>
            <Button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-6 bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full px-8"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="qf-name">Full Name *</Label>
                <Input id="qf-name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="qf-phone">Phone</Label>
                <Input id="qf-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="qf-email">Email *</Label>
              <Input id="qf-email" name="email" type="email" required autoComplete="email" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="qf-service">Service Needed</Label>
              <select
                id="qf-service"
                name="service"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="Remote Online Notarization">Remote Online Notarization</option>
                <option value="Mobile Notary">Mobile Notary</option>
                <option value="Real Estate Documents">Real Estate Documents</option>
                <option value="Business Documents">Business Documents</option>
                <option value="Medical Documents">Medical Documents</option>
                <option value="Family Documents">Family Documents</option>
                <option value="Motor Vehicle Documents">Motor Vehicle Documents</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="qf-message">Tell us about your needs *</Label>
              <Textarea
                id="qf-message"
                name="message"
                required
                rows={4}
                placeholder="Number of documents, signers, timing, etc."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or email us directly at{" "}
                <a
                  href="mailto:notary@virginia-notary.com"
                  className="underline font-medium"
                >
                  notary@virginia-notary.com
                </a>
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-gradient-to-r from-rose-800 to-pink-900 hover:from-rose-900 hover:to-pink-950 text-white rounded-full py-6 text-base font-semibold shadow-lg shadow-rose-900/25"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Request Free Quote"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
