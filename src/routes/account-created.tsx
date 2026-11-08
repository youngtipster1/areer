import { createFileRoute } from "@tanstack/react-router";
import { AccountCreatedPage } from "@/components/auth/auth-pages";

export const Route = createFileRoute("/account-created")({
  head: () => ({
    meta: [
      { title: "Account created — Areer" },
      { name: "description", content: "Your Areer prototype account is ready for onboarding." },
      { property: "og:title", content: "Account created — Areer" },
      { property: "og:description", content: "Your Areer prototype account is ready for onboarding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccountCreatedPage,
});