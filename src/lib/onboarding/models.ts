import type { ParticipationIntent } from "@/lib/participation-intent";

export type AnswerValue = string | string[];
export type Answers = Record<string, AnswerValue>;

export type CapabilityProfile = {
  id: string;
  name: string;
  category: string;
  proficiency: string;
  developedThrough: string[];
  application: string;
  evidenceStatus: string;
};

export type EvidenceItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  contribution: string;
  capabilities: string[];
  date: string;
  link: string;
  attachmentName: string;
};

export type NeedProfile = {
  title: string;
  description: string;
  reason: string;
  outcome: string;
  responsibilities: string[];
  requiredCapabilities: string[];
  helpfulCapabilities: string[];
  experienceContext: string;
  ownership: string;
  timeCommitment: string;
  duration: string;
  arrangement: string;
  location: string;
  compensation: string;
  expectations: string;
};

export type TalentProfile = {
  context: Answers;
  identity: Answers;
  capabilities: CapabilityProfile[];
  evidence: EvidenceItem[];
  direction: Answers;
  preferences: Answers;
  availability: Answers;
  readiness: Answers;
  completed: boolean;
};

export type BuilderProfile = {
  context: Answers;
  identity: Answers;
  initiative: Answers;
  need: NeedProfile;
  expectations: Answers;
  completed: boolean;
};

export type OnboardingDraft = {
  intent: ParticipationIntent;
  activePath: "talent" | "builder";
  talent: TalentProfile;
  builder: BuilderProfile;
  updatedAt: string;
};

export const ONBOARDING_DRAFT_STORAGE_KEY = "areer-onboarding-draft-v1";

export function emptyNeedProfile(): NeedProfile {
  return {
    title: "", description: "", reason: "", outcome: "", responsibilities: [],
    requiredCapabilities: [], helpfulCapabilities: [], experienceContext: "",
    ownership: "", timeCommitment: "", duration: "", arrangement: "",
    location: "", compensation: "", expectations: "",
  };
}

export function createOnboardingDraft(intent: ParticipationIntent): OnboardingDraft {
  return {
    intent,
    activePath: intent === "build_with_others" ? "builder" : "talent",
    talent: {
      context: {}, identity: {}, capabilities: [], evidence: [], direction: {},
      preferences: {}, availability: {}, readiness: {}, completed: false,
    },
    builder: {
      context: {}, identity: {}, initiative: {}, need: emptyNeedProfile(),
      expectations: {}, completed: false,
    },
    updatedAt: new Date().toISOString(),
  };
}

export function parseOnboardingDraft(raw: string | null): OnboardingDraft | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    const draft = value as Partial<OnboardingDraft>;
    if (!draft.intent || !["find_opportunities", "build_with_others", "both"].includes(draft.intent)) return null;
    if (!draft.talent || !draft.builder || typeof draft.talent !== "object" || typeof draft.builder !== "object") return null;
    return { ...createOnboardingDraft(draft.intent), ...draft } as OnboardingDraft;
  } catch {
    return null;
  }
}

export function getJourneyAfterTalent(intent: ParticipationIntent): "builder" | "talent-complete" {
  return intent === "both" ? "builder" : "talent-complete";
}