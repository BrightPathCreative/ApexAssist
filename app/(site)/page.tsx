import { CalendarDays, Circle, Home } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SMS_E164, SMS_LABEL } from "@/lib/site";
import { SERVICE_ORDER, servicesBySlug } from "@/lib/services";

const pricingTiers = [
  {
    name: "Indoor & home help",
    detail: "Organisation, pet visits, light house help",
    price: "From $40 / hr",
  },
  {
    name: "Learning & tech",
    detail: "Tutoring, homework help, devices & setup",
    price: "From $45 / hr",
  },
  {
    name: "Outdoor work",
    detail: "Gardening and outdoor tasks",
    price: "From $45 / hr",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section
        id="hero"
        className="border-b border-ink/5 bg-gradient-to-b from-primary to-white px-5 pb-16 pt-14 sm:pb-20 sm:pt-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Circle
            className="mx-auto mb-3 text-ink/40"
            size={12}
            strokeWidth={2.25}
            aria-hidden
          />
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-ink/55">
            Brighton, VIC
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl sm:leading-tight">
            Apex Assist — local help from Lucas
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/70">
            Practical support for neighbours within about ten minutes of Dendy
            Street: tutoring for primary students, tech help, light gardening, pet
            and house help, and home organisation. Text me to say hello.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`sms:${SMS_E164}`}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-ink px-8 py-4 text-[17px] font-medium text-white shadow-sm transition hover:bg-ink/90 active:scale-[0.99] sm:w-auto"
            >
              Text me
            </a>
            <a
              href="#contact"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-ink/15 bg-white px-8 py-4 text-[17px] font-medium text-ink transition hover:bg-ink/[0.03] sm:w-auto"
            >
              Send a message
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            Serving homes within a 10-minute drive of Dendy St, Brighton
          </p>
        </div>
      </section>

      <section id="about-lucas" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About me — Lucas
          </h2>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/75">
            <p>
              Hi, I&apos;m <strong className="font-medium text-ink">Lucas</strong>.
              I&apos;m fourteen, in Year 9, and I live in Brighton. I started{" "}
              <strong className="font-medium text-ink">Apex Assist</strong> because I
              like solving real problems for real people — whether that&apos;s
              explaining maths in a simpler way, helping someone feel confident with
              their phone, or getting an outdoor job done so your weekend opens up
              again.
            </p>
            <p>
              At school I&apos;ve been identified as{" "}
              <strong className="font-medium text-ink">highly gifted</strong>. I&apos;m
              a <strong className="font-medium text-ink">student leader</strong> and a{" "}
              <strong className="font-medium text-ink">year-level leader</strong>, and
              I usually earn at least six commendations a year for behaviour,
              learning habits, and positive contribution. I take that same attitude
              here: show up prepared, communicate clearly, and treat people with
              respect.
            </p>
            <p>
              I stretch myself academically and creatively through{" "}
              <strong className="font-medium text-ink">Ethics Olympiad</strong>,{" "}
              <strong className="font-medium text-ink">Da Vinci</strong> workshops and
              competitions, and the <strong className="font-medium text-ink">Da Vinci
              Decathlon</strong> — where I placed{" "}
              <strong className="font-medium text-ink">first in one of the subject
              areas</strong>. That background is why I&apos;m especially comfortable
              with <strong className="font-medium text-ink">maths and science</strong>{" "}
              tutoring for <strong className="font-medium text-ink">primary
              students</strong>, plus <strong className="font-medium text-ink">reading
              support</strong>, offered <strong className="font-medium text-ink">in
              your home or online</strong>.
            </p>
            <p>
              Outside school I train seriously:{" "}
              <strong className="font-medium text-ink">kickboxing</strong>,{" "}
              <strong className="font-medium text-ink">tennis</strong>, and{" "}
              <strong className="font-medium text-ink">bouldering</strong> each week.
              That keeps me fit for sensible outdoor and hands-on work. I also
              collect <strong className="font-medium text-ink">Pokémon cards</strong> —
              it&apos;s taught me patience, attention to detail, and how to deal fairly
              with people.
            </p>
            <p>
              Apex Assist is still growing. As demand increases, I&apos;m planning to
              involve <strong className="font-medium text-ink">trusted friends</strong>{" "}
              for tutoring and on-site help during times I can&apos;t be there — always
              with your agreement and clear communication first.
            </p>
          </div>
          <p className="mt-8 text-sm text-ink/55">
            Each service has its own page with more detail — start with{" "}
            <Link href="/services" className="font-medium text-ink underline decoration-ink/25 underline-offset-2">
              Services
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-ink/5 bg-primary/40 px-5 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Services
          </h2>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/65">
            Tap through for benefits, what&apos;s included, and how I work.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {SERVICE_ORDER.map((slug) => {
              const s = servicesBySlug[slug];
              const Icon = s.icon;
              return (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="flex h-full gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-sm shadow-ink/[0.02] transition hover:border-ink/15 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-medium text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">
                        {s.cardBlurb}
                      </p>
                      <span className="mt-3 inline-block text-sm font-medium text-ink underline decoration-ink/25 underline-offset-2">
                        Read more
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink/60"
            >
              View all services on one page
            </Link>
          </p>
        </div>
      </section>

      <section id="pricing" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Pricing
          </h2>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/65">
            Straightforward rates by type of work. I&apos;ll confirm the exact quote when
            you text — no surprises.
          </p>
          <div className="mt-10 space-y-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-5 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-medium text-ink">{tier.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{tier.detail}</p>
                </div>
                <p className="text-lg font-semibold tabular-nums text-ink sm:text-right">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink/55">
            Final pricing depends on the job. Longer bookings or regular help may be
            discounted — ask when you get in touch.
          </p>
        </div>
      </section>

      <section
        id="availability"
        className="border-t border-ink/5 bg-primary/35 px-5 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Availability
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/70">
            I fit Apex Assist around school and training. Regular hours are:
          </p>
          <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/80">
            <li className="flex gap-3 rounded-xl bg-white/80 px-4 py-3">
              <Home className="mt-0.5 h-5 w-5 shrink-0 text-ink/50" aria-hidden />
              <span>
                <strong className="font-medium text-ink">Thursday</strong> — afternoons,
                finishing before 6:00&nbsp;pm
              </span>
            </li>
            <li className="flex gap-3 rounded-xl bg-white/80 px-4 py-3">
              <CalendarDays
                className="mt-0.5 h-5 w-5 shrink-0 text-ink/50"
                aria-hidden
              />
              <span>
                <strong className="font-medium text-ink">Every second Saturday</strong>{" "}
                — from about 1:00&nbsp;pm (afternoons)
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink/55">
            Text me for the next Saturday I&apos;m on, or to discuss online tutoring
            times. When I&apos;m booked out, I may suggest a trusted friend for tutoring
            or hands-on help — only if you&apos;re comfortable with that.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
            The fastest way to reach me is a text. You can also use the form — it opens
            a message with your details ready to send.
          </p>
          <div className="mt-8 rounded-2xl bg-primary/50 p-6 sm:p-8">
            <p className="mb-6 text-center">
              <a
                href={`sms:${SMS_E164}`}
                className="text-lg font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink/50"
              >
                {SMS_LABEL}
              </a>
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
