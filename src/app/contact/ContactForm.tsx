"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const SUBJECTS = [
  "General Enquiry",
  "Technical Support",
  "Billing & Payments",
  "Free Trial Request",
  "Setup Help",
  "Partnership / Reseller",
];

// ─── Helpers ──────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim())               errors.name    = "Name is required.";
  if (!values.email.trim())              errors.email   = "Email is required.";
  else if (!isValidEmail(values.email))  errors.email   = "Please enter a valid email address.";
  if (!values.subject)                   errors.subject = "Please select a subject.";
  if (!values.message.trim())            errors.message = "Message is required.";
  else if (values.message.trim().length < 20) errors.message = "Message must be at least 20 characters.";
  return errors;
}

// ─── Field component ──────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-body font-medium text-muted">{label}</label>
      {children}
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}

const inputClass = (hasError: boolean): string =>
  cn(
    "w-full px-4 py-3 text-sm bg-card border rounded-[10px] text-body placeholder:text-subtle",
    "focus:outline-none transition-colors duration-200",
    hasError
      ? "border-danger/60 focus:border-danger"
      : "border-line focus:border-accent/50"
  );

// ─── ContactForm ──────────────────────────────────────────────────────────

export default function ContactForm(): React.ReactElement {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // Simulate network delay — replace with real API call
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  if (sent) {
    return (
      <div className="p-8 rounded-[16px] bg-card border border-accent/30 text-center">
        <div className="w-12 h-12 rounded-full bg-accent-dim flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-body text-lg mb-2">Message Sent!</h3>
        <p className="text-sm text-muted leading-relaxed max-w-[340px] mx-auto">
          Thanks for reaching out, <strong className="text-body">{values.name}</strong>. We&apos;ll reply to{" "}
          <strong className="text-body">{values.email}</strong> within 1 hour.
        </p>
        <button
          onClick={() => { setSent(false); setValues({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-5 text-sm text-accent hover:text-body transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            placeholder="John Smith"
            value={values.name}
            onChange={set("name")}
            className={inputClass(!!errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input
            type="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={set("email")}
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject}>
        <select
          value={values.subject}
          onChange={set("subject")}
          className={inputClass(!!errors.subject)}
        >
          <option value="">Select a subject…</option>
          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          placeholder="How can we help you today?"
          value={values.message}
          onChange={set("message")}
          rows={6}
          className={cn(inputClass(!!errors.message), "resize-none")}
        />
        <p className="text-xs text-subtle self-end">{values.message.length} chars</p>
      </Field>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "flex items-center justify-center h-12 px-8 rounded-[12px] text-sm font-semibold",
          "bg-accent text-deep shadow-[0_0_20px_var(--color-accent-glow)]",
          "hover:bg-[#00cc6a] hover:shadow-[0_0_32px_var(--color-accent-glow)]",
          "transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
