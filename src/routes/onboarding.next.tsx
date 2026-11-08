import { createFileRoute } from "@tanstack/react-router";
import { OnboardingDestinationPage } from "@/components/auth/auth-pages";
import { isParticipationIntent, type ParticipationIntent } from "@/lib/participation-intent";

export const Route = createFileRoute("/onboarding/next")({
  validateSearch: (search: Record<string, unknown>): { intent: ParticipationIntent | null } => ({
    intent: isParticipationIntent(search["intent"]) ? search["intent"] : null,
  }),
  head: () => ({
    meta: [
      { title: "Your next step — Areer" },
      { name: "description", content: "Continue your Areer experience from your selected starting preference." },
      { property: "og:title", content: "Your next step — Areer" },
      { property: "og:description", content: "Continue your Areer experience from your selected starting preference." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OnboardingNextPage,
});

function OnboardingNextPage() {
  const { intent } = Route.useSearch();
  return <OnboardingDestinationPage intent={intent} />;
}