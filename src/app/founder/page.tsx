import type { Metadata } from "next";
import FounderClient from "./FounderClient";

export const metadata: Metadata = {
  title: "The Founder • Mallory Antomarchi | hAI Mate!",
  description:
    "Meet Mallory Antomarchi, founder of hAI Mate! A 10-year journey from the Mediterranean coast of France to Western Australia, dedicated to using applied AI to liberate human time for the things that truly matter.",
  openGraph: {
    title: "The Founder • Mallory Antomarchi | hAI Mate!",
    description:
      "We were not put on this earth to spend our lives filing paperwork. How Mallory Antomarchi is applying AI and agentic automation to empower Australian hospitality operators.",
    url: "https://haimate.com.au/founder",
    siteName: "hAI Mate!",
    locale: "en_AU",
    type: "website",
  },
};

export default function FounderPage() {
  return <FounderClient />;
}
