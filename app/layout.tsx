import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AREA_LABEL } from "@/lib/location";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apex Assist — Personal help in Brighton Central",
    template: "%s — Apex Assist",
  },
  description: `Local help from Lucas: primary tutoring (maths, science, reading), tech support, gardening, dog walking, and home organisation in ${AREA_LABEL}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
