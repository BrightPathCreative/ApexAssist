"use client";

import { useState } from "react";

const FORM_SRC =
  "https://links.brightpathcreative.com.au/widget/form/dSgoil9oLaAq9c8SfUUY";
const FORM_ID = "inline-dSgoil9oLaAq9c8SfUUY";

export function GhlContactForm() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative mt-8 h-[520px] w-full overflow-hidden rounded-[20px] bg-white/40 dark:bg-zinc-900/40"
      aria-busy={!loaded}
    >
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col justify-center gap-4 px-8"
          aria-hidden
        >
          <div className="h-10 animate-pulse rounded-xl bg-emerald-800/15 dark:bg-primary/25" />
          <div className="h-10 animate-pulse rounded-xl bg-emerald-800/15 dark:bg-primary/25" />
          <div className="h-10 animate-pulse rounded-xl bg-emerald-800/15 dark:bg-primary/25" />
          <div className="h-24 animate-pulse rounded-xl bg-emerald-800/15 dark:bg-primary/25" />
          <div className="h-11 w-32 animate-pulse rounded-xl bg-emerald-800/20 dark:bg-primary/30" />
        </div>
      )}
      <iframe
        src={FORM_SRC}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "20px" }}
        id={FORM_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Apex Assist Enquiry form"
        data-height="485"
        data-layout-iframe-id={FORM_ID}
        data-form-id="dSgoil9oLaAq9c8SfUUY"
        title="Apex Assist Enquiry form"
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
