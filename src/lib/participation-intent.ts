export const PARTICIPATION_INTENT_STORAGE_KEY = "areer-participation-intent";

export const participationIntentOptions = [
  {
    value: "opportunities",
    label: "Find Opportunities",
    description:
      "Showcase your capabilities, discover opportunities that match your interests, and build experience through meaningful contributions.",
  },
  {
    value: "collaborate",
    label: "Build With Others",
    description:
      "Bring your ideas, projects, or initiatives to Areer and connect with people who can help you make progress.",
  },
  {
    value: "both",
    label: "Both",
    description:
      "Discover opportunities for yourself while also finding people to collaborate with on your own projects.",
  },
] as const;

export type ParticipationIntent = (typeof participationIntentOptions)[number]["value"];

export function isParticipationIntent(value: unknown): value is ParticipationIntent {
  return participationIntentOptions.some((option) => option.value === value);
}