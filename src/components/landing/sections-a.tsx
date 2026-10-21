import { Link } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, MapPin, FileText, Link2, CheckCircle2, AlertCircle, Clock, Search, Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import talentImg from "@/assets/talent.jpg";
import foundersImg from "@/assets/founders.jpg";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`type-overline text-muted-foreground ${className}`}>{children}</p>;
}

/** Capability chip — same treatment as the design-system showcase. */
export function Cap({ name, level }: { name: string; level?: "required" | "helpful" | "met" | "gap" }) {
  const map = {
    required: "border-foreground",
    helpful: "border-dashed border-border-strong text-muted-foreground",
    met: "border-transparent bg-accent-soft text-accent-ink",
    gap: "border-transparent bg-warning-soft text-warning",
  } as const;
  return (
    <span className={`type-small inline-flex h-7 items-center gap-1.5 rounded-sm border px-2 font-medium ${map[level ?? "required"]}`}>
      {level === "met" && <CheckCircle2 className="size-3.5" aria-hidden />}
      {level === "gap" && <AlertCircle className="size-3.5" aria-hidden />}
      {name}
    </span>
  );
}

export function Initials({ text, tone = "primary", size = "size-10" }: { text: string; tone?: "primary" | "accent" | "muted"; size?: string }) {
  const t = { primary: "bg-primary text-primary-foreground", accent: "bg-accent text-accent-foreground", muted: "bg-muted text-foreground" }[tone];
  return (
    <Avatar className={`${size} shrink-0`}>
      <AvatarFallback className={`${t} font-display text-sm font-bold`}>{text}</AvatarFallback>
    </Avatar>
  );
}

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-6">
          <Eyebrow>Opportunities built around what you can do</Eyebrow>
          <h1 id="hero-title" className="type-display mt-4 text-balance">
            Find your place in the work that <span className="accent-rule">matters.</span>
          </h1>
          <p className="type-body-lg mt-5 max-w-[36rem] text-muted-foreground">
            Discover projects and opportunities where your skills can make a difference. Foundareer helps you show what you can do, find people who need your capabilities, and take the next step towards the future you want to build.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/get-started" search={{ as: "talent" }}>Find Opportunities<ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-started" search={{ as: "organisation" }}>Find People to Build With</Link>
            </Button>
          </div>
          <dl className="mt-8 grid max-w-[36rem] grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border text-sm">
            <div className="bg-card p-4">
              <dt className="type-overline text-muted-foreground">For talent</dt>
              <dd className="mt-1 font-medium">Ready to contribute and grow.</dd>
            </div>
            <div className="bg-card p-4">
              <dt className="type-overline text-muted-foreground">For founders</dt>
              <dd className="mt-1 font-medium">Looking for the right people.</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-6">
          <HeroProduct />
        </div>
      </Container>
    </section>
  );
}

/** Product composition: an opportunity in the middle, talent on one side, the founder's view on the other. */
function HeroProduct() {
  return (
    <figure aria-label="Illustrative product preview: an opportunity, a talent profile and a founder reviewing contributors" className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-2xl bg-primary p-4 text-primary-foreground shadow-lg sm:p-6">
        <div className="flex items-center justify-between">
          <p className="type-overline opacity-60">Opportunity · Kora Labs</p>
          <Badge className="bg-accent text-accent-foreground hover:bg-accent">Open</Badge>
        </div>
        <p className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">Shape the first version of a learning app for secondary students</p>
        <div className="type-small mt-3 flex flex-wrap gap-x-4 gap-y-1 opacity-75">
          <span className="inline-flex items-center gap-1"><Clock className="size-3.5" />6–8 hrs / week</span>
          <span className="inline-flex items-center gap-1"><Briefcase className="size-3.5" />8 weeks · Remote</span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {/* Talent side */}
          <div className="rounded-xl bg-card p-4 text-card-foreground">
            <p className="type-overline text-muted-foreground">Your fit</p>
            <div className="mt-3 flex items-center gap-3">
              <Initials text="AB" />
              <div className="min-w-0">
                <p className="truncate font-medium">Amina Bello</p>
                <p className="type-small truncate text-muted-foreground">Product designer</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Cap name="User research" level="met" />
              <Cap name="Prototyping" level="met" />
              <Cap name="Copywriting" level="gap" />
            </div>
            <p className="type-small mt-3 text-muted-foreground">3 of 4 capabilities align</p>
          </div>

          {/* Founder side */}
          <div className="rounded-xl bg-card p-4 text-card-foreground">
            <p className="type-overline text-muted-foreground">Founder's view</p>
            <ul className="mt-3 space-y-2.5">
              {[["AB", "Amina B.", "3/4", "accent"], ["TO", "Tunde O.", "3/4", "muted"], ["CE", "Chiamaka E.", "2/4", "muted"]].map(([i, n, f, t]) => (
                <li key={n} className="flex items-center gap-2.5">
                  <Initials text={i ?? ""} tone={t as "accent" | "muted"} size="size-8" />
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{n}</span>
                  <span className="type-small text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="type-small mt-3 inline-flex items-center gap-1 text-muted-foreground"><Search className="size-3.5" />Reviewing evidence</p>
          </div>
        </div>
      </div>
      <figcaption className="type-small mt-3 text-center text-muted-foreground">Illustrative preview — sample names, not real platform data.</figcaption>
    </figure>
  );
}

/* ---------------- Problem ---------------- */

export function Problem() {
  return (
    <section id="about" aria-labelledby="problem-title" className="scroll-mt-16 bg-primary text-primary-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="type-overline opacity-60">The problem</p>
            <h2 id="problem-title" className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              You have more to offer than your experience section shows.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ProblemPanel
            img={talentImg} alt="A young designer sketching interface ideas at her desk" label="If you're starting out"
            copy="Getting an opportunity can be difficult when you are asked to prove experience before anyone gives you the chance to gain it. You may have the skills, the projects, or the willingness to learn, but still struggle to find work where you can demonstrate your value."
          />
          <ProblemPanel
            img={foundersImg} alt="Founders planning work on a wall of notes" label="If you're building something"
            copy="Meanwhile, founders and small teams need capable people to move projects forward, but finding someone with the right strengths, interests, and availability is not always straightforward."
          />
        </div>
      </Container>
    </section>
  );
}

function ProblemPanel({ img, alt, label, copy }: { img: string; alt: string; label: string; copy: string }) {
  return (
    <article className="overflow-hidden rounded-xl border border-primary-foreground/15">
      <img src={img} alt={alt} loading="lazy" width={1200} height={1408} className="aspect-[16/9] w-full object-cover grayscale-[35%]" />
      <div className="p-5 sm:p-6">
        <p className="type-overline text-accent">{label}</p>
        <p className="mt-3 opacity-85">{copy}</p>
      </div>
    </article>
  );
}

/* ---------------- Talent experience ---------------- */

export function TalentSection() {
  const items = [
    "Build a profile that reflects your capabilities and career direction.",
    "Present projects, work samples, and other relevant evidence.",
    "Explore opportunities with clear expectations.",
    "Understand the capabilities an opportunity needs.",
    "See where your strengths align and where you could improve.",
    "Express interest in work you genuinely want to contribute to.",
  ];
  return (
    <section id="talent" aria-labelledby="talent-title" className="scroll-mt-16">
      <Container className="grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>For talent</Eyebrow>
          <h2 id="talent-title" className="type-h1 mt-4 text-balance">Turn what you can do into your next opportunity.</h2>
          <p className="type-body-lg mt-4 text-muted-foreground">
            Build a professional identity around your capabilities, not just your job history. Show projects and other evidence of your work, discover opportunities that fit your direction, and understand how you could contribute.
          </p>
          <ol className="mt-7 divide-y divide-border border-y border-border">
            {items.map((t, i) => (
              <li key={t} className="flex gap-4 py-3">
                <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ol>
          <Button asChild size="lg" className="mt-7">
            <Link to="/get-started" search={{ as: "talent" }}>Explore Opportunities<ArrowRight /></Link>
          </Button>
        </div>
        <div className="lg:col-span-7">
          <ProfilePreview />
        </div>
      </Container>
    </section>
  );
}

function ProfilePreview() {
  return (
    <figure aria-label="Illustrative talent profile preview" className="rounded-2xl border border-border bg-secondary p-3 sm:p-4">
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-4">
          <Initials text="AB" size="size-14" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="type-h2">Amina Bello</p>
              <BadgeCheck className="size-5 text-accent-ink" aria-label="Email confirmed" />
            </div>
            <p className="text-muted-foreground">Product designer moving into service design</p>
            <p className="type-small mt-1 inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-3.5" />Lagos · Corps member</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="type-overline mb-2 text-muted-foreground">Capabilities</p>
            <div className="flex flex-wrap gap-1.5">
              <Cap name="User research" level="met" />
              <Cap name="Interaction design" level="met" />
              <Cap name="Prototyping" level="met" />
              <Cap name="Facilitation" level="helpful" />
            </div>
          </div>
          <div>
            <p className="type-overline mb-2 text-muted-foreground">Direction</p>
            <div className="flex flex-wrap gap-1.5"><Badge variant="secondary">Health</Badge><Badge variant="secondary">Education</Badge><Badge variant="secondary">Civic tech</Badge></div>
          </div>
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {[
          { I: FileText, t: "Clinic booking redesign", s: "Case study · 2025" },
          { I: Link2, t: "Open-source design tokens", s: "GitHub · Contributor" },
        ].map(({ I, t, s }) => (
          <div key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
            <div className="grid size-10 shrink-0 place-items-center rounded-md bg-muted"><I className="size-4" aria-hidden /></div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{t}</p>
              <p className="type-small text-muted-foreground">{s}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">Fit for "Learning app — first version"</p>
          <span className="type-small text-muted-foreground">3 of 4</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Cap name="User research" level="met" /><Cap name="Prototyping" level="met" /><Cap name="Interaction design" level="met" /><Cap name="Product copywriting" level="gap" />
        </div>
        <p className="type-small mt-3 text-muted-foreground">Suggested: add a writing sample to strengthen this application.</p>
      </div>
      <figcaption className="sr-only">Sample profile, not real platform data.</figcaption>
    </figure>
  );
}
