import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const navLinks = [
  ["how-it-works", "How It Works"],
  ["talent", "For Talent"],
  ["organisations", "For Organisations"],
  ["about", "About"],
] as const;

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-xl font-extrabold tracking-tight", className)}>
      Areer<span className="text-accent-ink">.</span>
    </span>
  );
}

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/90 backdrop-blur transition-colors",
        scrolled || open ? "border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-4 sm:px-6">
        <Link to="/" aria-label="Areer home" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="mx-auto hidden items-center gap-1 lg:flex">
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button asChild variant="ghost" size="sm" className="hidden h-9 sm:inline-flex">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="h-9 px-4">
            <Link to="/get-started">Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-4 py-3 sm:px-6">
            {navLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="flex h-12 items-center border-b border-border font-display text-lg font-semibold">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/sign-in" onClick={() => setOpen(false)} className="flex h-12 items-center font-display text-lg font-semibold text-muted-foreground">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
