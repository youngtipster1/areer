import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="type-overline text-muted-foreground">{children}</p>;
}

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Container className="grid items-center gap-16 pb-24 pt-14 sm:pt-24 lg:grid-cols-12 lg:gap-8 lg:pb-32">
        <div className="lg:col-span-6">
          <h1 id="hero-title" className="type-display text-balance">
            Your potential deserves a <span className="accent-rule">place to grow.</span>
          </h1>
          <p className="type-body-lg mt-5 max-w-[34rem] text-muted-foreground">
            Discover meaningful opportunities to contribute, demonstrate what you can do, and build the future you're working towards.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/get-started" search={{ as: "talent" }}>Find Your Opportunity<ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-started" search={{ as: "organisation" }}>Build Something With Talent</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          <ConnectionScene />
        </div>
      </Container>
    </section>
  );
}

/** A composed product scene: a person's capabilities connecting to a founder's Need. */
function ConnectionScene() {
  const caps = ["User research", "Prototyping", "Product writing"];
  return (
    <figure className="relative mx-auto w-full max-w-[540px]" aria-label="Illustration: a talent profile connecting to an opportunity">
      <div className="relative aspect-[5/6] sm:aspect-[6/6]">
        {/* connector */}
        <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M 30 44 C 30 62, 70 46, 70 64" fill="none" stroke="var(--border-strong)" strokeWidth="0.35" strokeDasharray="1.2 1.2" vectorEffect="non-scaling-stroke" />
          <circle cx="30" cy="44" r="0.9" fill="var(--foreground)" />
          <circle cx="70" cy="64" r="1.1" fill="var(--accent)" stroke="var(--foreground)" strokeWidth="0.3" />
        </svg>

        {/* Profile */}
        <div className="absolute left-0 top-0 w-[68%] rounded-xl border border-border bg-card p-5 shadow-md sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">AB</span>
            <div>
              <p className="font-display font-bold leading-tight">Amina Bello</p>
              <p className="text-xs text-muted-foreground">Product designer, early career</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2">
            {caps.map((c) => (
              <li key={c} className="flex items-center justify-between text-sm">
                <span>{c}</span>
                <Check className="size-3.5 text-accent-ink" aria-hidden />
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-3 text-xs text-muted-foreground">2 projects as evidence</p>
        </div>

        {/* Need */}
        <div className="absolute bottom-0 right-0 w-[72%] rounded-xl border border-primary bg-primary p-5 text-primary-foreground shadow-lg sm:p-6">
          <p className="type-overline opacity-60">Need · Kora Labs</p>
          <p className="mt-2 font-display text-lg font-bold leading-snug">Shape the first version of a learning app</p>
          <p className="mt-2 text-xs opacity-70">6–8 hrs / week · 8 weeks</p>
          <div className="mt-5 flex items-center gap-2 border-t border-primary-foreground/15 pt-3 text-xs">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="opacity-85">3 of 4 capabilities align</span>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Illustrative preview, not real platform data.</figcaption>
    </figure>
  );
}

/* ---------------- Problem ---------------- */

export function Problem() {
  return (
    <section id="about" aria-labelledby="problem-title" className="scroll-mt-16 bg-primary text-primary-foreground">
      <Container className="py-16 sm:py-24">
        <p className="type-overline opacity-60">The challenge</p>
        <h2 id="problem-title" className="mt-6 max-w-4xl font-display text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          There is more to your potential than your résumé.
        </h2>
        <div className="mt-10 grid gap-8 border-t border-primary-foreground/15 pt-10 md:grid-cols-12">
          <p className="type-body-lg opacity-80 md:col-span-5">
            Job titles and past roles tell only part of the story. They miss what you can actually do, where you're heading, and the value you could bring.
          </p>
          <div className="md:col-span-6 md:col-start-7">
            <ResumeContrast />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ResumeContrast() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-primary-foreground/15 text-sm">
      <div className="bg-primary p-5">
        <p className="type-overline opacity-50">A résumé sees</p>
        <ul className="mt-4 space-y-2 opacity-60">
          <li>Job titles</li>
          <li>Years of experience</li>
          <li>Degree</li>
        </ul>
      </div>
      <div className="bg-primary p-5">
        <p className="type-overline text-accent">Foundareer sees</p>
        <ul className="mt-4 space-y-2">
          <li>Capabilities</li>
          <li>Evidence of work</li>
          <li>Direction and ambition</li>
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Approach ---------------- */

export function Approach() {
  const steps = [
    ["Identity", "Who you are beyond a list of qualifications."],
    ["Evidence", "Projects and work that show what you can do."],
    ["Opportunity", "Needs defined around real goals and outcomes."],
    ["Contribution", "Work that moves both you and the team forward."],
  ];
  return (
    <section aria-labelledby="approach-title">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="type-overline text-muted-foreground">A different approach</p>
            <h2 id="approach-title" className="type-h1 mt-5 text-balance">Connect what you can do with what the world needs.</h2>
          </div>
        </div>
        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
          <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-border-strong md:block" />
          {steps.map(([t, d], i) => (
            <li key={t} className="relative flex gap-5 md:block">
              <span aria-hidden className={`relative mt-1 block size-[15px] shrink-0 rounded-full border-2 md:mt-0 ${i === 3 ? "border-foreground bg-accent" : "border-foreground bg-background"}`} />
              <div className="md:mt-6">
                <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
                <h3 className="type-h2 mt-1">{t}</h3>
                <p className="mt-2 max-w-[16rem] text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href="#how-it-works" className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline">
          See how it works<ArrowUpRight className="size-4" />
        </a>
      </Container>
    </section>
  );
}
