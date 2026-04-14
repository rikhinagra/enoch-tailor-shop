import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://enochtailor.shop"
  ),
  title: {
    default: "Enoch Tailor Shop — Expert Alterations & Tailoring in Arlington Heights, IL",
    template: "%s | Enoch Tailor Shop",
  },
  description:
    "Arlington Heights' most trusted tailor since 1999. Expert alterations for men and women — suits, wedding gowns, jeans, leather repair, and more. Walk-ins welcome at 813 W Rand Rd.",
  keywords: [
    "tailor Arlington Heights",
    "alterations Arlington Heights IL",
    "suit alterations Chicago suburbs",
    "wedding gown alterations Arlington Heights",
    "leather jacket repair Arlington Heights",
    "men's alterations Illinois",
    "women's alterations Palatine",
    "pants hemming Mount Prospect",
    "prom dress alterations Rolling Meadows",
    "zipper replacement Arlington Heights",
    "Enoch Tailor Shop",
    "tailor shop Illinois",
    "bespoke suit Arlington Heights",
  ],
  authors: [{ name: "Enoch Tailor Shop" }],
  creator: "Enoch Tailor Shop",
  publisher: "Enoch Tailor Shop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enochtailor.shop",
    siteName: "Enoch Tailor Shop",
    title: "Enoch Tailor Shop — Expert Alterations in Arlington Heights, IL",
    description:
      "Arlington Heights' most trusted tailor since 1999. Expert alterations for men and women. Suits, gowns, jeans, leather, and everything in between.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Enoch Tailor Shop — Expert Alterations & Tailoring in Arlington Heights, IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enoch Tailor Shop — Expert Alterations in Arlington Heights, IL",
    description:
      "Arlington Heights' most trusted tailor since 1999. Expert alterations for men and women.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://enochtailor.shop",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#C8102E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://enochtailor.shop",
  name: "Enoch Tailor Shop",
  image: "https://enochtailor.shop/images/classic-tailor-shop-display-with-bespoke-suit-and-sewing-machine.webp",
  description:
    "Arlington Heights' most trusted tailor since 1999. Expert alterations and tailoring for men and women — suits, wedding gowns, jeans, leather repair, and more.",
  url: "https://enochtailor.shop",
  telephone: "+18477668554",
  email: "info@enochtailor.shop",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "813 W Rand Rd, Suite A",
    addressLocality: "Arlington Heights",
    addressRegion: "IL",
    postalCode: "60004",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0653,
    longitude: -87.9845,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tailoring & Alteration Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Men's Suit Alterations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Women's Dress Alterations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Gown Alterations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leather Jacket Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zipper Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jeans Hemming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prom Dress Alterations" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Men's Suits" },
        price: "289",
        priceCurrency: "USD",
      },
    ],
  },
  areaServed: [
    "Arlington Heights, IL",
    "Palatine, IL",
    "Mount Prospect, IL",
    "Rolling Meadows, IL",
    "Buffalo Grove, IL",
    "Barrington, IL",
  ],
  foundingDate: "1999",
  slogan: "Tailored to Fit. Built to Last.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
