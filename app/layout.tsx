import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { AREA_LABEL } from "@/lib/location";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apex Assist: Local Assistance",
    template: "%s | Apex Assist",
  },
  description: `Practical life support in ${AREA_LABEL}: tutoring, tech help, gardening, dog walking, and home organisation.`,
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={outfit.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Script id="apex-theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("apex-assist-theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`}
        </Script>
        {children}
      </body>
    </html>
  );
}
