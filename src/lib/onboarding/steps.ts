export type Question = {
  key: string;
  label: string;
  kind: "text" | "textarea" | "single" | "multi" | "country";
  options?: string[];
  optional?: boolean;
  placeholder?: string;
  help?: string;
};

export type StepDefinition = { id: string; title: string; description: string; questions: Question[] };

const q = (key: string, label: string, kind: Question["kind"], options?: string[], extra: Partial<Question> = {}): Question => ({
  key,
  label,
  kind,
  ...(options ? { options } : {}),
  ...extra,
});

export const talentSteps: StepDefinition[] = [
  { id: "context", title: "Let's start with you.", description: "Tell us a little about yourself so we can understand your background and the opportunities that may be relevant to you.", questions: [
    q("fullName", "What is your full name?", "text"),
    q("situation", "What best describes your current situation?", "single", ["Student", "Recent graduate", "National service / corps member", "Early-career professional", "Experienced professional", "Freelancer / independent professional", "Founder / entrepreneur", "Career changer", "Other"]),
    q("field", "What field or area are you currently involved in?", "text", undefined, { placeholder: "e.g. technology, finance, design", help: "You can enter any field, not just a suggested list." }),
    q("country", "Where are you currently based? Country", "country"),
    q("city", "City or region", "text", undefined, { optional: true }),
    q("introduction", "A short introduction about yourself", "textarea", undefined, { optional: true, help: "A few lines about your interests, background, or what you would like others to know." }),
  ]},
  { id: "identity", title: "How would you describe what you do?", description: "We want to understand your professional identity beyond a job title. Experience level is self-described context, not a verified assessment or ranking.", questions: [
    q("identityTypes", "What best describes your professional identity?", "multi", ["Student / learner", "Aspiring professional", "Developer / engineer", "Designer / creative", "Business professional", "Researcher", "Entrepreneur / builder", "Consultant", "Specialist", "Other"]),
    q("associateArea", "What area would you like people to associate you with?", "text"),
    q("industries", "What industries or fields interest you?", "multi", ["Technology", "Business", "Finance", "Design", "Marketing", "Engineering", "Education", "Healthcare", "Creative industries", "Research", "Social impact", "Other"]),
    q("experienceLevel", "How would you describe your current level of experience?", "single", ["Exploring / learning", "Beginner", "Developing", "Intermediate", "Advanced", "Experienced specialist"], { help: "This is your own context; it is not verified or used as a ranking." }),
    q("workTypes", "What kind of work have you previously done?", "multi", ["Employment", "Freelance work", "Personal projects", "Academic projects", "Volunteering", "Business or entrepreneurial work", "Independent learning", "No formal experience yet"]),
  ]},
  { id: "capabilities", title: "What can you actually do?", description: "Select capabilities you can bring to an opportunity. For each, add context about where you developed and applied it. Levels are self-reported, not verified.", questions: [] },
  { id: "evidence", title: "Show us what you've worked on.", description: "Your experience doesn't have to come from a formal job. Projects, academic work, independent experiments, and practical demonstrations all help tell your story.", questions: [] },
  { id: "direction", title: "Where are you trying to go?", description: "Understanding your direction helps Areer identify opportunities relevant to your goals.", questions: [
    q("goals", "What are you currently trying to achieve?", "multi", ["Gain practical experience", "Build a stronger portfolio", "Find collaborators", "Get my first professional opportunity", "Develop existing capabilities", "Transition into a new field", "Work on meaningful projects", "Earn income through my capabilities", "Grow an existing professional career", "Explore different opportunities", "Other"]),
    q("exploreFields", "Which fields or industries would you like to explore?", "multi", ["Technology", "Business", "Finance", "Design", "Marketing", "Engineering", "Education", "Healthcare", "Creative industries", "Research", "Social impact", "Other"]),
    q("opportunityTypes", "What types of opportunities interest you?", "multi", ["Employment opportunities", "Freelance / contract work", "Project-based contributions", "Internships", "Volunteer contributions", "Research collaborations", "Startup / early-stage projects", "Mentorship and learning opportunities", "Other"]),
    q("outsideField", "Are you open to opportunities outside your current field?", "single", ["Yes", "No", "Depending on the opportunity"]),
    q("opportunityValue", "What would make an opportunity valuable to you?", "multi", ["Practical experience", "Financial compensation", "Portfolio development", "Learning", "Professional relationships", "Career progression", "Meaningful contribution", "Other"]),
  ]},
  { id: "preferences", title: "What kind of work interests you?", description: "These preferences help set context. They are not automatically treated as absolute constraints.", questions: [
    q("projectInterests", "What types of projects would you enjoy contributing to?", "multi", ["Technology products", "Startups", "Social impact initiatives", "Business development", "Creative projects", "Research", "Community projects", "Established organisations", "Other"]),
    q("arrangement", "What working arrangement do you prefer?", "multi", ["Remote", "Hybrid", "On-site", "Flexible"]),
    q("teamStyle", "What type of team environment do you prefer?", "multi", ["Independent work", "Small teams", "Structured organisations", "Early-stage teams", "No strong preference"]),
    q("avoid", "Are there particular industries or types of work you do not want?", "textarea", undefined, { optional: true }),
    q("otherPreferences", "What other preferences should Areer consider?", "textarea", undefined, { optional: true }),
  ]},
  { id: "availability", title: "When and how can you contribute?", description: "Help us understand your availability so we can avoid suggesting opportunities that do not fit your circumstances.", questions: [
    q("availability", "What is your current availability?", "single", ["Immediately available", "Available within a week", "Available within two weeks", "Available within a month", "Exploring future opportunities", "Not currently available"]),
    q("hours", "How much time can you realistically commit?", "single", ["Less than 5 hours per week", "5–10 hours", "10–20 hours", "20–30 hours", "More than 30 hours", "Varies depending on the opportunity"]),
    q("commitment", "What type of commitment can you consider?", "multi", ["Short-term", "Long-term", "Project-based", "Part-time", "Full-time", "Flexible"]),
    q("locationRestrictions", "Are there location restrictions?", "single", ["No restrictions", "My current city or region", "My country", "Remote only", "Other"]),
    q("constraints", "Are there other constraints that may affect your participation?", "textarea", undefined, { optional: true }),
  ]},
  { id: "readiness", title: "How ready are you to take on opportunities?", description: "Readiness helps us understand what kind of opportunity may suit you right now. It is not a judgment of your value or ability, and it can change over time.", questions: [
    q("independence", "How comfortable are you taking on work independently?", "single", ["I prefer guidance and support", "I can handle defined tasks with some guidance", "I can work independently on defined responsibilities", "I can own a workstream or deliverable", "I can lead a project or team"]),
    q("support", "What kind of support would help you contribute successfully?", "multi", ["Clear instructions", "Mentorship", "Team collaboration", "Regular feedback", "Flexible expectations", "Minimal support required", "Other"]),
    q("readiness", "What best describes your current readiness?", "single", ["Learning and exploring", "Ready for guided contributions", "Ready for defined responsibilities", "Ready to own deliverables", "Ready to lead or manage work"]),
    q("teamNote", "Is there anything else a founder or team should know before working with you?", "textarea", undefined, { optional: true }),
  ]},
  { id: "review", title: "Your Areer identity is taking shape.", description: "Review what you have shared. You can edit any section before continuing.", questions: [] },
];

export const builderSteps: StepDefinition[] = [
  { id: "context", title: "Tell us what you're building.", description: "Areer helps you find people who can contribute to the work behind your ideas and projects.", questions: [
    q("role", "What best describes you?", "single", ["Founder", "Co-founder", "Independent builder", "Project lead", "Business owner", "Organisation representative", "Team lead", "Other"]),
    q("workType", "What are you currently building or working on?", "multi", ["Product", "Startup", "Business", "Research initiative", "Community project", "Social impact initiative", "Creative project", "Internal organisational project", "Other"]),
    q("stage", "What stage are you currently at?", "single", ["Idea stage", "Research and validation", "Planning", "Building / development", "Early launch", "Operating / growing", "Established operation", "Other"]),
    q("responsibility", "What is your current responsibility in this initiative?", "textarea"),
  ]},
  { id: "identity", title: "Who are you building with?", description: "You can represent an organisation or build independently. Areer does not require formal company registration.", questions: [
    q("builderType", "Which best describes your setup?", "single", ["I represent an organisation", "I'm building independently"]),
    q("name", "Organisation name or builder / project identity", "text"),
    q("organisationType", "Organisation type", "single", ["Startup", "Small business", "Non-profit", "Community organisation", "Established company", "Research institution", "Other"], { optional: true }),
    q("industry", "Industry or relevant field", "text"),
    q("description", "Short description", "textarea"),
    q("website", "Website or public link", "text", undefined, { optional: true }),
    q("location", "Location", "text", undefined, { optional: true }),
    q("currentStage", "Current stage", "single", ["Idea stage", "Research and validation", "Planning", "Building / development", "Early launch", "Operating / growing", "Established operation", "Other"]),
    q("position", "Your position or relationship", "text", undefined, { optional: true }),
  ]},
  { id: "initiative", title: "Let's understand what you're building.", description: "Give people enough context to understand your project and why their contribution matters. A fully developed business plan is not required.", questions: [
    q("initiativeName", "What is the name of this initiative?", "text"),
    q("problem", "What problem are you trying to solve?", "textarea"),
    q("achievement", "What are you building or trying to achieve?", "textarea"),
    q("audience", "Who is this initiative intended to serve?", "text"),
    q("initiativeStage", "What stage is the initiative currently at?", "single", ["Idea stage", "Research and validation", "Planning", "Building / development", "Early launch", "Operating / growing", "Established operation", "Other"]),
    q("progress", "What progress have you already made?", "textarea", undefined, { optional: true }),
    q("goals", "What are the most important goals over the next few months?", "textarea"),
  ]},
  { id: "need", title: "What do you need help with?", description: "Describe the actual contribution your initiative needs, not just a job title. Compensation and engagement terms should be transparent.", questions: [] },
  { id: "expectations", title: "What kind of people are you looking for?", description: "Make space for contributors at different stages. Learners and emerging talent can be a good fit when the support is right.", questions: [
    q("workingStyle", "What working style would suit your team?", "multi", ["Independent", "Collaborative", "Highly structured", "Flexible", "Other"]),
    q("guidance", "How much guidance can you provide?", "single", ["Close guidance and mentorship", "Regular feedback", "Defined tasks with occasional support", "Independent contributors preferred"]),
    q("selectionFactors", "What matters most when choosing a contributor?", "multi", ["Relevant capabilities", "Demonstrated evidence", "Problem-solving", "Interest in the initiative", "Availability", "Experience", "Communication and collaboration", "Ability to take ownership"]),
    q("requirements", "Are there any non-negotiable requirements?", "textarea", undefined, { optional: true }),
    q("contributorBenefits", "What can contributors expect from working with you?", "multi", ["Learning opportunities", "Mentorship", "Compensation", "Portfolio experience", "Professional collaboration", "Ownership and responsibility", "Other"]),
  ]},
  { id: "review", title: "Review your builder profile.", description: "Check your identity, initiative, Need, and engagement expectations. Nothing will be published automatically.", questions: [] },
];

export const capabilityCategories: Record<string, string[]> = {
  "Technical": ["Frontend development", "Backend development", "Mobile development", "Data analysis", "Data science", "Quality assurance", "Cloud infrastructure", "Cybersecurity", "Product management", "No-code development"],
  "Creative and Design": ["Visual design", "UX research", "UI design", "Content writing", "Video production", "Brand design", "Illustration", "Photography"],
  "Business and Strategy": ["Business strategy", "Product strategy", "Business development", "Customer discovery", "Sales", "Project planning"],
  "Marketing and Communication": ["Digital marketing", "Social media", "SEO", "Copywriting", "Public relations", "Community management"],
  "Research and Analysis": ["User research", "Market research", "Policy research", "Data visualization", "Financial analysis"],
  "Operations and Management": ["Operations", "People management", "Event planning", "Process improvement", "Administration"],
  "Finance and Administration": ["Bookkeeping", "Budgeting", "Fundraising", "Financial planning", "Grant writing"],
  "Leadership and Collaboration": ["Team leadership", "Facilitation", "Mentoring", "Stakeholder management", "Negotiation"],
  "Other": [],
};

export const capabilityLevels = ["Currently learning", "Beginner", "Developing", "Intermediate", "Advanced", "Specialist"];
export const capabilityOrigins = ["Formal education", "Self-learning", "Employment", "Freelance work", "Personal projects", "Academic projects", "Practical experience", "Other"];
export const evidenceTypes = ["Personal project", "Academic project", "Employment experience", "Freelance work", "Volunteer contribution", "Research", "Competition / challenge", "Business or startup", "Other"];
