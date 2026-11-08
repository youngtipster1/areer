import { createFileRoute } from "@tanstack/react-router";
import { LandingNav } from "@/components/landing/nav";
import { Hero, Problem, TalentSection } from "@/components/landing/sections-a";
import { FounderSection, Opportunities, HowItWorks, Different, Closing, LandingFooter } from "@/components/landing/sections-b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areer — Find your place in the work that matters" },
      {
        name: "description",
        content: "Areer connects people with founders and organisations based on what they can contribute, what they want to achieve and what the work requires.",
      },
      { property: "og:title", content: "Areer — Find your place in the work that matters" },
      { property: "og:description", content: "Connecting capabilities and ambitions with founders who need people like you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <LandingNav />
      <main id="main">
        <Hero />
        <Problem />
        <TalentSection />
        <FounderSection />
        <Opportunities />
        <HowItWorks />
        <Different />
        <Closing />
      </main>
      <LandingFooter />
    </div>
  );
}
