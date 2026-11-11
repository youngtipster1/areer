import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Compass, Eye, EyeOff, Handshake, Layers2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wordmark } from "@/components/landing/nav";
import {
  getPasswordChecks,
  recoverySchema,
  signInSchema,
  signUpSchema,
} from "@/lib/auth-validation";
import {
  isParticipationIntent,
  PARTICIPATION_INTENT_STORAGE_KEY,
  getOnboardingDestination,
  participationIntentOptions,
  type ParticipationIntent,
} from "@/lib/participation-intent";

type FieldErrors = Record<string, string>;

function issueMessages(error: { issues: Array<{ path: PropertyKey[]; message: string }> }): FieldErrors {
  const messages: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!messages[key]) messages[key] = issue.message;
  }
  return messages;
}

function AuthFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-svh bg-secondary/50 text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Link to="/" aria-label="Areer home" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Wordmark />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden />
            <span className="hidden sm:inline">Back to Areer</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1120px] px-4 py-5 sm:px-6 sm:py-8 lg:py-10">
        <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-md lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative hidden flex-col justify-between bg-primary p-8 text-primary-foreground lg:flex xl:p-10">
          <div>
            <p className="type-overline text-accent">A different way to connect</p>
            <p className="mt-8 max-w-sm font-display text-3xl font-bold leading-tight xl:text-4xl">
              See the value in what you bring.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/75">
              Areer brings your capabilities, evidence and direction into focus—so your next step starts with what you can contribute.
            </p>
          </div>
          <div className="space-y-4 border-t border-primary-foreground/20 pt-5">
            <p className="type-overline text-primary-foreground/60">A more complete picture</p>
            <div className="grid grid-cols-3 divide-x divide-primary-foreground/20">
            {[
              ["01", "Capabilities"],
              ["02", "Evidence"],
              ["03", "Direction"],
            ].map(([number, label]) => (
              <div key={number} className="px-3 first:pl-0 last:pr-0">
                <p className="type-overline text-accent">{number}</p>
                <p className="mt-1 text-xs font-medium text-primary-foreground/85">{label}</p>
              </div>
            ))}
            </div>
          </div>
        </aside>

        <section className="flex items-center justify-center px-5 py-7 sm:px-10 sm:py-9 lg:border-l lg:border-border lg:px-10 xl:px-14">
          <div className="w-full max-w-[440px]">
            <p className="type-overline text-accent-ink">{eyebrow}</p>
            <h1 className="type-h1 mt-3 text-balance">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            <div className="mt-7">{children}</div>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}

function FieldError({ id, children }: { id: string; children?: string | undefined }) {
  if (!children) return null;
  return <p id={id} className="type-small text-destructive" role="alert">{children}</p>;
}

function PasswordInput({
  id,
  label,
  value,
  onChange,
  autoComplete,
  error,
  describedBy,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  error?: string | undefined;
  describedBy?: string | undefined;
}) {
  const [visible, setVisible] = useState(false);
  const errorId = `${id}-error`;
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          required
          maxLength={128}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : describedBy}
          className={`h-11 pr-12 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

function EmailInput({
  id = "email",
  value,
  onChange,
  error,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>Email address</Label>
      <Input
        id={id}
        type="email"
        inputMode="email"
        autoComplete="email"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
        maxLength={255}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`h-11 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

function PasswordRules({ password }: { password: string }) {
  const checks = getPasswordChecks(password);
  return (
    <ul id="password-rules" className="grid grid-cols-2 gap-x-3 gap-y-1" aria-label="Password requirements">
      {checks.map(({ label, met }) => (
        <li key={label} className={`type-small inline-flex items-center gap-1.5 ${met ? "text-success" : "text-muted-foreground"}`}>
          {met ? <Check className="size-3.5" aria-hidden /> : <span className="size-1.5 rounded-full bg-border-strong" aria-hidden />}
          {label}
        </li>
      ))}
    </ul>
  );
}

export function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = signUpSchema.safeParse(form);
    if (!result.success) {
      setErrors(issueMessages(result.error));
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setLoading(false);
    await navigate({ to: "/account-created" });
  }

  return (
    <AuthFrame
      eyebrow="CREATE ACCOUNT"
      title="Create your Areer account"
      description="Start connecting what you can do with opportunities and people who need your capabilities."
    >
      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="full-name">Full name</Label>
          <Input
            id="full-name"
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors["fullName"])}
            aria-describedby={errors["fullName"] ? "full-name-error" : undefined}
            className={`h-11 ${errors["fullName"] ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          <FieldError id="full-name-error">{errors["fullName"]}</FieldError>
        </div>

        <EmailInput value={form.email} onChange={(email) => setForm((current) => ({ ...current, email }))} error={errors["email"]} />

        <div className="space-y-2">
          <PasswordInput
            id="new-password"
            label="Password"
            value={form.password}
            onChange={(password) => setForm((current) => ({ ...current, password }))}
            autoComplete="new-password"
            error={errors["password"]}
            describedBy="password-rules"
          />
          <PasswordRules password={form.password} />
        </div>

        <PasswordInput
          id="confirm-password"
          label="Confirm password"
          value={form.confirmPassword}
          onChange={(confirmPassword) => setForm((current) => ({ ...current, confirmPassword }))}
          autoComplete="new-password"
          error={errors["confirmPassword"]}
        />

        <Button type="submit" size="lg" className="mt-2 w-full" disabled={loading}>
          {loading ? <><LoaderCircle className="animate-spin" />Creating account…</> : <>Create Account<ArrowRight /></>}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/sign-in" className="font-semibold text-foreground underline decoration-accent-ink underline-offset-4">Sign In</Link>
      </p>
    </AuthFrame>
  );
}

const MOCK_CREDENTIALS = { email: "demo@areer.test", password: "AreerDemo26" };

export function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [outcome, setOutcome] = useState<"success" | "invalid" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = signInSchema.safeParse(form);
    if (!result.success) {
      setErrors(issueMessages(result.error));
      setOutcome(null);
      return;
    }
    setErrors({});
    setOutcome(null);
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    const isDemoUser =
      result.data.email.toLowerCase() === MOCK_CREDENTIALS.email &&
      result.data.password === MOCK_CREDENTIALS.password;
    setLoading(false);
    if (isDemoUser) {
      await navigate({ to: "/onboarding" });
      return;
    }
    setOutcome("invalid");
  }

  return (
    <AuthFrame eyebrow="SIGN IN" title="Welcome back" description="Sign in to continue where you left off.">
      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        <EmailInput value={form.email} onChange={(email) => setForm((current) => ({ ...current, email }))} error={errors["email"]} />
        <PasswordInput
          id="sign-in-password"
          label="Password"
          value={form.password}
          onChange={(password) => setForm((current) => ({ ...current, password }))}
          autoComplete="current-password"
          error={errors["password"]}
        />
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm font-medium text-foreground underline decoration-accent-ink underline-offset-4">Forgot password?</Link>
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? <><LoaderCircle className="animate-spin" />Signing in…</> : <>Sign In<ArrowRight /></>}
        </Button>
        {outcome === "invalid" && (
          <p className="type-small rounded-md border border-destructive/30 bg-destructive-soft px-3 py-2.5 text-destructive" role="alert">
            Those details don’t match the demo account. Check the sample credentials below and try again.
          </p>
        )}
      </form>

      <div className="mt-5 border-t border-border pt-4">
        <p className="type-overline text-muted-foreground">Prototype demo access</p>
        <p className="type-small mt-1 text-muted-foreground">Email: <span className="font-medium text-foreground">{MOCK_CREDENTIALS.email}</span></p>
        <p className="type-small text-muted-foreground">Password: <span className="font-medium text-foreground">{MOCK_CREDENTIALS.password}</span></p>
      </div>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        New to Areer? <Link to="/sign-up" className="font-semibold text-foreground underline decoration-accent-ink underline-offset-4">Create an account</Link>
      </p>
    </AuthFrame>
  );
}

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = recoverySchema.safeParse({ email });
    if (!result.success) {
      setError(issueMessages(result.error)["email"] ?? "Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    // Prototype-only response: this flow does not send an email.
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <AuthFrame eyebrow="PASSWORD RECOVERY" title="Check your email" description="If an account exists for this email address, password recovery instructions would be sent to it.">
        <div className="flex items-start gap-3 rounded-md border border-border bg-secondary p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-ink" aria-hidden />
          <p className="min-w-0 break-all text-sm font-medium">{email.trim()}</p>
        </div>
        <div className="mt-6 grid gap-3">
          <Button asChild size="lg" className="w-full"><Link to="/sign-in">Return to Sign In<ArrowRight /></Link></Button>
          <Button variant="outline" className="w-full" onClick={() => { setSubmitted(false); setError(""); }}>
            Try another email address
          </Button>
        </div>
      </AuthFrame>
    );
  }

  return (
    <AuthFrame
      eyebrow="PASSWORD RECOVERY"
      title="Forgot your password?"
      description="Enter the email address associated with your Areer account. We'll show you the next step."
    >
      <form noValidate onSubmit={handleSubmit} className="space-y-5">
        <EmailInput value={email} onChange={(value) => setEmail(value)} error={error || undefined} />
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? <><LoaderCircle className="animate-spin" />Continuing…</> : <>Continue<ArrowRight /></>}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm">
        <Link to="/sign-in" className="font-semibold text-foreground underline decoration-accent-ink underline-offset-4">Return to Sign In</Link>
      </p>
    </AuthFrame>
  );
}

export function AccountCreatedPage() {
  return (
    <AuthFrame eyebrow="ACCOUNT CREATED" title="Your Areer account is ready." description="Your next step is to set up how you want to use Areer and what you want to achieve here.">
      <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-ink" aria-hidden>
        <CheckCircle2 className="size-6" />
      </div>
      <Button asChild size="lg" className="w-full"><Link to="/onboarding">Continue<ArrowRight /></Link></Button>
    </AuthFrame>
  );
}

const intentIcons = {
  find_opportunities: Compass,
  build_with_others: Handshake,
  both: Layers2,
} as const;

export function OnboardingIntentPage() {
  const navigate = useNavigate();
  const [intent, setIntent] = useState<ParticipationIntent | null>(null);

  useEffect(() => {
    try {
      const storedIntent = window.localStorage.getItem(PARTICIPATION_INTENT_STORAGE_KEY);
      if (isParticipationIntent(storedIntent)) setIntent(storedIntent);
    } catch {
      // Local storage can be unavailable; the current page selection still works.
    }
  }, []);

  function selectIntent(value: string) {
    if (!isParticipationIntent(value)) return;
    setIntent(value);
    try {
      window.localStorage.setItem(PARTICIPATION_INTENT_STORAGE_KEY, value);
    } catch {
      // Keep the selection in memory if this browser blocks local storage.
    }
  }

  async function handleContinue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!intent) return;
    await navigate({ to: "/onboarding/next", search: { intent } });
  }

  return (
    <main className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" aria-label="Areer home" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Wordmark />
          </Link>
          <div className="flex items-center gap-4">
            <span className="type-overline hidden text-muted-foreground sm:inline">Account setup · Participation</span>
            <Link to="/account-created" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="size-4" aria-hidden />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <div className="max-w-[720px]">
          <p className="type-overline text-accent-ink">ACCOUNT SETUP · STARTING PREFERENCE</p>
          <h1 className="type-h1 mt-3 text-balance">How would you like to use Areer?</h1>
          <p className="type-body-lg mt-4 text-muted-foreground">
            Areer connects people with opportunities to contribute and people building things with others. Choose where you’d like to start. You can explore both sides as you grow.
          </p>
        </div>

        <form onSubmit={handleContinue} className="mt-8 sm:mt-10">
          <fieldset>
            <legend className="sr-only">Choose how you would like to participate</legend>
            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              {participationIntentOptions.map((option) => {
                const Icon = intentIcons[option.value];
                const selected = intent === option.value;
                return (
                  <label key={option.value} className="block h-full cursor-pointer">
                    <input
                      type="radio"
                      name="participation-intent"
                      value={option.value}
                      checked={selected}
                      onChange={(event) => selectIntent(event.currentTarget.value)}
                      aria-describedby={`intent-${option.value}-description`}
                      className="peer sr-only"
                    />
                    <span className="flex h-full min-h-[250px] flex-col rounded-md border border-border bg-card p-5 transition-colors hover:border-border-strong peer-checked:border-accent-ink peer-checked:bg-accent-soft/40 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background sm:p-6">
                      <span className="flex items-start justify-between gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground peer-checked:bg-accent peer-checked:text-accent-foreground" aria-hidden>
                          <Icon className="size-5" />
                        </span>
                        {selected ? <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent-ink" aria-hidden /> : <span className="mt-1 size-5 shrink-0 rounded-full border border-border-strong" aria-hidden />}
                      </span>
                      <span className="mt-5 font-display text-lg font-semibold">{option.label}</span>
                      <span id={`intent-${option.value}-description`} className="type-small mt-2 text-muted-foreground">
                        {option.description}
                      </span>
                      <ul className="mt-5 space-y-2 border-t border-border pt-4">
                        {option.points.map((point) => (
                          <li key={point} className="type-small flex items-start gap-2 text-foreground">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-accent-ink" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-7 flex flex-col-reverse gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-small max-w-[520px] text-muted-foreground">
              This is a starting preference, not a permanent role. You can explore both paths as you grow.
            </p>
            <Button type="submit" size="lg" className="w-full shrink-0 sm:w-auto" disabled={!intent}>
              Continue<ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export function OnboardingDestinationPage({ intent }: { intent: ParticipationIntent | null }) {
  if (!intent) {
    return (
      <AuthFrame eyebrow="ACCOUNT SETUP" title="Choose where to begin." description="Select a starting preference to continue your Areer experience.">
        <Button asChild size="lg" className="w-full"><Link to="/onboarding">Choose a starting preference<ArrowRight /></Link></Button>
      </AuthFrame>
    );
  }
  return <OnboardingPlaceholderPage destination={getOnboardingDestination(intent)} intent={intent} />;
}

export function OnboardingPlaceholderPage({
  destination,
  intent,
}: {
  destination: "career-identity" | "founder";
  intent: ParticipationIntent | null;
}) {
  const isFounder = destination === "founder";
  const selectedOption = intent ? participationIntentOptions.find((option) => option.value === intent) : undefined;

  return (
    <AuthFrame
      eyebrow="ONBOARDING PLACEHOLDER"
      title={isFounder ? "Founder / Organisation onboarding is next." : "Career Identity onboarding is next."}
      description={isFounder
        ? "This is the placeholder for the founder and organisation onboarding experience."
        : "This is the placeholder for Career Identity onboarding."}
    >
      <div className="border-y border-border py-4">
        <p className="text-sm font-medium">Starting preference: {selectedOption?.label ?? "Not selected"}</p>
        <p className="type-small mt-1 text-muted-foreground">Your preference is saved separately and can be changed later.</p>
      </div>
      <div className="mt-6 grid gap-3">
        <Button asChild size="lg" className="w-full"><Link to="/onboarding">Change starting preference<ArrowRight /></Link></Button>
        <Button asChild variant="outline" className="w-full"><Link to="/account-created"><ArrowLeft />Back to account setup</Link></Button>
      </div>
    </AuthFrame>
  );
}