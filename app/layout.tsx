import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI SDR - Intelligent Sales Development Representative | Automate Your Sales Pipeline",
  description: "Transform your sales funnel with AI SDR. Automate lead prospecting, personalized outreach, and qualification. Scale your sales development 10x faster with intelligent automation.",
  keywords: [
    "AI SDR",
    "Sales Development Representative",
    "Sales Automation",
    "Lead Generation",
    "AI Sales Assistant",
    "Prospecting Automation",
    "Email Outreach",
    "B2B Sales",
    "Sales Pipeline",
    "CRM Integration"
  ],
  authors: [{ name: "FISTA Solutions" }],
  creator: "FISTA Solutions",
  publisher: "FISTA Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aisdr.com",
    title: "AI SDR - Automate Your Sales Development",
    description: "Transform your sales funnel with AI-powered prospecting, outreach, and qualification. Scale your sales development 10x faster.",
    siteName: "AI SDR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI SDR Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SDR - Intelligent Sales Development Representative",
    description: "Transform your sales funnel with AI-powered automation. Scale your sales development 10x faster.",
    images: ["/og-image.jpg"],
    creator: "@fistasolutions",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aisdr.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
