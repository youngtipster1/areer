import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./sections-a";
import { Wordmark } from "./nav";
import talentImg from "@/assets/talent.jpg";
import foundersImg from "@/assets/founders.jpg";

/* ---------------- Audiences ---------------- */

function AudienceRow({
  id, label, title, copy, points, cta, as, img, alt, reverse,
}: {
  id: string; label: string; title: string; copy: string; points: string[]; cta: string;
  as: "talent" | "organisation"; img: string; alt: string; reverse?: boolean;
}) {
  return (
    <article id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <img src={img} alt={alt} loading="lazy" width={1200} height={1408}
            className="aspect-[4/3] w-full rounded-xl object-cover grayscale-[35%] lg:aspect-[5/6]" />
        </div>
        <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
          <p className="type-overline text-muted-foreground">{label}</p>
          <h3 id={`${id}-title`} className="type-h1 mt-5 text-balance">{title}</h3>
          <p className="type-body-lg mt-6 text-muted-foreground">{copy}</p>
          <ul className="mt-8 space-y-3 border-l-2 border-accent pl-5">
            {points.map((p) => <li key={p} className="font-medium">{p}</li>)}
          </ul>
          <Button asChild size="lg" variant="outline" className="mt-10">
            <Link to="/get-started" search={{ as }}>{cta}<ArrowRight /></Link>
          </Button>
        </div>
      </Container>
    </article>
  );
}

export function Audiences() {
  return (
    <section aria-label="Who Foundareer is for" className="border-t border-border">
      <AudienceRow
        id="talent" label="For talent" title="Your experience is still being written."
        copy="Build a professional identity around your capabilities, show what you can do, and discover opportunities that help you grow."
        points={["Capabilities, not just titles", "Projects as evidence", "Opportunities that explain the fit"]}
        cta="Explore Opportunities" as="talent" img={talentImg} alt="A designer sketching interface ideas at her desk"
      />
      <div className="bg-secondary">
        <AudienceRow
          id="organisations" label="For founders & organisations" title="Build with the right people."
          copy="Define the contribution you need, discover relevant capabilities, and connect with people who can help move your goals forward."
          points={["Needs framed around outcomes", "Required and helpful capabilities", "People beyond résumé filters"]}
          cta="Find Contributors" as="organisation" img={foundersImg} alt="Founders and a contributor planning work on a wall of notes" reverse
        />
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

export function HowItWorks() {
  const steps = [
    ["Build your identity.", "Capabilities, evidence, interests and direction in one place."],
    ["Discover possibilities.", "Explore opportunities or people based on what the work needs."],
    ["Understand the fit.", "See where you align, where the gaps are, and how to prepare."],
    ["Connect and contribute.", "Start a conversation and work towards a shared outcome."],
  ];
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-16">
      <Container className="grid gap-14 py-24 sm:py-36 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="type-overline text-muted-foreground">How it works</p>
          <h2 id="how-title" className="type-h1 mt-5 text-balance">Four steps, either side.</h2>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-border py-8 last:border-b sm:grid-cols-[5rem_1fr]">
              <span className="font-display text-3xl font-extrabold tracking-tight text-muted-foreground sm:text-4xl">0{i + 1}</span>
              <div>
                <h3 className="type-h2">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
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
    ["Capabilities", "What someone can do, not what their last role was called."],
    ["Evidence", "Work and projects that support every claim."],
    ["Context", "Fit weighs direction and readiness, not only requirements."],
    ["Outcomes", "The connection is where contribution begins."],
  ];
  return (
    <section aria-labelledby="diff-title" className="bg-primary text-primary-foreground">
      <Container className="py-24 sm:py-36">
        <h2 id="diff-title" className="max-w-4xl font-display text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Built around <span className="text-accent">contribution</span>, not just credentials.
        </h2>
        <dl className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, d]) => (
            <div key={t} className="border-t border-primary-foreground/20 pt-6">
              <dt className="font-display text-lg font-bold">{t}</dt>
              <dd className="mt-2 text-sm opacity-70">{d}</dd>
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
    ["Clear expectations", "What the work involves, how long it runs, and what a good outcome looks like."],
    ["Relevant evidence", "Capabilities shown next to the work that supports them."],
    ["Honest signals", "We'll say exactly what has — and hasn't — been verified."],
  ];
  return (
    <section aria-labelledby="trust-title">
      <Container className="grid gap-14 py-24 sm:py-36 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="type-overline text-muted-foreground">Trust</p>
          <h2 id="trust-title" className="type-h1 mt-5 text-balance">Clarity creates better connections.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">These are the principles we're designing around. They're in progress, not yet live.</p>
        </div>
        <ul className="space-y-10 lg:col-span-6 lg:col-start-7">
          {items.map(([t, d]) => (
            <li key={t}>
              <h3 className="type-h3">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
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
      <Container className="py-28 sm:py-40">
        <h2 id="close-title" className="max-w-5xl font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-7xl">
          Your next opportunity starts with what you can <span className="accent-rule">contribute.</span>
        </h2>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
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
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Connecting people with founders through what they can contribute.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {platform.map(([h, l]) => (
              <li key={h}><a href={h} className="text-muted-foreground hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="type-small border-t border-border py-6 text-muted-foreground">© {new Date().getFullYear()} Foundareer. Prototype for review.</Container>
    </footer>
  );
}
