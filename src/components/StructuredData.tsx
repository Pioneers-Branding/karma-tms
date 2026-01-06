import { Helmet } from 'react-helmet-async';

interface Location {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  telephone: string;
}

interface StructuredDataProps {
  type?: 'organization' | 'medicalBusiness' | 'localBusiness' | 'breadcrumb';
  locations?: Location[];
  breadcrumbs?: Array<{name: string;url: string;}>;
}

const StructuredData = ({
  type = 'organization',
  locations,
  breadcrumbs
}: StructuredDataProps) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://karmatms.com/#organization",
    "name": "KarmaTMS",
    "alternateName": "Karma Mental Health",
    "description": "Leading TMS therapy center providing advanced depression treatment, anxiety therapy, and mental health services in Palm Springs and Southern California.",
    "url": "https://karmatms.com",
    "logo": "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png",
    "image": "https://images.unsplash.com/photo-1661007022307-ca570f3564d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwaW1hZ2UlMjBkZXBpY3RpbmclMjBhJTIwdHJhbnF1aWwlMjBuYXR1cmFsJTIwbGFuZHNjYXBlJTIwd2l0aCUyMGElMjBmb2N1cyUyMG9uJTIwbWVudGFsJTIwaGVhbHRoJTIwYW5kJTIwd2VsbG5lc3MlMjB0aGVtZXMufGVufDB8fHx8MTc2MzcyNjE1NXww&ixlib=rb-4.1.0&q=80&w=200$w=1920",
    "telephone": "+1-760-760-5675",
    "email": "contact@karmatms.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Insurance",
    "openingHours": "Mo-Fr 08:00-18:00",
    "medicalSpecialty": [
    "Psychiatry",
    "Mental Health",
    "Depression Treatment",
    "Anxiety Treatment"],

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mental Health Services",
      "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "TMS Therapy",
          "description": "Transcranial Magnetic Stimulation therapy for depression and mental health"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Depression Treatment",
          "description": "FDA-approved treatment for treatment-resistant depression"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Anxiety Treatment",
          "description": "Advanced therapy for anxiety disorders"
        }
      }]

    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "560 S. Paseo Dorotea Suite 4-B",
      "addressLocality": "Palm Springs",
      "addressRegion": "CA",
      "postalCode": "92264",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "35400 Bob Hope Dr. Suite 206-B",
      "addressLocality": "Rancho Mirage",
      "addressRegion": "CA",
      "postalCode": "92270",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "72724 29 Palms Hwy. Suite 107-B",
      "addressLocality": "Twentynine Palms",
      "addressRegion": "CA",
      "postalCode": "92277",
      "addressCountry": "US"
    }],

    "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": "33.8303",
      "longitude": "-116.5453"
    }],

    "areaServed": [
    {
      "@type": "City",
      "name": "Palm Springs",
      "containedIn": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Rancho Mirage",
      "containedIn": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Twentynine Palms",
      "containedIn": {
        "@type": "State",
        "name": "California"
      }
    }],

    "sameAs": [
    "https://www.facebook.com/karmatms",
    "https://www.instagram.com/karmatms"]

  };

  const localBusinessSchema = locations?.map((location) => ({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `KarmaTMS - ${location.name}`,
    "image": "https://images.unsplash.com/photo-1661007022307-ca570f3564d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwaW1hZ2UlMjBkZXBpY3RpbmclMjBhJTIwdHJhbnF1aWwlMjBuYXR1cmFsJTIwbGFuZHNjYXBlJTIwd2l0aCUyMGElMjBmb2N1cyUyMG9uJTIwbWVudGFsJTIwaGVhbHRoJTIwYW5kJTIwd2VsbG5lc3MlMjB0aGVtZXMufGVufDB8fHx8MTc2MzcyNjE1NXww&ixlib=rb-4.1.0&q=80&w=200$w=1920",
    "telephone": location.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.streetAddress,
      "addressLocality": location.address.addressLocality,
      "addressRegion": location.address.addressRegion,
      "postalCode": location.address.postalCode,
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  }));

  const breadcrumbSchema = breadcrumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://karmatms.com${crumb.url}`
    }))
  };

  const schema = type === 'breadcrumb' ?
  breadcrumbSchema :
  type === 'localBusiness' && localBusinessSchema ?
  localBusinessSchema :
  baseOrganization;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>);

};

export default StructuredData;