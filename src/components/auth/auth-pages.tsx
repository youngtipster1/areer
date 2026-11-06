import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Eye, EyeOff, LoaderCircle } from "lucide-react";
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
    <main className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Link to="/" aria-label="Foundareer home" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Wordmark />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden />
            <span className="hidden sm:inline">Back to Foundareer</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 px-4 py-6 sm:px-6 sm:py-8 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-10">
        <aside className="relative hidden flex-col justify-between overflow-hidden rounded-l-lg bg-primary p-8 text-primary-foreground lg:flex xl:p-10">
          <div>
            <p className="type-overline text-accent">A different way to connect</p>
            <p className="mt-8 max-w-sm font-display text-3xl font-bold leading-tight xl:text-4xl">
              Built around what people can contribute.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/75">
              Capability, evidence and direction sit at the centre of Foundareer.
            </p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-primary-foreground/20 border-t border-primary-foreground/20 pt-5">
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
        </aside>

        <section className="flex items-center justify-center lg:border-y lg:border-r lg:border-border lg:rounded-r-lg lg:bg-card">
          <div className="w-full max-w-[440px] py-5 sm:py-8 lg:px-10 xl:px-14">
            <p className="type-overline text-accent-ink">{eyebrow}</p>
            <h1 className="type-h1 mt-3 text-balance">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            <div className="mt-7">{children}</div>
          </div>
        </section>
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
      title="Create your Foundareer account"
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
            className={`h-11 ${errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}`}
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

const MOCK_CREDENTIALS = { email: "demo@foundareer.test", password: "AreerDemo26" };

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
    setOutcome(isDemoUser ? "success" : "invalid");
    setLoading(false);
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
        {outcome === "success" && (
          <p className="type-small rounded-md border border-success/30 bg-success-soft px-3 py-2.5 text-success" role="status">
            Demo sign-in successful. No account session was created.
          </p>
        )}
      </form>

      <div className="mt-5 border-t border-border pt-4">
        <p className="type-overline text-muted-foreground">Prototype demo access</p>
        <p className="type-small mt-1 text-muted-foreground">Email: <span className="font-medium text-foreground">{MOCK_CREDENTIALS.email}</span></p>
        <p className="type-small text-muted-foreground">Password: <span className="font-medium text-foreground">{MOCK_CREDENTIALS.password}</span></p>
      </div>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        New to Foundareer? <Link to="/sign-up" className="font-semibold text-foreground underline decoration-accent-ink underline-offset-4">Create an account</Link>
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
      description="Enter the email address associated with your Foundareer account. We'll show you the next step."
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
    <AuthFrame eyebrow="ACCOUNT CREATED" title="Your Foundareer account is ready." description="Your next step is to set up how you want to use Foundareer and what you want to achieve here.">
      <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-ink" aria-hidden>
        <CheckCircle2 className="size-6" />
      </div>
      <Button asChild size="lg" className="w-full"><Link to="/onboarding">Continue<ArrowRight /></Link></Button>
    </AuthFrame>
  );
}

export function OnboardingPlaceholderPage() {
  return (
    <AuthFrame eyebrow="NEXT STEP" title="Set up your next step." description="This is where your Foundareer setup will begin. The onboarding experience is not part of this prototype yet.">
      <div className="border-y border-border py-4">
        <p className="text-sm font-medium">Your account is ready for setup.</p>
        <p className="type-small mt-1 text-muted-foreground">No profile details have been saved.</p>
      </div>
      <Button asChild variant="outline" className="mt-6 w-full"><Link to="/">Explore Foundareer<ArrowRight /></Link></Button>
    </AuthFrame>
  );
}