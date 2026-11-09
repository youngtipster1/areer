export const PARTICIPATION_INTENT_STORAGE_KEY = "areer-participation-intent";

export const participationIntentOptions = [
  {
    value: "find_opportunities",
    label: "Find Opportunities",
    description: "Discover projects, initiatives, and opportunities where your capabilities and interests can make a difference.",
    points: [
      "Explore relevant opportunities.",
      "Demonstrate what you can contribute.",
      "Build experience and evidence of your work.",
    ],
  },
  {
    value: "build_with_others",
    label: "Build With Others",
    description: "Bring your ideas, projects, or initiatives to life by finding people with the capabilities to contribute.",
    points: [
      "Find people with relevant capabilities.",
      "Build teams around ideas and projects.",
      "Work with people who share your interests.",
    ],
  },
  {
    value: "both",
    label: "Both",
    description: "Explore opportunities while also building projects and collaborating with others.",
    points: [
      "Discover opportunities.",
      "Find collaborators.",
      "Contribute to and build meaningful projects.",
    ],
  },
] as const;

export type ParticipationIntent = (typeof participationIntentOptions)[number]["value"];
export type OnboardingDestination = "career-identity" | "founder";

export function getOnboardingDestination(intent: ParticipationIntent): OnboardingDestination {
  return intent === "build_with_others" ? "founder" : "career-identity";
}

export function isParticipationIntent(value: unknown): value is ParticipationIntent {
  return participationIntentOptions.some((option) => option.value === value);
}

export function validateParticipationIntentSearch(search: Record<string, unknown>): {
  intent: ParticipationIntent | null;
} {
  return { intent: isParticipationIntent(search["intent"]) ? search["intent"] : null };
}