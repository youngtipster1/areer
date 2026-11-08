import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SignUpPage } from "@/components/auth/auth-pages";
import { PARTICIPATION_INTENT_STORAGE_KEY, type ParticipationIntent } from "@/lib/participation-intent";

type Search = { as?: "talent" | "organisation" | undefined };

export const Route = createFileRoute("/get-started")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const v = s["as"];
    return { as: v === "talent" || v === "organisation" ? v : undefined };
  },
  head: () => ({
    meta: [
      { title: "Create your account — Areer" },
      { name: "description", content: "Create an Areer account and choose how you would like to participate." },
      { property: "og:title", content: "Create your account — Areer" },
      { property: "og:description", content: "Create an Areer account and choose how you would like to participate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GetStarted,
});

function GetStarted() {
  const { as } = Route.useSearch();
  useEffect(() => {
    const initialIntent: ParticipationIntent | null = as === "talent"
      ? "opportunities"
      : as === "organisation"
        ? "collaborate"
        : null;
    if (!initialIntent) return;
    try {
      window.localStorage.setItem(PARTICIPATION_INTENT_STORAGE_KEY, initialIntent);
    } catch {
      // The onboarding choice still works if browser storage is unavailable.
    }
  }, [as]);

  return <SignUpPage />;
}
