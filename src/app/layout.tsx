import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://hinohara-city.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a6e5a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "日野原市公式ホームページ",
    template: "%s | 日野原市",
  },
  description: "千葉県日野原市の公式ホームページです。市政情報、行政サービス、くらしの手続き、観光・移住情報など、市に関する情報をご案内しています。",
  keywords: ["日野原市", "ひのはらし", "千葉県", "市役所", "行政サービス", "移住", "観光", "ひのはら"],
  authors: [{ name: "日野原市" }],
  creator: "日野原市",
  publisher: "日野原市",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "日野原市公式ホームページ",
    locale: "ja_JP",
    type: "website",
    url: BASE_URL,
    title: "日野原市公式ホームページ",
    description: "千葉県日野原市の公式ホームページです。市政情報、行政サービス、くらしの手続き、観光・移住情報など、市に関する情報をご案内しています。",
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
    title: "日野原市公式ホームページ",
    description: "千葉県日野原市の公式ホームページです。",
    images: ["/images/hero/hero-1.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
