import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE_URL = "https://hinohara.city";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a6e5a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "日野原市｜日々に、まなざしを。",
    template: "%s | 日野原市",
  },
  description: "日野原市の公式ホームページです。施設や行政サービスの案内、イベント情報、観光情報などについてご紹介しています。",
  keywords: ["日野原市", "ひのはらし", "千葉県", "市役所", "行政サービス", "移住", "観光", "ひのはら"],
  authors: [{ name: "日野原市" }],
  creator: "日野原市",
  publisher: "日野原市",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "OyPpK3OnZc-quuSn2vOdde3MBrzgSxNn07YrqFrI6Io",
  },
  openGraph: {
    siteName: "日野原市｜日々に、まなざしを。",
    locale: "ja_JP",
    type: "website",
    url: BASE_URL,
    title: "日野原市｜日々に、まなざしを。",
    description: "日野原市の公式ホームページです。施設や行政サービスの案内、イベント情報、観光情報などについてご紹介しています。",
    images: [
      {
        url: "/images/hero/hero-1.png",
        width: 1200,
        height: 630,
        alt: "日野原市 山と水と人が輝くふるさと",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "日野原市｜日々に、まなざしを。",
    description: "日野原市の公式ホームページです。施設や行政サービスの案内、イベント情報、観光情報などについてご紹介しています。",
    images: ["/images/hero/hero-1.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "日野原市",
  alternateName: "ひのはらし",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  image: `${BASE_URL}/images/hero/hero-1.png`,
  description: "日野原市の公式ホームページです。施設や行政サービスの案内、イベント情報、観光情報などについてご紹介しています。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "中央一丁目1番地1号",
    addressLocality: "日野原市",
    addressRegion: "千葉県",
    postalCode: "299-1401",
    addressCountry: "JP",
  },
  telephone: "0439-88-1111",
  faxNumber: "0439-88-1119",
  email: "info@city.hinohara.lg.jp",
  openingHours: "Mo-Fr 08:30-17:15",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0439-88-1111",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:15",
    },
  },
  sameAs: [
    "https://line.me/R/ti/p/@hinohara_city",
    "https://www.instagram.com/hinohara_city_official/",
    "https://x.com/hinohara_city",
    "https://www.youtube.com/@city_hinohara",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
