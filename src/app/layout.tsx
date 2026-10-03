import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hAI Mate! | Applied AI & Automation Agency",
  description: "Opening up operational flow while keeping human judgment at the center. Applied AI and agentic workflows for hospitality groups and growing SMEs across WA and Australia.",
  keywords: ["applied AI WA", "hospitality automation Perth", "human in the loop automation", "Xero Lightspeed AI integration", "hAI Mate", "Sydney registered sole trader"],
  authors: [{ name: "hAI Mate!" }],
  openGraph: {
    title: "hAI Mate! | Applied Automation Agency",
    description: "Opening up operational flow while keeping human judgment at the center.",
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
      </head>
      <body className="min-h-screen bg-white text-[#0F172A] antialiased selection:bg-[#00BFCC] selection:text-white">
        {children}
      </body>
    </html>
  );
}
