import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Governance | hAI Mate!",
  description:
    "Privacy Policy for hAI Mate! Compliant with the Australian Privacy Act 1988 (Cth), Australian Privacy Principles, and EU GDPR. Zero AI model training on client records.",
  openGraph: {
    title: "Privacy Policy & Data Governance | hAI Mate!",
    description:
      "Compliant with the Australian Privacy Act 1988 and EU GDPR. Strict zero AI model training guarantee on all venue invoices, recipes, and roster data.",
    url: "https://hai-mate-labs.github.io/hai-mate-website/privacy",
    siteName: "hAI Mate!",
    locale: "en_AU",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
