import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apex Assist — Personal help in Brighton, VIC",
    template: "%s — Apex Assist",
  },
  description:
    "Local help from Lucas: primary tutoring (maths, science, reading), tech support, gardening, pet & house help, and home organisation near Dendy Street, Brighton.",
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
