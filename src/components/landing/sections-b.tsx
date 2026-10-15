import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Target, Users, MessageSquare, FileText, Lightbulb, Code2, PenTool, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Eyebrow, Cap, Initials } from "./sections-a";
import { Wordmark } from "./nav";

/* ---------------- Founder experience ---------------- */

export function FounderSection() {
  const items = [
    ["Define", "a project or initiative."],
    ["Explain", "the outcome and contribution needed."],
    ["Separate", "required capabilities from helpful ones."],
    ["Discover", "relevant people and review their evidence."],
    ["Understand", "alignment before expressing interest."],
    ["Start", "a conversation around the actual work."],
  ];
  return (
    <section id="organisations" aria-labelledby="org-title" className="scroll-mt-16 bg-secondary">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>For founders & organisations</Eyebrow>
            <h2 id="org-title" className="type-h1 mt-4 text-balance">Find people who can help you get the work done.</h2>
          </div>
          <p className="type-body-lg text-muted-foreground lg:col-span-5 lg:self-end">
            Describe what you are building, the contribution you need, and the capabilities that matter. Discover people who could help you make progress, whether you are developing a product, running a project, or growing an organisation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Need definition */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <p className="type-overline text-muted-foreground">Your need</p>
              <Badge variant="secondary">Draft</Badge>
            </div>
            <p className="type-h3 mt-3">Validate demand for a farm-to-market delivery app</p>
            <p className="mt-2 text-sm text-muted-foreground"><Target className="mr-1 inline size-3.5" aria-hidden />Outcome: 20 farmer interviews and a summary of what to build first.</p>
            <p className="type-overline mb-2 mt-5 text-muted-foreground">Required</p>
            <div className="flex flex-wrap gap-1.5"><Cap name="User interviews" /><Cap name="Research synthesis" /><Cap name="Yoruba or Hausa" /></div>
            <p className="type-overline mb-2 mt-4 text-muted-foreground">Helpful</p>
            <div className="flex flex-wrap gap-1.5"><Cap name="Agriculture" level="helpful" /><Cap name="Survey design" level="helpful" /></div>
            <p className="type-small mt-5 inline-flex items-center gap-1 text-muted-foreground"><Clock className="size-3.5" />10 hrs / week · 6 weeks</p>
          </div>

          {/* Contributors */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:col-span-7">
            <div className="flex items-center justify-between gap-3">
              <p className="type-overline text-muted-foreground">People who could help</p>
              <span className="type-small text-muted-foreground"><Users className="mr-1 inline size-3.5" aria-hidden />Sample results</span>
            </div>
            <ul className="mt-3 divide-y divide-border">
              {[
                { i: "TO", n: "Tunde Okafor", r: "Economics graduate · field research", m: ["User interviews", "Yoruba"], g: "Research synthesis", ev: 3 },
                { i: "FA", n: "Fatima Abubakar", r: "Corps member · survey & data", m: ["Research synthesis", "Hausa"], g: "User interviews", ev: 2 },
                { i: "KE", n: "Kelechi Eze", r: "Agritech volunteer", m: ["User interviews", "Agriculture"], g: "Yoruba or Hausa", ev: 4 },
              ].map((p, idx) => (
                <li key={p.n} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <Initials text={p.i} tone={idx === 0 ? "accent" : "muted"} />
                    <div className="min-w-0">
                      <p className="truncate font-medium">{p.n}</p>
                      <p className="type-small truncate text-muted-foreground">{p.r}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.m.map((c) => <Cap key={c} name={c} level="met" />)}
                    <Cap name={p.g} level="gap" />
                  </div>
                  <span className="type-small inline-flex shrink-0 items-center gap-1 text-muted-foreground"><FileText className="size-3.5" />{p.ev} evidence</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center gap-2 rounded-md bg-muted p-3 text-sm">
              <MessageSquare className="size-4 shrink-0" aria-hidden />
              <span>Start a conversation about the interviews with Tunde.</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-9">
            {items.map(([v, r]) => (
              <li key={v} className="border-l-2 border-accent pl-4"><span className="font-semibold">{v}</span> <span className="text-muted-foreground">{r}</span></li>
            ))}
          </ul>
          <div className="lg:col-span-3 lg:text-right">
            <Button asChild size="lg">
              <Link to="/get-started" search={{ as: "organisation" }}>Find Contributors<ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Opportunities ---------------- */

export function Opportunities() {
  const ops = [
    { I: Lightbulb, org: "Early-stage startup", t: "Help validate a product idea", c: "Run customer conversations and summarise what you learn.", caps: ["User interviews", "Note-taking"], time: "5 hrs / week · 4 weeks", out: "A clear go / no-go recommendation" },
    { I: PenTool, org: "Student-led project", t: "Design the onboarding for a study app", c: "Turn rough sketches into a tested first-run flow.", caps: ["Interaction design", "Prototyping"], time: "8 hrs / week · 6 weeks", out: "A prototype tested with 5 students" },
    { I: Code2, org: "Social enterprise", t: "Build a simple donor dashboard", c: "Connect existing spreadsheets to a readable web view.", caps: ["JavaScript", "Data handling"], time: "10 hrs / week · 6 weeks", out: "A working internal dashboard" },
    { I: Building2, org: "Small business", t: "Launch a weekend sales initiative", c: "Plan and track a social campaign with the owner.", caps: ["Social media", "Basic analytics"], time: "6 hrs / week · 4 weeks", out: "A repeatable campaign playbook" },
  ];
  return (
    <section aria-labelledby="ops-title" className="bg-primary text-primary-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="type-overline opacity-60">What opportunities look like</p>
            <h2 id="ops-title" className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Not just job titles. <span className="text-accent">Real work</span> to contribute to.
            </h2>
          </div>
          <p className="opacity-75 lg:col-span-5 lg:self-end">
            Opportunities on Foundareer can be organised around projects, initiatives and specific outcomes — so you know what you'd actually do, what it needs, and what success looks like. The examples below are illustrative.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ops.map(({ I, org, t, c, caps, time, out }) => (
            <article key={t} className="flex flex-col rounded-xl bg-card p-5 text-card-foreground sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-accent-soft text-accent-ink"><I className="size-5" aria-hidden /></span>
                <p className="type-overline text-muted-foreground">{org}</p>
              </div>
              <h3 className="type-h3 mt-4">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{caps.map((x) => <Cap key={x} name={x} />)}</div>
              <dl className="type-small mt-auto grid grid-cols-2 gap-3 border-t border-border pt-4 [&:not(:first-child)]:mt-5">
                <div><dt className="text-muted-foreground">Commitment</dt><dd className="font-medium">{time}</dd></div>
                <div><dt className="text-muted-foreground">Outcome</dt><dd className="font-medium">{out}</dd></div>
              </dl>
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
    ["Show what you bring.", "Build your identity, capabilities, and evidence."],
    ["Find relevant opportunities or people.", "Explore work and contributors that align with your needs and interests."],
    ["Understand the alignment.", "Review relevant strengths, expectations, and potential gaps."],
    ["Connect and contribute.", "Express interest, start a conversation, and work towards an outcome."],
  ];
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-16">
      <Container className="py-16 sm:py-20">
        <Eyebrow>How it works</Eyebrow>
        <h2 id="how-title" className="type-h1 mt-4 max-w-3xl text-balance">From discovering the right fit to doing meaningful work.</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="bg-card p-5 sm:p-6">
              <span className={`grid size-9 place-items-center rounded-full font-display text-sm font-bold ${i === 3 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>{i + 1}</span>
              <h3 className="type-h3 mt-4">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Different ---------------- */

export function Different() {
  const rows = [
    ["More than a résumé.", "Capabilities, projects, interests, and evidence can help tell a fuller story.", "Job titles · Years"],
    ["More than a job title.", "Opportunities can describe the contribution and outcome a team needs.", "“Intern wanted”"],
    ["More than a profile match.", "Relevant context, expectations, and readiness matter alongside capabilities.", "Keyword match"],
  ];
  return (
    <section aria-labelledby="diff-title" className="border-t border-border bg-secondary">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Why Foundareer</Eyebrow>
          <h2 id="diff-title" className="type-h1 mt-4 text-balance">A better starting point for finding the right fit.</h2>
        </div>
        <ul className="divide-y divide-border border-y border-border lg:col-span-8">
          {rows.map(([t, d, old]) => (
            <li key={t} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
              <div>
                <h3 className="type-h3">{t}</h3>
                <p className="mt-1 text-muted-foreground">{d}</p>
              </div>
              <span className="type-small text-muted-foreground line-through decoration-accent-ink/60">{old}</span>
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
    <section aria-labelledby="close-title">
      <Container className="py-16 sm:py-20">
        <h2 id="close-title" className="type-h1 text-center text-balance sm:text-5xl">What could you <span className="accent-rule">contribute</span> next?</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col rounded-xl bg-primary p-6 text-primary-foreground sm:p-8">
            <p className="type-overline opacity-60">For talent</p>
            <p className="mt-3 font-display text-xl font-bold leading-snug">Discover work that helps you demonstrate your capabilities and move forward.</p>
            <Button asChild size="lg" className="mt-6 self-start bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/get-started" search={{ as: "talent" }}>Find Opportunities<ArrowRight /></Link>
            </Button>
          </div>
          <div className="flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="type-overline text-muted-foreground">For founders & organisations</p>
            <p className="mt-3 font-display text-xl font-bold leading-snug">Find people whose capabilities can help turn your plans into progress.</p>
            <Button asChild size="lg" className="mt-6 self-start">
              <Link to="/get-started" search={{ as: "organisation" }}>Find Contributors<ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function LandingFooter() {
  const links = [
    ["#how-it-works", "How It Works"],
    ["#talent", "For Talent"],
    ["#organisations", "For Organisations"],
    ["#about", "About"],
  ];
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">Opportunities built around what people can contribute — for talent and the teams who need them.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map(([h, l]) => <li key={h}><a href={h} className="text-muted-foreground hover:text-foreground">{l}</a></li>)}
            <li><Link to="/sign-in" className="text-muted-foreground hover:text-foreground">Sign In</Link></li>
          </ul>
        </nav>
      </Container>
      <Container className="type-small border-t border-border py-5 text-muted-foreground">© {new Date().getFullYear()} Foundareer. Prototype — examples shown are illustrative.</Container>
    </footer>
  );
}
