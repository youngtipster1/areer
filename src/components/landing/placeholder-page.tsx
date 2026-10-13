import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlaceholderPage({ overline, title, body }: { overline: string; title: string; body: string }) {
  return (
    <main className="flex min-h-screen items-center bg-background px-4 sm:px-6">
      <div className="mx-auto w-full max-w-xl">
        <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
          foundareer<span className="text-accent-ink">.</span>
        </Link>
        <p className="type-overline mt-16 text-muted-foreground">{overline} · Prototype placeholder</p>
        <h1 className="type-h1 mt-3">{title}</h1>
        <p className="mt-4 text-muted-foreground">{body}</p>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/"><ArrowLeft />Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
