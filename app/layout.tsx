import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AISummerCampFloating from "@/components/AISummerCampFloating";
import BookDemoButton from "@/components/BookDemoButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stemxlearning.com"),

  title: "STEMxLearning | 1:1 Online Coding & AI Classes for Kids",
  description:
    "STEMxLearning offers live 1:1 online coding and AI classes for K-12 students in India. Learn Python, Machine Learning, and Generative AI through real projects with a mastery-based learning approach.",

  keywords: [
    "STEMxLearning",
    "STEMx Learning",
    "online coding classes for kids",
    "online coding classes for kids in India",
    "AI classes for kids",
    "Python classes for kids",
    "machine learning for kids",
    "generative AI classes for kids",
    "generative AI with data science for kids",
    "coding classes for teens",
    "1 on 1 coding classes for kids",
    "K-12 coding classes",
    "mastery based coding classes",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "https://www.stemxlearning.com/favicon.png",
    shortcut: "https://www.stemxlearning.com/favicon.png",
    apple: "https://www.stemxlearning.com/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "STEMxLearning",
  url: "https://www.stemxlearning.com",
  logo: "https://www.stemxlearning.com/favicon.png",
  description:
    "STEMxLearning offers live 1:1 online coding and AI classes for K-12 students in India. Learn Python, Machine Learning, and Generative AI through real projects with a mastery-based learning approach.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-82890-04978",
    contactType: "Customer Support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/stemxlearning",
    "https://www.youtube.com/@stemxlearning",
    "https://www.linkedin.com/company/stemxlearning",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "STEMxLearning",
  url: "https://www.stemxlearning.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.stemxlearning.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <AISummerCampFloating />
        <BookDemoButton course="General Enquiry" variant="listener-only" />
      </body>
    </html>
  );
}