import { Home, Compass, MessageSquare, User, Search, Bell, Plus, LayoutGrid, Users, X } from "lucide-react";
import { Section, Group } from "./section";
import { Button } from "@/components/ui/button";

function Frame({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-lg border border-border-strong bg-background shadow-md">{children}</div>
      <figcaption className="type-small mt-2 text-muted-foreground">{label}</figcaption>
    </figure>
  );
}
const Bar = ({ w = "w-full", h = "h-2", tone = "bg-border" }: { w?: string; h?: string; tone?: string }) => <div className={`${h} ${w} rounded-sm ${tone}`} />;
const Logo = () => <span className="font-display text-sm font-extrabold tracking-tight">foundareer<span className="text-accent-ink">.</span></span>;

export function LayoutsSection() {
  return (
    <Section id="layouts" index="04 — Layouts" title="Layout concepts" intro="Structural wireframes for the five application areas, plus desktop and mobile navigation. Routes remain flexible.">
      <Group title="Navigation" note="Top bar on desktop, bottom bar on phones.">
        <div className="space-y-6">
          <Frame label="Desktop header — logo, primary areas, search, notifications, profile">
            <div className="flex items-center gap-6 border-b border-border bg-card px-5 py-3">
              <Logo />
              <nav className="hidden items-center gap-1 text-sm md:flex">
                {["Home", "Needs", "Connections", "Messages"].map((n, i) => (
                  <span key={n} className={`rounded-md px-3 py-1.5 ${i === 1 ? "bg-muted font-medium" : "text-muted-foreground"}`}>{n}</span>
                ))}
              </nav>
              <div className="ml-auto flex items-center gap-2">
                <div className="type-small hidden h-9 w-56 items-center gap-2 rounded-md border border-border px-3 text-muted-foreground lg:flex"><Search className="size-4" />Search</div>
                <Button size="icon" variant="ghost" aria-label="Notifications"><Bell /></Button>
                <div className="grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">AB</div>
              </div>
            </div>
          </Frame>
          <div className="flex flex-wrap gap-6">
            <Frame label="Mobile bottom navigation — 4 destinations, 56px targets" className="w-[300px]">
              <div className="flex h-56 flex-col">
                <div className="flex items-center justify-between border-b border-border px-4 py-3"><Logo /><Bell className="size-5" /></div>
                <div className="flex-1 space-y-2 p-4"><Bar w="w-2/3" h="h-3" tone="bg-border-strong" /><Bar /><Bar w="w-5/6" /></div>
                <nav className="grid grid-cols-4 border-t border-border bg-card">
                  {[[Home, "Home"], [Compass, "Explore"], [MessageSquare, "Messages"], [User, "Profile"]].map(([I, l], i) => {
                    const Icon = I as typeof Home;
                    return (
                      <div key={l as string} className={`relative flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] ${i === 0 ? "font-semibold" : "text-muted-foreground"}`}>
                        {i === 0 && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-accent" />}
                        <Icon className="size-5" strokeWidth={i === 0 ? 2.25 : 1.75} />{l as string}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </Frame>
          </div>
        </div>
      </Group>

      <Group title="Application areas">
        <div className="grid gap-6 md:grid-cols-2">
          <Frame label="1 · Marketing — editorial hero, constrained width">
            <div className="h-52 p-5">
              <div className="flex justify-between"><Logo /><div className="h-6 w-16 rounded-md bg-primary" /></div>
              <div className="mt-8 max-w-[70%] space-y-2"><Bar h="h-4" tone="bg-foreground" /><Bar h="h-4" w="w-3/4" tone="bg-foreground" /><Bar w="w-1/2" /></div>
              <div className="mt-6 grid grid-cols-3 gap-2"><Bar h="h-10" tone="bg-muted" /><Bar h="h-10" tone="bg-muted" /><Bar h="h-10" tone="bg-muted" /></div>
            </div>
          </Frame>
          <Frame label="2 · Authentication — split, form left, quiet brand panel right">
            <div className="grid h-52 grid-cols-2">
              <div className="flex flex-col justify-center gap-2 p-5"><Logo /><Bar h="h-3" w="w-2/3" tone="bg-foreground" /><Bar h="h-6" /><Bar h="h-6" /><Bar h="h-6" tone="bg-primary" /></div>
              <div className="dot-grid bg-muted" />
            </div>
          </Frame>
          <Frame label="3 · Talent app — top nav, content + context rail">
            <div className="h-52">
              <div className="flex items-center gap-3 border-b border-border px-4 py-2.5"><Logo /><Bar w="w-24" /></div>
              <div className="grid grid-cols-[1fr_80px] gap-3 p-4"><div className="space-y-2"><Bar h="h-14" tone="bg-muted" /><Bar h="h-14" tone="bg-muted" /><Bar h="h-8" tone="bg-muted" /></div><div className="space-y-2"><Bar h="h-20" tone="bg-accent-soft" /><Bar h="h-10" tone="bg-muted" /></div></div>
            </div>
          </Frame>
          <Frame label="4 · Organisation app — side navigation for dense management">
            <div className="grid h-52 grid-cols-[56px_1fr]">
              <div className="flex flex-col items-center gap-3 border-r border-border bg-card py-3">
                <div className="size-6 rounded-md bg-primary" /><LayoutGrid className="size-4" /><Users className="size-4 text-muted-foreground" /><MessageSquare className="size-4 text-muted-foreground" />
              </div>
              <div className="p-4"><div className="flex justify-between"><Bar w="w-1/3" h="h-3" tone="bg-foreground" /><div className="flex h-6 items-center gap-1 rounded-md bg-primary px-2 text-[10px] text-primary-foreground"><Plus className="size-3" />Need</div></div><div className="mt-4 space-y-1.5">{[0, 1, 2, 3].map((i) => <Bar key={i} h="h-6" tone="bg-muted" />)}</div></div>
            </div>
          </Frame>
          <Frame label="5 · Focused workflow — no nav, progress, single column, sticky actions" className="md:col-span-2">
            <div className="flex h-52 flex-col">
              <div className="flex items-center justify-between border-b border-border px-5 py-3"><X className="size-4" /><span className="type-small text-muted-foreground">Step 2 of 4</span><span className="w-4" /></div>
              <div className="h-0.5 bg-border"><div className="h-full w-1/2 bg-foreground" /></div>
              <div className="mx-auto w-full max-w-sm flex-1 space-y-2 p-5"><Bar h="h-3" w="w-1/2" tone="bg-foreground" /><Bar h="h-8" /><Bar h="h-8" /></div>
              <div className="flex justify-end gap-2 border-t border-border px-5 py-3"><div className="h-7 w-16 rounded-md border border-border-strong" /><div className="h-7 w-20 rounded-md bg-primary" /></div>
            </div>
          </Frame>
        </div>
      </Group>
    </Section>
  );
}
