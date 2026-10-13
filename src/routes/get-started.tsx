import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/landing/placeholder-page";

type Search = { as?: "talent" | "organisation" | undefined };

export const Route = createFileRoute("/get-started")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const v = s["as"];
    return { as: v === "talent" || v === "organisation" ? v : undefined };
  },
  head: () => ({
    meta: [
      { title: "Get started — Foundareer" },
      { name: "description", content: "Start on Foundareer as talent or as a founder building a team." },
      { property: "og:title", content: "Get started — Foundareer" },
      { property: "og:description", content: "Start on Foundareer as talent or as a founder." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GetStarted,
});

function GetStarted() {
  const { as } = Route.useSearch();
  const title =
    as === "talent" ? "Talent onboarding is coming soon." : as === "organisation" ? "Organisation onboarding is coming soon." : "Onboarding is coming soon.";
  return (
    <PlaceholderPage overline="Get started" title={title} body="Sign-up flows will be designed after the landing page is reviewed and approved." />
  );
}
