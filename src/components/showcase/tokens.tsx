import { Bell, Search, Check } from "lucide-react";
import { Section, Group, Specimen } from "./section";

const brand = [
  { name: "Ink", role: "Primary · text, structure", hex: "#333333", cls: "bg-brand-ink" },
  { name: "Paper", role: "Secondary · surfaces", hex: "#FAF9F6", cls: "bg-brand-paper" },
  { name: "Cyan", role: "Accent · emphasis, active", hex: "#7DF9FF", cls: "bg-brand-cyan" },
];
const neutrals = ["bg-neutral-50", "bg-neutral-100", "bg-neutral-200", "bg-neutral-300", "bg-neutral-500", "bg-neutral-700", "bg-neutral-900"];
const neutralLabels = ["50", "100", "200", "300", "500", "700", "900"];
const semantic = [
  { name: "Success", fg: "bg-success", soft: "bg-success-soft" },
  { name: "Warning", fg: "bg-warning", soft: "bg-warning-soft" },
  { name: "Error", fg: "bg-destructive", soft: "bg-destructive-soft" },
  { name: "Accent", fg: "bg-accent-ink", soft: "bg-accent-soft" },
];
const spacing = [1, 2, 3, 4, 6, 8, 10, 12, 16];
const type = [
  { cls: "type-display", label: "Display · Manrope 800", spec: "36 → 60 / 1.05", text: "Build what matters" },
  { cls: "type-h1", label: "H1 · Manrope 700", spec: "28 → 40 / 1.15", text: "Contribute to real initiatives" },
  { cls: "type-h2", label: "H2 · Manrope 700", spec: "22 → 28 / 1.25", text: "Your career identity" },
  { cls: "type-h3", label: "H3 · Manrope 600", spec: "18 / 1.35", text: "Capability groups" },
  { cls: "type-body-lg", label: "Body large · Inter 400", spec: "17 / 1.65", text: "Foundareer helps founders find people who can genuinely move their work forward." },
  { cls: "", label: "Body · Inter 400", spec: "15 / 1.6", text: "Show what you can do, the evidence behind it, and where you want to grow." },
  { cls: "type-small text-muted-foreground", label: "Small · Inter 400", spec: "13 / 1.5", text: "Helper text, metadata and timestamps." },
  { cls: "type-overline text-muted-foreground", label: "Overline · Inter 600", spec: "11 / +12%", text: "Section label" },
];

export function TokensSection() {
  return (
    <Section id="tokens" index="01 — Tokens" title="Design tokens" intro="The fixed brand palette with a warm neutral ramp, restrained semantic colours, and a 4px spacing rhythm.">
      <Group title="Brand colours" note="Unchanged brand identity.">
        <div className="grid gap-3 sm:grid-cols-3">
          {brand.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className={`h-24 border-b border-border ${c.cls}`} />
              <div className="p-4">
                <p className="font-display font-semibold">{c.name}</p>
                <p className="type-small text-muted-foreground">{c.role}</p>
                <p className="type-small mt-2 font-mono">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Group>

      <Group title="Neutrals" note="Warm greys between Ink and Paper.">
        <div className="grid grid-cols-7 overflow-hidden rounded-lg border border-border">
          {neutrals.map((n, i) => (
            <div key={n}>
              <div className={`h-16 ${n}`} />
              <p className="type-small bg-card py-2 text-center text-muted-foreground">{neutralLabels[i]}</p>
            </div>
          ))}
        </div>
      </Group>

      <Group title="Semantic" note="Strong + soft pair per state.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {semantic.map((s) => (
            <div key={s.name} className="rounded-lg border border-border bg-card p-3">
              <div className="flex gap-1.5">
                <div className={`h-10 flex-1 rounded-sm ${s.fg}`} />
                <div className={`h-10 flex-1 rounded-sm ${s.soft}`} />
              </div>
              <p className="type-small mt-2 font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </Group>

      <Group title="Typography" note="Manrope for headings, Inter for everything else. Fluid on mobile.">
        <div className="divide-y divide-border rounded-lg border border-border bg-card">
          {type.map((t) => (
            <div key={t.label} className="grid gap-2 p-5 md:grid-cols-[200px_minmax(0,1fr)] md:items-baseline">
              <div>
                <p className="type-small font-medium">{t.label}</p>
                <p className="type-small font-mono text-muted-foreground">{t.spec}</p>
              </div>
              <p className={`min-w-0 ${t.cls}`}>{t.text}</p>
            </div>
          ))}
        </div>
      </Group>

      <Group title="Spacing" note="4px base unit.">
        <Specimen>
          <div className="space-y-2">
            {spacing.map((s) => (
              <div key={s} className="flex items-center gap-4">
                <span className="type-small w-16 shrink-0 font-mono text-muted-foreground">{s * 4}px</span>
                <div className="h-3 rounded-sm bg-primary" style={{ width: s * 4 * 2 }} />
              </div>
            ))}
          </div>
        </Specimen>
      </Group>

      <Group title="Radius, border, elevation" note="Modest radii. Borders before shadows.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["rounded-sm", "4px · badges"],
            ["rounded-md", "6px · inputs, buttons"],
            ["rounded-lg", "8px · cards"],
            ["rounded-xl", "12px · dialogs"],
          ].map(([r, l]) => (
            <div key={r} className={`border border-border-strong bg-card p-4 ${r}`}>
              <p className="type-small font-medium">{r}</p>
              <p className="type-small text-muted-foreground">{l}</p>
            </div>
          ))}
          {[
            ["shadow-sm", "Level 1 · resting"],
            ["shadow-md", "Level 2 · raised"],
            ["shadow-lg", "Level 3 · overlays"],
          ].map(([s, l]) => (
            <div key={s} className={`rounded-lg border border-border bg-card p-4 ${s}`}>
              <p className="type-small font-medium">{s}</p>
              <p className="type-small text-muted-foreground">{l}</p>
            </div>
          ))}
          <div className="rounded-lg border-2 border-foreground bg-card p-4">
            <p className="type-small font-medium">Border 1 / 2px</p>
            <p className="type-small text-muted-foreground">2px for selection only</p>
          </div>
        </div>
      </Group>

      <Group title="Icons & breakpoints" note="Lucide, 1.75 stroke.">
        <div className="grid gap-3 md:grid-cols-2">
          <Specimen label="Icon sizes">
            <div className="flex items-end gap-6">
              {[14, 16, 20, 24].map((s) => (
                <div key={s} className="text-center">
                  <Bell size={s} strokeWidth={1.75} className="mx-auto" />
                  <p className="type-small mt-2 text-muted-foreground">{s}</p>
                </div>
              ))}
              <Search size={20} strokeWidth={1.75} />
              <Check size={20} strokeWidth={1.75} />
            </div>
          </Specimen>
          <Specimen label="Breakpoints">
            <ul className="type-small space-y-1.5 font-mono">
              <li className="flex justify-between"><span>base</span><span className="text-muted-foreground">0 · phone</span></li>
              <li className="flex justify-between"><span>sm</span><span className="text-muted-foreground">640 · large phone</span></li>
              <li className="flex justify-between"><span>md</span><span className="text-muted-foreground">768 · tablet</span></li>
              <li className="flex justify-between"><span>lg</span><span className="text-muted-foreground">1024 · laptop</span></li>
              <li className="flex justify-between"><span>xl</span><span className="text-muted-foreground">1280 · desktop (max 1200 content)</span></li>
            </ul>
          </Specimen>
        </div>
      </Group>
    </Section>
  );
}
