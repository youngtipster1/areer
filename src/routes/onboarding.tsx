import { createFileRoute } from "@tanstack/react-router";
import { OnboardingIntentPage } from "@/components/auth/auth-pages";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Choose your starting point — Areer" },
      { name: "description", content: "Choose a changeable starting preference for your Areer experience." },
      { property: "og:title", content: "Choose your starting point — Areer" },
      { property: "og:description", content: "Choose a changeable starting preference for your Areer experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OnboardingIntentPage,
});