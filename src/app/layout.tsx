import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://hai-mate-labs.github.io/hai-mate-website"),
  title: "hAI Mate! | Autonomous Margin Infrastructure for Hospitality",
  description: "Opening up operational flow while keeping human judgment at the center. The autonomous back-office engine that audits wholesale spend, guards labor margins, and stages accounts payable into Xero and MYOB across WA and Australia.",
  keywords: [
    "autonomous margin infrastructure",
    "hospitality automation Perth",
    "wholesale docket ingestion Perth WA",
    "human in the loop automation",
    "Xero Lightspeed AI integration",
    "hAI Mate",
    "WA Local Capability Fund hospitality",
    "restaurant invoice auditing Australia"
  ],
  authors: [{ name: "hAI Mate!" }],
  alternates: {
    canonical: "https://hai-mate-labs.github.io/hai-mate-website/",
  },
  openGraph: {
    title: "hAI Mate! | Autonomous Margin Infrastructure for Australian Hospitality",
    description: "The private back-office engine that audits wholesale spend, guards labor margins, and stages accounts payable into Xero and MYOB.",
    url: "https://hai-mate-labs.github.io/hai-mate-website",
    siteName: "hAI Mate! Margin Infrastructure",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://hai-mate-labs.github.io/hai-mate-website/og-image.png",
        width: 1200,
        height: 630,
        alt: "hAI Mate! Autonomous Margin Infrastructure for Australian Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hAI Mate! | Autonomous Margin Infrastructure for Australian Hospitality",
    description: "The private back-office engine that audits wholesale spend, guards labor margins, and stages accounts payable into Xero and MYOB.",
    images: ["https://hai-mate-labs.github.io/hai-mate-website/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='180' fill='%230F172A'/><circle cx='256' cy='256' r='12' fill='%2300BFCC'/></svg>"
        />
        {/* Anti-flicker script to match device system theme (#0F172A) immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('haimate_theme_pref');
                var isDark = stored === 'dark' || ((!stored || stored === 'system') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "hAI Mate!",
              "url": "https://hai-mate-labs.github.io/hai-mate-website",
              "logo": "https://hai-mate-labs.github.io/hai-mate-website/favicon.ico",
              "description":
                "Autonomous margin infrastructure and private operational pipelines for Australian hospitality groups, restaurants, bakeries, and pubs across NSW, WA and nationally.",
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
      <body className="min-h-screen bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F8FAFC] antialiased selection:bg-[#00BFCC] selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
