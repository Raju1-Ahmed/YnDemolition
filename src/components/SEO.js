import { useEffect } from "react";

const SITE_URL = "https://ynenterprise.com";
const DEFAULT_IMAGE = "https://mag-engineering.b-cdn.net/wp-content/uploads/2023/04/Building-Demolition-Contractors-Banner-Images-1024x446.png";

function upsertMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function SEO({ title, description, path = "/", image = DEFAULT_IMAGE, schema }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "yn-seo-schema";
    let schemaElement = document.getElementById(schemaId);
    if (schema) {
      if (!schemaElement) {
        schemaElement = document.createElement("script");
        schemaElement.id = schemaId;
        schemaElement.type = "application/ld+json";
        document.head.appendChild(schemaElement);
      }
      schemaElement.textContent = JSON.stringify(schema);
    }

    return () => {
      if (schemaElement) schemaElement.remove();
    };
  }, [description, image, path, schema, title]);

  return null;
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "YN Demolition",
  url: SITE_URL,
  telephone: "+61 431 270 377",
  email: "privacy@ynenterprise.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "84 Browns Plains Rd",
    addressLocality: "Browns Plains",
    addressRegion: "QLD",
    postalCode: "4118",
    addressCountry: "AU",
  },
  areaServed: ["Brisbane", "Logan", "Ipswich", "Gold Coast", "Queensland"],
  priceRange: "$$",
};

export default SEO;
