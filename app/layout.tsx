import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // ⭐ VERY IMPORTANT
});

export const metadata: Metadata = {
  title: "StepToSTEM - Empowering Students in Tech & Innovation",
  description:
    "Join StepToSTEM to learn AI/ML, Web Development, Game Design, and Arduino programming. Compete in hackathons and stay ahead of tech trends!",
  keywords:
    "edtech, STEM, AI/ML, web development, game design, arduino, hackathons, coding, programming, students",
  authors: [{ name: "StepToSTEM Team" }],
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
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
