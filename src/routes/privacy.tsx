import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Virginia Notary" },
      {
        name: "description",
        content:
          "How Virginia Notary collects, uses, discloses, and protects your personal information, including CCPA/CPRA rights for US residents.",
      },
      { property: "og:title", content: "Privacy Policy - Virginia Notary" },
      {
        property: "og:description",
        content:
          "How Virginia Notary collects, uses, and protects your personal information, with US state privacy rights details.",
      },
      { property: "og:url", content: "https://virginia-notary.com/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://virginia-notary.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="April 18, 2026">
      <p>
        Virginia Notary ("we," "us," or "our") respects your privacy and is committed to protecting
        your personal information. This Privacy Policy describes how we collect, use, disclose, and
        safeguard information when you visit our website or use our remote and mobile notary services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li><strong>Identifiers:</strong> name, email, phone number, mailing address.</li>
        <li><strong>Government identification:</strong> as required by law for notarial acts.</li>
        <li><strong>Transaction data:</strong> appointment details, documents notarized, payment records.</li>
        <li><strong>Technical data:</strong> IP address, browser type, device identifiers, usage analytics.</li>
        <li><strong>Audio/video recordings:</strong> mandatory for Remote Online Notarizations under Virginia law.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To perform notarial services and maintain the notary journal as required by law.</li>
        <li>To verify your identity and prevent fraud.</li>
        <li>To schedule, confirm, and follow up on appointments.</li>
        <li>To process payments and issue receipts.</li>
        <li>To comply with legal, regulatory, and recordkeeping obligations.</li>
        <li>To improve our website, services, and customer support.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We may share information with service providers
        (scheduling, payment processing, identity verification, video conferencing), with parties
        you authorize, and as required by law, subpoena, or legitimate government request.
      </p>

      <h2>4. Your US Privacy Rights (CCPA/CPRA and Similar Laws)</h2>
      <p>
        If you are a resident of California, Virginia, Colorado, Connecticut, Utah, or another state
        with a comprehensive privacy law, you may have the right to:
      </p>
      <ul>
        <li>Know what personal information we collect, use, and disclose.</li>
        <li>Access or request a copy of your personal information.</li>
        <li>Request deletion or correction of your personal information.</li>
        <li>Opt out of the sale or sharing of personal information (we do not sell personal information).</li>
        <li>Limit the use of sensitive personal information.</li>
        <li>Be free from discrimination for exercising these rights.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:notary@virginia-notary.com">notary@virginia-notary.com</a>. We will verify
        your request and respond within the timeframes required by applicable law.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain notary journal records, audio/video recordings, and related documents for the
        period required by Virginia law (currently a minimum of five years for RON recordings).
        Other personal information is retained only as long as necessary for the purposes described
        above or to comply with legal obligations.
      </p>

      <h2>6. Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards designed to
        protect your information. No system is 100% secure; please use strong passwords and protect
        your login credentials.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our services are not directed to children under 13, and we do not knowingly collect personal
        information from children.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The "Last updated" date at the top of
        this page indicates when it was last revised.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        Virginia Notary &middot;{" "}
        <a href="mailto:notary@virginia-notary.com">notary@virginia-notary.com</a>
      </p>
    </LegalPage>
  );
}
