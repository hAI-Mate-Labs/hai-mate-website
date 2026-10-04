import type { Metadata } from "next";
import MissionClient from "./MissionClient";

export const metadata: Metadata = {
  title: "Mission, Vision & Purpose | hAI Mate! Applied AI for Hospitality",
  description:
    "Our mission is to eliminate unpaid back-office drag for independent Australian hospitality venues while keeping human judgment, culinary craft, and sovereignty firmly at the center.",
  openGraph: {
    title: "Mission, Vision & Purpose | hAI Mate!",
    description:
      "Technology should quietly serve the human craft—never displace it. How hAI Mate! is restoring time and control to Australian hospitality operators.",
    url: "https://hai-mate-labs.github.io/hai-mate-website/mission",
    siteName: "hAI Mate!",
    locale: "en_AU",
    type: "website",
  },
};

export default function MissionPage() {
  return <MissionClient />;
}
