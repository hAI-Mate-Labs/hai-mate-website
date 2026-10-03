import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hAI Mate! | Western Australia's Applied AI & Automation Agency",
  description: "Opening up operational flow while keeping human judgment at the center. Applied AI and agentic workflows for hospitality groups and growing SMEs across WA.",
  keywords: ["applied AI WA", "hospitality automation Perth", "Western Australia AI agency", "human in the loop automation", "Xero Lightspeed AI integration", "Local Capability Fund AI"],
  authors: [{ name: "hAI Mate! Pty Ltd" }],
  openGraph: {
    title: "hAI Mate! | Applied Automation Agency WA",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='180' fill='%23FFFFFF'/><circle cx='256' cy='256' r='12' fill='%2300F2FE'/></svg>" />
      </head>
      <body className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] antialiased selection:bg-[#00F2FE] selection:text-[#04101A]">
        {children}
      </body>
    </html>
  );
}
