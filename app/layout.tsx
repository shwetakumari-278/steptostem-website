import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // ⭐ VERY IMPORTANT
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stemxlearning.com"),

  title: "STEMxLearning",
  description:
    "STEMxLearning offers 1-on-1 live online classes in coding and AI for K-12 students with a mastery-based learning approach to ensure deep understanding and real skill development.",

  keywords: "edtech, STEM, AI/ML, web development, coding",
  authors: [{ name: "STEMxLearning Team" }],

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
