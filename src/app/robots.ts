import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/subscriptions",
    },
    sitemap: "https://codewithashx.fr/sitemap.xml",
  };
}
