import { products } from "@/data/products";

function generateSiteMap() {
  const baseUrl = "https://www.bideben.com";

  const staticPages = [
    "",
    "ToplulukKatkisi",
    "SSS",
    "koleksiyonlar",
  ];

  const productUrls = products.map(
    (p) => `<url><loc>${baseUrl}/urun/${p.id}</loc><priority>0.8</priority></url>`
  );

  const staticUrls = staticPages.map(
    (path) =>
      `<url><loc>${baseUrl}/${path}</loc><priority>${
        path === "" ? "1.0" : "0.9"
      }</priority></url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls.join("\n")}
    ${productUrls.join("\n")}
  </urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
