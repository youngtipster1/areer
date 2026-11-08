import { createFileRoute } from "@tanstack/react-router";
import { SignInPage } from "@/components/auth/auth-pages";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign in — Areer" },
      { name: "description", content: "Sign in to your Areer account." },
      { property: "og:title", content: "Sign in — Areer" },
      { property: "og:description", content: "Sign in to your Areer account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignInPage,
});
