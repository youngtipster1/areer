import {
  BadgeCheck, MapPin, Clock, Wallet, FileText, Link2, ExternalLink, Compass, Target, Sparkles,
  CheckCircle2, CircleDashed, AlertCircle, Users, Building2, ArrowUpRight, Briefcase, Lightbulb,
} from "lucide-react";
import { Section, Group } from "./section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-border bg-card p-5 ${className}`}>{children}</div>;
}
function Label({ children }: { children: React.ReactNode }) {
  return <p className="type-overline mb-3 text-muted-foreground">{children}</p>;
}
function Cap({ name, level }: { name: string; level?: "required" | "helpful" | "met" | "gap" }) {
  const map = {
    required: "border-foreground",
    helpful: "border-dashed border-border-strong text-muted-foreground",
    met: "border-transparent bg-accent-soft text-accent-ink",
    gap: "border-transparent bg-warning-soft text-warning",
  } as const;
  return (
    <span className={`type-small inline-flex h-7 items-center gap-1.5 rounded-sm border px-2 font-medium ${map[level ?? "required"]}`}>
      {level === "met" && <CheckCircle2 className="size-3.5" />}
      {level === "gap" && <AlertCircle className="size-3.5" />}
      {name}
    </span>
  );
}

export function DomainSection() {
  return (
    <Section id="patterns" index="03 — Patterns" title="Foundareer patterns" intro="Component concepts specific to the platform: identity built on capability and evidence, needs built on contribution.">
      <Group title="Career identity" note="Who someone is becoming, not just a CV.">
        <Card className="p-0">
          <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_260px]">
            <div className="min-w-0">
              <div className="flex items-start gap-4">
                <Avatar className="size-16 shrink-0"><AvatarFallback className="bg-primary font-display text-lg font-bold text-primary-foreground">AB</AvatarFallback></Avatar>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="type-h2">Amina Bello</h3>
                    <BadgeCheck className="size-5 text-accent-ink" aria-label="Verified" />
                  </div>
                  <p className="text-muted-foreground">Product designer moving into service design</p>
                  <div className="type-small mt-2 flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />Lagos, NG</span>
                    <span className="inline-flex items-center gap-1"><Briefcase className="size-3.5" />Corps member · NYSC 2026</span>
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-prose">I design clear, accessible tools for people who are underserved by technology. Looking to contribute to early-stage teams in health and education.</p>
            </div>
            <div className="space-y-4 rounded-md bg-muted p-4">
              <div>
                <p className="type-overline text-muted-foreground">Availability</p>
                <p className="mt-1 inline-flex items-center gap-2 font-medium"><span className="size-2 rounded-full bg-success" />Available from Nov</p>
              </div>
              <div>
                <p className="type-overline text-muted-foreground">Commitment</p>
                <p className="mt-1 font-medium">15–20 hrs / week · Remote or hybrid</p>
              </div>
              <div>
                <p className="type-overline text-muted-foreground">Direction</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5"><Badge variant="secondary">Health</Badge><Badge variant="secondary">Education</Badge><Badge variant="secondary">Civic tech</Badge></div>
              </div>
            </div>
          </div>
        </Card>
      </Group>

      <Group title="Capabilities & evidence" note="Capabilities group into areas; evidence backs them.">
        <div className="grid gap-3 md:grid-cols-2">
          <Card>
            <Label>Capability group</Label>
            <div className="flex items-center justify-between gap-3">
              <h4 className="type-h3">Product design</h4>
              <span className="type-small text-muted-foreground">5 capabilities</span>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {[
                ["User research", 3, "Strong"],
                ["Interaction design", 4, "Strong"],
                ["Prototyping", 2, "Developing"],
              ].map(([n, ev, lvl]) => (
                <li key={n as string} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="min-w-0 truncate font-medium">{n}</span>
                  <span className="type-small inline-flex shrink-0 items-center gap-3 text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><FileText className="size-3.5" />{ev}</span>
                    <span className={lvl === "Strong" ? "text-foreground" : ""}>{lvl}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="space-y-3">
            {[
              { I: FileText, t: "Clinic booking redesign", s: "Case study · 2025", caps: ["User research", "Interaction design"] },
              { I: Link2, t: "Open-source design tokens", s: "GitHub · Contributor", caps: ["Design systems"] },
            ].map(({ I, t, s, caps }) => (
              <Card key={t} className="flex gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-md bg-muted"><I className="size-5" /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate font-medium">{t}</p>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                  </div>
                  <p className="type-small text-muted-foreground">{s}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">{caps.map((c) => <Badge key={c} variant="secondary">{c}</Badge>)}</div>
                </div>
              </Card>
            ))}
            <Card>
              <Label>Experience</Label>
              <ol className="space-y-3 border-l border-border pl-4">
                <li className="relative"><span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-card bg-foreground" /><p className="font-medium">Design intern · Paystack</p><p className="type-small text-muted-foreground">2024 – 2025 · Checkout flows</p></li>
                <li className="relative"><span className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-card bg-border-strong" /><p className="font-medium">Volunteer · Code for Africa</p><p className="type-small text-muted-foreground">2023 · Data storytelling</p></li>
              </ol>
            </Card>
          </div>
        </div>
      </Group>

      <Group title="Initiatives & needs" note="An initiative contains needs. A need describes a contribution.">
        <div className="grid gap-3 lg:grid-cols-2">
          <Card>
            <div className="flex items-start gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Lightbulb className="size-5" /></div>
              <div className="min-w-0">
                <p className="type-overline text-muted-foreground">Initiative</p>
                <h4 className="type-h3">Rural maternal health app</h4>
                <p className="type-small inline-flex items-center gap-1 text-muted-foreground">by Kora Labs <BadgeCheck className="size-3.5 text-accent-ink" /></p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">Helping community health workers track pregnancies offline across 40 clinics in Kaduna.</p>
            <div className="type-small mt-4 flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Target className="size-3.5" />Pilot stage</span>
              <span className="inline-flex items-center gap-1"><Users className="size-3.5" />4 on team</span>
              <span className="inline-flex items-center gap-1"><Briefcase className="size-3.5" />3 open needs</span>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="type-overline text-muted-foreground">Need</p>
                <h4 className="type-h3">Design offline-first patient records</h4>
              </div>
              <Badge variant="accent" className="shrink-0">Strong fit</Badge>
            </div>
            <div className="mt-4 space-y-3">
              <div><p className="type-small mb-1.5 text-muted-foreground">Required</p><div className="flex flex-wrap gap-1.5"><Cap name="Interaction design" level="met" /><Cap name="User research" level="met" /><Cap name="Mobile UI" level="gap" /></div></div>
              <div><p className="type-small mb-1.5 text-muted-foreground">Helpful</p><div className="flex flex-wrap gap-1.5"><Cap name="Healthcare" level="helpful" /><Cap name="Hausa" level="helpful" /></div></div>
            </div>
            <div className="type-small mt-5 grid grid-cols-1 gap-2 border-t border-border pt-4 sm:grid-cols-3">
              <span className="inline-flex items-center gap-1.5"><Wallet className="size-3.5 text-muted-foreground" />₦250k / month</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-muted-foreground" />15 hrs / wk · 3 mo</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-muted-foreground" />Remote</span>
            </div>
          </Card>
        </div>
      </Group>

      <Group title="Fit & readiness" note="Explain alignment honestly, including gaps.">
        <div className="grid gap-3 md:grid-cols-2">
          <Card>
            <div className="flex items-center justify-between">
              <h4 className="type-h3">Why you fit</h4>
              <span className="font-display text-2xl font-bold">4<span className="text-muted-foreground">/5</span></span>
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" /><p className="type-small"><span className="font-medium">Interaction design</span> — backed by 2 case studies.</p></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" /><p className="type-small"><span className="font-medium">User research</span> — clinic research aligns directly.</p></li>
              <li className="flex gap-3"><CircleDashed className="mt-0.5 size-4 shrink-0 text-warning" /><p className="type-small"><span className="font-medium">Mobile UI</span> — claimed but no evidence yet.</p></li>
            </ul>
          </Card>
          <Card>
            <h4 className="type-h3 inline-flex items-center gap-2"><Compass className="size-4" />Readiness</h4>
            <div className="mt-4 space-y-1.5">
              <div className="type-small flex justify-between"><span>Ready to express interest</span><span className="font-medium">80%</span></div>
              <Progress value={80} className="h-1.5" />
            </div>
            <div className="mt-4 rounded-md bg-accent-soft p-3">
              <p className="type-small inline-flex items-start gap-2 text-foreground"><Sparkles className="mt-0.5 size-3.5 shrink-0 text-accent-ink" />Add one mobile project to close your only gap.</p>
            </div>
            <Button variant="outline" size="sm" className="mt-4">Add evidence</Button>
          </Card>
        </div>
      </Group>

      <Group title="Organisations & people" note="Verification is quiet but unmistakable.">
        <div className="grid gap-3 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-md border border-border bg-muted font-display font-bold">K</div>
              <div className="min-w-0">
                <p className="inline-flex items-center gap-1.5 font-medium">Kora Labs <BadgeCheck className="size-4 text-accent-ink" /></p>
                <p className="type-small text-muted-foreground">Health tech · Abuja</p>
              </div>
            </div>
            <div className="type-small mt-4 flex gap-4 text-muted-foreground"><span className="inline-flex items-center gap-1"><Building2 className="size-3.5" />Verified CAC</span><span>12 people</span></div>
          </Card>
          <Card>
            <Label>Team</Label>
            <ul className="space-y-3">
              {[["TK", "Tunde Kalu", "Founder · CEO"], ["OM", "Ola Musa", "Engineering lead"]].map(([i, n, r]) => (
                <li key={n} className="flex items-center gap-3">
                  <Avatar className="size-9 shrink-0"><AvatarFallback className="bg-muted text-xs font-semibold">{i}</AvatarFallback></Avatar>
                  <div className="min-w-0"><p className="truncate text-sm font-medium">{n}</p><p className="type-small truncate text-muted-foreground">{r}</p></div>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <Label>Connection</Label>
            <div className="flex items-center gap-3">
              <Avatar className="size-9 shrink-0"><AvatarFallback className="bg-muted text-xs font-semibold">TK</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">Tunde Kalu</p><p className="type-small text-muted-foreground">Patient records need</p></div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5"><Badge variant="success">Connected</Badge><Badge variant="warning">Awaiting reply</Badge><Badge variant="secondary">Interest sent</Badge></div>
            <Button size="sm" className="mt-4 w-full">Message <ArrowUpRight /></Button>
          </Card>
        </div>
      </Group>

      <Group title="Conversations" note="Calm bubbles; cyan marks unread only.">
        <div className="grid gap-3 md:grid-cols-[280px_minmax(0,1fr)]">
          <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {[["TK", "Tunde Kalu", "Would you be open to a short call?", "2m", true], ["AO", "Ada Obi", "Thanks for sharing the case study", "1d", false]].map(([i, n, m, t, u]) => (
              <div key={n as string} className={`flex gap-3 p-4 ${u ? "bg-muted" : ""}`}>
                <Avatar className="size-9 shrink-0"><AvatarFallback className="bg-background text-xs font-semibold">{i}</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-2"><p className="truncate text-sm font-medium">{n}</p><span className="type-small shrink-0 text-muted-foreground">{t}</span></div>
                  <p className={`type-small truncate ${u ? "text-foreground" : "text-muted-foreground"}`}>{m}</p>
                </div>
                {u && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />}
              </div>
            ))}
          </div>
          <div className="space-y-3 rounded-lg border border-border bg-card p-4 sm:p-5">
            <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Hi Amina — your clinic booking work is very relevant to us.</div>
            <div className="ml-auto max-w-[80%] rounded-lg rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">Thank you! I'd love to hear more about the pilot.</div>
            <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Would you be open to a short call this week?</div>
            <p className="type-small text-center text-muted-foreground">Seen · 10:42</p>
          </div>
        </div>
      </Group>
    </Section>
  );
}
