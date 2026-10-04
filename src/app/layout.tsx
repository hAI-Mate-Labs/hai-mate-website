import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "hAI Mate! | Autonomous Margin Infrastructure for Hospitality",
  description: "Opening up operational flow while keeping human judgment at the center. The autonomous back-office engine that audits wholesale spend, guards labor margins, and stages accounts payable into Xero and MYOB across WA and Australia.",
  keywords: ["autonomous margin infrastructure", "hospitality automation Perth", "human in the loop automation", "Xero Lightspeed AI integration", "hAI Mate", "wholesale docket ingestion Perth WA"],
  authors: [{ name: "hAI Mate!" }],
  openGraph: {
    title: "hAI Mate! | Autonomous Margin Infrastructure",
    description: "The autonomous back-office engine that audits wholesale spend, guards labor margins, and stages accounts payable into Xero and MYOB.",
    url: "https://haimate.com.au",
    siteName: "hAI Mate!",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='180' fill='%230F172A'/><circle cx='256' cy='256' r='12' fill='%2300BFCC'/></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "hAI Mate!",
              "url": "https://haimate.com.au",
              "logo": "https://haimate.com.au/favicon.ico",
              "description":
                "Applied AI and agentic automation agency for hospitality groups, restaurants, bakeries, and pubs across Western Australia and nationally.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Perth",
                "addressRegion": "WA",
                "addressCountry": "AU",
              },
              "founder": {
                "@type": "Person",
                "name": "Mallory Antomarchi",
              },
              "areaServed": [
                "Western Australia",
                "Perth",
                "Australia",
              ],
              "priceRange": "$$",
              "knowsAbout": [
                "Hospitality Automation",
                "Wholesale Docket Ingestion",
                "Xero Integration",
                "Lightspeed POS",
                "Dynamic Labor Roster Optimization",
                "Human-in-the-Loop AI",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#0F172A] antialiased selection:bg-[#00BFCC] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
