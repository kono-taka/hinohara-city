import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://hinohara-city.vercel.app/sitemap.xml",
    host: "https://hinohara-city.vercel.app",
  };
}
