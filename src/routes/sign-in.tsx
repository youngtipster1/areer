import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/landing/placeholder-page";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in — Foundareer" },
      { name: "description", content: "Sign in to Foundareer. This screen is in design." },
      { property: "og:title", content: "Sign in — Foundareer" },
      { property: "og:description", content: "Sign in to Foundareer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PlaceholderPage overline="Sign in" title="Sign in is coming soon." body="Accounts are not part of this prototype yet. This screen will be designed in a later phase." />
  ),
});
