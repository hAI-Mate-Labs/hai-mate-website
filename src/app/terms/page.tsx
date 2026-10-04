import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service & Client Agreement | hAI Mate!",
  description:
    "Terms of Service for hAI Mate! Compliant with Australian Consumer Law and governing applied automation audits, pipeline integrations, and managed retainers.",
  openGraph: {
    title: "Terms of Service | hAI Mate!",
    description:
      "Engagement terms and human-in-the-loop operational covenants for hAI Mate! applied automation services.",
    url: "https://hai-mate-labs.github.io/hai-mate-website/terms",
    siteName: "hAI Mate!",
    locale: "en_AU",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
