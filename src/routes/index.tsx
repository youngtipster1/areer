import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TokensSection } from "@/components/showcase/tokens";
import { ComponentsSection } from "@/components/showcase/components";
import { DomainSection } from "@/components/showcase/domain";
import { LayoutsSection } from "@/components/showcase/layouts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foundareer — Visual Design Foundation" },
      { name: "description", content: "Design tokens, components, patterns and layouts for the Foundareer interface." },
      { property: "og:title", content: "Foundareer — Visual Design Foundation" },
      { property: "og:description", content: "The reference design system for the Foundareer platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Showcase,
});

const nav = [
  ["tokens", "Tokens"],
  ["components", "Components"],
  ["patterns", "Patterns"],
  ["layouts", "Layouts"],
];

function Showcase() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:px-6">
          <span className="truncate font-display text-lg font-extrabold tracking-tight">foundareer<span className="text-accent-ink">.</span> <span className="type-small font-sans font-medium text-muted-foreground">Design system</span></span>
          <nav className="ml-auto hidden items-center gap-1 text-sm md:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{l}</a>
            ))}
          </nav>
          <Button variant="outline" size="sm" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
            {dark ? <Sun /> : <Moon />}{dark ? "Light" : "Dark"}
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="py-16 sm:py-24">
          <p className="type-overline text-muted-foreground">FND-DESIGN-001 · Phase 1</p>
          <h1 className="type-display mt-4 max-w-4xl">
            A visual language for <span className="accent-rule">meaningful contribution</span>.
          </h1>
          <p className="type-body-lg mt-6 max-w-2xl text-muted-foreground">
            Warm paper, confident ink, and a single electric accent. Structured, readable and human — built for capability, evidence and trustworthy connections.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              ["Ink carries hierarchy", "Strong text and structure. Primary actions are solid ink."],
              ["Paper keeps it warm", "Off-white surfaces, borders before shadows."],
              ["Cyan means something", "Focus, active and unread states — never decoration."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-5">
                <p className="font-display font-semibold">{t}</p>
                <p className="type-small mt-1 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <TokensSection />
        <ComponentsSection />
        <DomainSection />
        <LayoutsSection />
        <footer className="type-small border-t border-border py-10 text-muted-foreground">Foundareer visual foundation · reference for frontend implementation.</footer>
      </main>
    </div>
  );
}
