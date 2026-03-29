import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Lucas",
  description:
    "Meet Lucas — Apex Assist, local student-run help in Brighton Central for tutoring, tech, gardening, and home support.",
};

export default function AboutPage() {
  return (
    <main className="px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-ink/50">
          <Link href="/" className="underline decoration-ink/20 underline-offset-2">
            Home
          </Link>
          <span className="mx-2 text-ink/30">/</span>
          About
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          About me — Lucas
        </h1>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/75">
          <p>
            I&apos;m <strong className="font-medium text-ink">Lucas</strong>. I&apos;m
            fourteen, in Year 9, and I live in Brighton.{" "}
            <strong className="font-medium text-ink">Apex Assist</strong> is my small
            business — I&apos;m trying to get it up and running, grow it over time,
            and use it to help my local community lighten the load where I can. Some of
            what I offer is{" "}
            <strong className="font-medium text-ink">tutoring</strong>,{" "}
            <strong className="font-medium text-ink">tech help</strong>,{" "}
            <strong className="font-medium text-ink">outdoor and gardening work</strong>,{" "}
            <strong className="font-medium text-ink">dog walking</strong>,
            and <strong className="font-medium text-ink">home organisation</strong>.
          </p>
          <p>
            From a young age I was identified as highly gifted. At school I&apos;ve
            been <strong className="font-medium text-ink">Middle Years Captain</strong>,
            and I&apos;m on the{" "}
            <strong className="font-medium text-ink">Student Voice Committee</strong>.
            I&apos;ve taken part in the{" "}
            <strong className="font-medium text-ink">DaVinci Decathlon</strong> (I
            came first in one of the subject areas), the{" "}
            <strong className="font-medium text-ink">Ethics Olympiad</strong>, theatre
            productions, and a bunch of other things.
          </p>
          <p>
            For tutoring I specialise in{" "}
            <strong className="font-medium text-ink">maths</strong> and{" "}
            <strong className="font-medium text-ink">science</strong> at primary level,
            and I offer <strong className="font-medium text-ink">reading</strong>{" "}
            support for primary students who need it. I can meet at your place or
            online, depending on what suits.
          </p>
          <p>
            I know I&apos;m only in Year 9, but I&apos;m already thinking about where
            I&apos;d like my studies to lead. I want to take{" "}
            <strong className="font-medium text-ink">zoological and biological science</strong>{" "}
            at university, and when I grow up I hope to{" "}
            <strong className="font-medium text-ink">study and research animals</strong>{" "}
            — including <strong className="font-medium text-ink">exotic animals</strong>{" "}
            around the world.
          </p>
          <p>
            Although I&apos;m a nerd, I also love sport — I train{" "}
            <strong className="font-medium text-ink">kickboxing</strong>,{" "}
            <strong className="font-medium text-ink">tennis</strong>, and{" "}
            <strong className="font-medium text-ink">bouldering</strong> each week. I
            collect <strong className="font-medium text-ink">Pokémon</strong> cards too
            — mostly with an investing and trading focus, so I&apos;m deliberate about
            what I buy rather than spending casually on packs.
          </p>
          <p>
            Apex Assist is only <em>me</em> for now. However, if I&apos;m ever
            double-booked or
            can&apos;t make a time, I might suggest someone I trust to step in — only
            if you&apos;re happy with that and we&apos;ve talked about it first.
          </p>
        </div>
        <p className="mt-10 text-[17px] text-ink/70">
          There&apos;s more detail on the{" "}
          <Link
            href="/services"
            className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
          >
            services
          </Link>{" "}
          pages, or you can{" "}
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
          >
            contact me
          </Link>{" "}
          if you want to ask something.
        </p>
      </div>
    </main>
  );
}
