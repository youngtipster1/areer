import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleDashed, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="type-overline text-muted-foreground">{children}</p>;
}

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent-ink" />
            Talent × founders, connected by contribution
          </p>
          <h1 id="hero-title" className="type-display mt-6 text-balance">
            Your potential deserves a <span className="accent-rule">place to grow</span>.
          </h1>
          <p className="type-body-lg mt-6 max-w-xl text-muted-foreground">
            Discover opportunities to contribute, prove what you can do, and build the career you're working towards. Foundareer connects your capabilities and ambitions with founders and organisations that need people like you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/get-started" search={{ as: "talent" }}>Find Your Opportunity<ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-started" search={{ as: "organisation" }}>Build Something With Talent</Link>
            </Button>
          </div>
          <p className="type-small mt-6 text-muted-foreground">For people ready to contribute, and the founders building what comes next.</p>
        </div>
        <HeroPreview />
      </Container>
    </section>
  );
}

function HeroPreview() {
  const caps = [
    { name: "User research", state: "match" },
    { name: "Prototyping", state: "match" },
    { name: "Product writing", state: "match" },
    { name: "Analytics", state: "grow" },
  ];
  return (
    <figure className="relative mx-auto w-full max-w-[520px]">
      <div className="relative rounded-xl border border-border bg-card shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="type-overline text-muted-foreground">Need · Early-stage product</span>
          <span className="rounded-sm bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent-ink">Open</span>
        </div>
        <div className="p-5 sm:p-6">
          <h2 className="type-h3">Shape the first version of a learning app</h2>
          <p className="type-small mt-1.5 text-muted-foreground">
            Contribution: 6–8 hrs/week for 8 weeks · Outcome: a tested onboarding flow
          </p>
          <div className="mt-6">
            <p className="type-overline mb-3 text-muted-foreground">Capability alignment</p>
            <ul className="space-y-2">
              {caps.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-md border border-border px-3 py-2.5 text-sm">
                  <span className="font-medium">{c.name}</span>
                  {c.state === "match" ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground"><Check className="size-3.5 text-accent-ink" />Evidenced</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><CircleDashed className="size-3.5" />Room to grow</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-md bg-muted p-3.5">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent-ink" />
            <p className="type-small">
              <span className="font-semibold">Why this may fit:</span>{" "}
              <span className="text-muted-foreground">your projects show research and prototyping; this Need helps you build analytics experience.</span>
            </p>
          </div>
        </div>
      </div>
      {/* evidence chip */}
      <div className="absolute -bottom-6 -left-3 hidden w-56 rounded-lg border border-border bg-card p-3.5 shadow-md sm:block lg:-left-10">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"><FolderOpen className="size-4" /></span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Campus tutoring app</p>
            <p className="text-xs text-muted-foreground">Evidence · Case study</p>
          </div>
        </div>
      </div>
      <figcaption className="type-small mt-10 text-center text-muted-foreground sm:mt-12">Illustrative product preview — not real platform data.</figcaption>
    </figure>
  );
}

/* ---------------- Problem ---------------- */

export function Problem() {
  const points = [
    ["Experience isn't the whole story.", "People can have valuable capabilities even when their formal experience is limited."],
    ["Potential needs somewhere to grow.", "Skills and ambition become more meaningful when there is a real opportunity to apply them."],
    ["The right people are not always easy to find.", "Founders need people whose capabilities and interests align with the work they are trying to accomplish."],
  ];
  return (
    <section id="about" aria-labelledby="problem-title" className="scroll-mt-16 bg-primary text-primary-foreground">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="type-overline opacity-60">The problem</p>
            <h2 id="problem-title" className="type-h1 mt-4 text-balance">There is more to your potential than your résumé.</h2>
          </div>
          <p className="type-body-lg self-end opacity-75">
            Finding the right opportunity can be difficult when the process overlooks what you can actually do, what you want to become, and the value you could bring to a team.
          </p>
        </div>
        <ol className="mt-16 grid border-t border-primary-foreground/15 md:grid-cols-3">
          {points.map(([t, d], i) => (
            <li key={t} className="border-b border-primary-foreground/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0">
              <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
              <h3 className="type-h3 mt-3">{t}</h3>
              <p className="mt-2 opacity-70">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Approach ---------------- */

export function Approach() {
  const steps = [
    ["Understand your capabilities.", "Build a professional identity that goes beyond a list of qualifications."],
    ["Show what you can do.", "Present projects, experience, and other evidence of your capabilities."],
    ["Discover meaningful opportunities.", "Explore Needs created around real goals, contributions, and outcomes."],
    ["Connect with purpose.", "Find opportunities that align with your capabilities, interests, and direction."],
  ];
  return (
    <section aria-labelledby="approach-title">
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>A different approach</Eyebrow>
          <h2 id="approach-title" className="type-h1 mt-4 text-balance">More than matching profiles. Connecting potential with purpose.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">Foundareer starts with people — what they can do, what they've shown, and where they're heading.</p>
        </div>
        <ol className="relative">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-border-strong" />
          {steps.map(([t, d], i) => (
            <li key={t} className="relative flex gap-6 pb-10 last:pb-0">
              <span className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border font-display text-sm font-bold ${i === 3 ? "border-accent bg-accent text-accent-foreground" : "border-border-strong bg-background"}`}>
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="type-h2">{t}</h3>
                <p className="mt-2 max-w-md text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
