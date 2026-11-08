import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordPage } from "@/components/auth/auth-pages";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Password recovery — Areer" },
      { name: "description", content: "Start password recovery for your Areer account." },
      { property: "og:title", content: "Password recovery — Areer" },
      { property: "og:description", content: "Start password recovery for your Areer account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ForgotPasswordPage,
});