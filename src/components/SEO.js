import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.ynenterprise.com";
const DEFAULT_IMAGE =
  "https://mag-engineering.b-cdn.net/wp-content/uploads/2023/04/Building-Demolition-Contractors-Banner-Images-1024x446.png";

function SEO({ title, description, path = "/", image = DEFAULT_IMAGE, schema }) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-AU" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="YN Demolition" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
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

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessSchema,
    {
      "@type": "WebSite",
      name: "YN Demolition",
      url: SITE_URL,
      inLanguage: "en-AU",
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Demolition Services Brisbane",
  serviceType: [
    "Residential Demolition",
    "Commercial Demolition",
    "Industrial Demolition",
    "High-Rise Demolition",
    "Asbestos Removal",
    "Site Clearance",
  ],
  description:
    "Professional residential, commercial, industrial demolition, asbestos removal and site-clearance services across Brisbane and nearby Queensland areas.",
  provider: {
    "@type": "LocalBusiness",
    name: "YN Demolition",
    url: SITE_URL,
    telephone: "+61 431 270 377",
  },
  areaServed: ["Brisbane", "Logan", "Ipswich", "Gold Coast", "Queensland"],
};

export default SEO;
