import type { Metadata } from "next";
import { WhatsAppFloatingAction } from "@/components/whatsapp-floating-action";
import { companyName } from "@/lib/contact";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://terso.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Ensuring Process in Every Step`,
    template: `%s | ${companyName}`,
  },
  description:
    `${companyName} creates affordable hygiene products in Port Harcourt with safe production practices and industrial standard procedures.`,
  keywords: [
    "Terso",
    "Terso hygiene",
    "hygiene products Nigeria",
    "hygiene products Port Harcourt",
    "safe production",
    "industrial standard procedures",
    "Uche Amazu",
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  publisher: companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: companyName,
    title: `${companyName} | Ensuring Process in Every Step`,
    description:
      "Affordable hygiene products built for Nigeria with safe production practices and industrial standard procedures.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${companyName} - Ensuring process in every step`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | Ensuring Process in Every Step`,
    description:
      "Affordable hygiene products built for Nigeria with safe production practices and industrial standard procedures.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloatingAction />
      </body>
    </html>
  );
}
