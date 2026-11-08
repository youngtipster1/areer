import { createFileRoute } from "@tanstack/react-router";
import { SignUpPage } from "@/components/auth/auth-pages";

export const Route = createFileRoute("/sign-up")({
  head: () => ({
    meta: [
      { title: "Create an account — Areer" },
      { name: "description", content: "Create an Areer account and get started." },
      { property: "og:title", content: "Create an account — Areer" },
      { property: "og:description", content: "Create an Areer account and get started." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignUpPage,
});