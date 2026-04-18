import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Virginia Notary" },
      {
        name: "description",
        content:
          "Terms and conditions for using Virginia Notary's website, scheduling system, and remote and mobile notary services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="April 18, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the Virginia Notary website and the
        notary services provided by Virginia Notary ("we," "us," or "our"). By accessing or using
        our website or services, you agree to be bound by these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and capable of entering into a legally binding agreement
        to use our services. By using our services you represent that you meet these requirements.
      </p>

      <h2>2. Notarial Services</h2>
      <p>
        Notarial acts are performed by a duly commissioned Virginia notary public in accordance with
        the Code of Virginia and applicable federal law. We do not provide legal advice, and our
        notarization of a document does not constitute approval of its content or legal effect.
      </p>

      <h2>3. Scheduling, Cancellations and No-Shows</h2>
      <ul>
        <li>Appointments are scheduled subject to availability.</li>
        <li>Cancellations made less than 24 hours before the appointment may be subject to a fee.</li>
        <li>No-shows may be charged the full service fee.</li>
      </ul>

      <h2>4. Identification</h2>
      <p>
        You must present valid, government-issued photo identification at the time of notarization.
        We reserve the right to refuse service if identification cannot be verified or if we suspect
        fraud, coercion, or lack of capacity.
      </p>

      <h2>5. Fees and Payment</h2>
      <p>
        Fees are disclosed prior to the appointment and comply with the maximum amounts set by
        Virginia law for notarial acts. Travel fees, technology fees, and convenience fees may be
        charged separately as permitted by law.
      </p>

      <h2>6. Remote Online Notarization (RON)</h2>
      <p>
        RON sessions are recorded and stored as required by Virginia law. By participating in a RON
        session, you consent to being recorded and to identity verification through credential
        analysis and knowledge-based authentication.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to use our website or services to:</p>
      <ul>
        <li>Violate any law or regulation.</li>
        <li>Submit forged, altered, or fraudulent documents.</li>
        <li>Impersonate any person or misrepresent your identity.</li>
        <li>Interfere with or disrupt the operation of the website.</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and software, is owned by
        Virginia Notary or its licensors and is protected by intellectual property laws.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        Our website and services are provided on an "as is" and "as available" basis. To the
        fullest extent permitted by law, we disclaim all warranties, express or implied, including
        warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Virginia Notary shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising out of your use of our
        website or services. Our total liability for any claim shall not exceed the fees you paid
        for the specific service giving rise to the claim.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Commonwealth of Virginia, without regard to its
        conflict of laws principles. Any dispute shall be resolved in the state or federal courts
        located in Virginia.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of our website or services after
        changes are posted constitutes acceptance of the revised Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Virginia Notary &middot;{" "}
        <a href="mailto:contact@virginianotary.com">contact@virginianotary.com</a>
      </p>
    </LegalPage>
  );
}
