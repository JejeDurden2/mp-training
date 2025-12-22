export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "MP Training Nice",
    "description": "Studio de coaching sportif privé à Nice. Personal training, small group et préparation physique.",
    "url": "https://mptraining-nice.fr",
    "telephone": "+33627683343",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Rue Théodore de Banville",
      "addressLocality": "Nice",
      "postalCode": "06100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7055,
      "longitude": 7.2615
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "€€",
    "image": "https://mptraining-nice.fr/opengraph-image.jpg"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
