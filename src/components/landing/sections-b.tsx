import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Eye, FileCheck2, Handshake, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "./sections-a";
import { Wordmark } from "./nav";

/* ---------------- Audiences ---------------- */

type Aud = {
  id: string;
  label: string;
  title: string;
  copy: string;
  benefits: string[];
  cta: string;
  as: "talent" | "organisation";
  inverted?: boolean;
};

const audiences: Aud[] = [
  {
    id: "talent",
    label: "For talent",
    title: "Build a career around what you can contribute.",
    copy: "Show more than your qualifications. Bring your capabilities, projects, interests, and ambitions together in one professional identity. Discover opportunities where you can contribute, learn, and grow.",
    benefits: [
      "Build a richer professional identity.",
      "Demonstrate capabilities through evidence.",
      "Discover opportunities beyond traditional job titles.",
      "Understand why an opportunity may fit.",
      "Turn meaningful connections into experience and progress.",
    ],
    cta: "Explore Opportunities",
    as: "talent",
  },
  {
    id: "organisations",
    label: "For founders & organisations",
    title: "Find people who can help move your vision forward.",
    copy: "Define the work you need to accomplish, the contribution you are looking for, and the capabilities that matter. Discover people whose strengths and ambitions align with your goals.",
    benefits: [
      "Define opportunities around real outcomes.",
      "Identify required and helpful capabilities.",
      "Discover people beyond conventional résumé filters.",
      "Understand capability alignment.",
      "Build connections around meaningful contributions.",
    ],
    cta: "Find the Right Contributors",
    as: "organisation",
    inverted: true,
  },
];

export function Audiences() {
  return (
    <section aria-labelledby="audiences-title" className="border-t border-border">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Two sides, one platform</Eyebrow>
          <h2 id="audiences-title" className="type-h1 mt-4 text-balance">Built for the people doing the work — and the people building it.</h2>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {audiences.map((a) => (
            <article
              key={a.id}
              id={a.id}
              aria-labelledby={`${a.id}-title`}
              className={`flex scroll-mt-24 flex-col rounded-xl border p-7 sm:p-10 ${a.inverted ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
            >
              <p className={`type-overline ${a.inverted ? "opacity-60" : "text-muted-foreground"}`}>{a.label}</p>
              <h3 id={`${a.id}-title`} className="type-h2 mt-4 text-balance">{a.title}</h3>
              <p className={`mt-4 ${a.inverted ? "opacity-75" : "text-muted-foreground"}`}>{a.copy}</p>
              <ul className={`mt-8 flex-1 divide-y border-y ${a.inverted ? "divide-primary-foreground/15 border-primary-foreground/15" : "divide-border border-border"}`}>
                {a.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 py-3 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${a.inverted ? "text-accent" : "text-accent-ink"}`} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" variant={a.inverted ? "accent" : "default"} className="w-full sm:w-auto">
                  <Link to="/get-started" search={{ as: a.as }}>{a.cta}<ArrowRight /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- How it works ---------------- */

export function HowItWorks() {
  const steps = [
    ["Build your identity", "Bring together your capabilities, evidence, experience, interests, and direction."],
    ["Discover possibilities", "Explore opportunities or people based on what matters to the work and to your future."],
    ["Understand the fit", "See relevant alignment, potential gaps, and what may help you prepare."],
    ["Connect and contribute", "Start conversations, find common ground, and work towards meaningful outcomes."],
  ];
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-16 bg-secondary">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-title" className="type-h1 mt-4 text-balance">From potential to meaningful contribution.</h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:justify-self-end">Four steps, whichever side you're on. The connection is where the real work begins.</p>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative bg-card p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-extrabold tracking-tight">0{i + 1}</span>
                <span aria-hidden className="h-px flex-1 bg-border-strong" />
                {i === 3 && <span aria-hidden className="size-2 rounded-full bg-accent" />}
              </div>
              <h3 className="type-h3 mt-8">{t}</h3>
              <p className="type-small mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Different ---------------- */

export function Different() {
  const items = [
    ["Capabilities over titles", "Understand what people can contribute, not just what their previous roles were called."],
    ["Evidence over empty claims", "Give people ways to demonstrate their abilities through work, projects, and other relevant evidence."],
    ["Fit with context", "Consider the requirements of an opportunity alongside a person's direction, interests, and readiness."],
    ["Progress beyond the connection", "Treat the connection as the beginning of a meaningful contribution, not the final outcome."],
  ];
  return (
    <section aria-labelledby="diff-title">
      <Container className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <Eyebrow>What makes Foundareer different</Eyebrow>
          <h2 id="diff-title" className="type-h1 mt-4 text-balance">
            Designed around <span className="accent-rule">contribution</span>, not just credentials.
          </h2>
        </div>
        <dl className="mt-14 border-t border-border">
          {items.map(([t, d]) => (
            <div key={t} className="grid gap-2 border-b border-border py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-12">
              <dt className="type-h2">{t}</dt>
              <dd className="text-muted-foreground md:pt-1.5">{d}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ---------------- Trust ---------------- */

export function Trust() {
  const items = [
    { icon: FileCheck2, t: "Clear contribution expectations", d: "What the work involves, how long it runs, and what a good outcome looks like." },
    { icon: Scale, t: "Transparent commitment and exchange", d: "Both sides see the time asked for and what is offered in return." },
    { icon: Eye, t: "Contextual capability and evidence", d: "Capabilities shown alongside the work that supports them." },
    { icon: Handshake, t: "Honest trust signals", d: "Signals that say exactly what has — and hasn't — been verified." },
  ];
  return (
    <section aria-labelledby="trust-title" className="border-t border-border">
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <Eyebrow>Trust and transparency</Eyebrow>
          <h2 id="trust-title" className="type-h1 mt-4 text-balance">Make meaningful connections with clarity.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Good opportunities start with clear expectations. Foundareer is being designed to help people understand what a contribution involves, what capabilities are needed, and what both sides hope to achieve.
          </p>
          <p className="type-small mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-muted-foreground">
            <span className="size-1.5 rounded-full bg-warning" />
            Product principles — in design, not yet live.
          </p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {items.map(({ icon: Icon, t, d }) => (
            <li key={t} className="bg-card p-6">
              <Icon className="size-5 text-accent-ink" aria-hidden />
              <h3 className="type-h3 mt-5">{t}</h3>
              <p className="type-small mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------- Closing ---------------- */

export function Closing() {
  return (
    <section aria-labelledby="close-title" className="border-t border-border">
      <Container className="py-24 text-center sm:py-32">
        <span aria-hidden className="mx-auto block h-1 w-12 rounded-full bg-accent" />
        <h2 id="close-title" className="type-display mx-auto mt-8 max-w-4xl text-balance">
          Your next opportunity could start with what you can contribute.
        </h2>
        <p className="type-body-lg mx-auto mt-6 max-w-xl text-muted-foreground">
          Whether you're building your career or building something new, Foundareer helps you take the next step towards meaningful work.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/get-started" search={{ as: "talent" }}>Get Started as Talent<ArrowRight /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/get-started" search={{ as: "organisation" }}>I'm Building a Team</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function LandingFooter() {
  const platform = [
    ["#talent", "For Talent"],
    ["#organisations", "For Organisations"],
    ["#how-it-works", "How It Works"],
    ["#about", "About"],
  ];
  const soon = ["Privacy", "Terms", "Contact"];
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Wordmark className="[&>span]:text-accent" />
          <p className="mt-4 max-w-xs text-sm opacity-70">Connecting people with founders and organisations through what they can contribute.</p>
        </div>
        <nav aria-label="Platform">
          <p className="type-overline opacity-60">Platform</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {platform.map(([h, l]) => (
              <li key={h}><a href={h} className="opacity-85 hover:opacity-100 hover:underline">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="type-overline opacity-60">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {soon.map((l) => (
              <li key={l} className="flex items-center gap-2 opacity-60">
                {l}<span className="rounded-sm border border-primary-foreground/25 px-1.5 text-[0.6875rem]">Soon</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="type-small border-t border-primary-foreground/15 py-6 opacity-60">© {new Date().getFullYear()} Foundareer. Prototype for review.</Container>
    </footer>
  );
}
