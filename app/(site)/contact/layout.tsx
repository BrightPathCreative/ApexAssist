import Script from "next/script";

const GHL_ORIGIN = "https://links.brightpathcreative.com.au";
const GHL_FORM_SRC = `${GHL_ORIGIN}/widget/form/dSgoil9oLaAq9c8SfUUY`;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href={GHL_ORIGIN} crossOrigin="anonymous" />
      <link rel="dns-prefetch" href={GHL_ORIGIN} />
      <link rel="preload" href={`${GHL_ORIGIN}/js/form_embed.js`} as="script" />
      <link rel="prefetch" href={GHL_FORM_SRC} as="document" />
      <Script src={`${GHL_ORIGIN}/js/form_embed.js`} strategy="beforeInteractive" />
      {children}
    </>
  );
}
