import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Virginia Notary" },
      {
        name: "description",
        content:
          "Learn how Virginia Notary uses cookies and similar technologies, and how to manage your cookie preferences.",
      },
      { property: "og:title", content: "Cookie Policy — Virginia Notary" },
      {
        property: "og:description",
        content:
          "How Virginia Notary uses cookies and similar tracking technologies, and how you can manage your preferences.",
      },
      { property: "og:url", content: "https://virginia-notary.com/cookie-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://virginia-notary.com/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="April 18, 2026">
      <p>
        This Cookie Policy explains how Virginia Notary ("we," "us," or "our") uses cookies and
        similar tracking technologies on our website. It should be read together with our Privacy
        Policy.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you visit a website. They
        are widely used to make websites work, or work more efficiently, and to provide information
        to the site's operators.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <h3>Strictly Necessary</h3>
      <p>
        Required for the website to function (e.g., remembering your cookie preferences, securing
        forms, maintaining session state). These cannot be turned off.
      </p>
      <h3>Performance and Analytics</h3>
      <p>
        Help us understand how visitors interact with our site by collecting and reporting
        information anonymously. This helps us improve the website experience.
      </p>
      <h3>Functional</h3>
      <p>
        Enable enhanced functionality such as remembering choices you make (e.g., service type) to
        give you a more personalized experience.
      </p>
      <h3>Marketing</h3>
      <p>
        Used to track visitors across websites with the intention of displaying ads that are
        relevant and engaging. We do not currently sell or share personal information for
        cross-context behavioral advertising.
      </p>

      <h2>3. Your Choices</h2>
      <ul>
        <li>
          <strong>Cookie banner:</strong> Use the banner shown on your first visit to accept or
          reject non-essential cookies.
        </li>
        <li>
          <strong>Browser settings:</strong> Most browsers let you refuse or delete cookies. Check
          your browser's help menu for instructions.
        </li>
        <li>
          <strong>Do Not Track / Global Privacy Control:</strong> We honor recognized opt-out
          signals, including the Global Privacy Control (GPC), as required under applicable US
          state privacy laws.
        </li>
      </ul>

      <h2>4. US Privacy Disclosures</h2>
      <p>
        Under US state privacy laws (including the California Consumer Privacy Act / California
        Privacy Rights Act, the Virginia Consumer Data Protection Act, and similar laws), you may
        have the right to opt out of the sale or sharing of your personal information for targeted
        advertising. We do not sell personal information for monetary value. To submit a privacy
        request, email{" "}
        <a href="mailto:notary@virginia-notary.com">notary@virginia-notary.com</a>.
      </p>

      <h2>5. Third-Party Cookies</h2>
      <p>
        Some cookies may be set by third-party services that appear on our pages, such as analytics
        providers or video conferencing tools used for Remote Online Notarization. We do not
        control these cookies and recommend reviewing the privacy policies of those third parties.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The "Last updated" date at the top of
        this page indicates when it was last revised.
      </p>

      <h2>7. Contact</h2>
      <p>
        Virginia Notary &middot;{" "}
        <a href="mailto:notary@virginia-notary.com">notary@virginia-notary.com</a>
      </p>
    </LegalPage>
  );
}
