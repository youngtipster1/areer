import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-14 sm:py-20">
      <div className="mb-10 grid gap-3 md:grid-cols-[180px_minmax(0,1fr)]">
        <p className="type-overline text-muted-foreground">{index}</p>
        <div className="min-w-0">
          <h2 className="type-h1">{title}</h2>
          {intro && <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p>}
        </div>
      </div>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

export function Group({
  title,
  note,
  children,
  className,
}: {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-[180px_minmax(0,1fr)]", className)}>
      <div>
        <h3 className="type-h3">{title}</h3>
        {note && <p className="type-small mt-1 text-muted-foreground">{note}</p>}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function Specimen({ label, children, className }: { label?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-5", className)}>
      {label && <p className="type-overline mb-4 text-muted-foreground">{label}</p>}
      {children}
    </div>
  );
}
