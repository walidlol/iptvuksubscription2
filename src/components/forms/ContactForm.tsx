"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
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

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full rounded-[12px] border border-line bg-card px-4 py-3 text-sm text-body placeholder:text-subtle outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all";

export default function ContactForm(): React.ReactElement {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // TODO: Wire up to API route or email service
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[16px] border border-accent/30 bg-accent-dim p-8 text-center">
        <p className="text-accent font-semibold">Message sent!</p>
        <p className="mt-1 text-sm text-muted">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
            aria-label="Name"
          />
          {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
            aria-label="Email"
          />
          {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
        </div>
      </div>

      <div>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
          aria-label="Subject"
        >
          <option value="">Select a subject</option>
          <option value="trial">Free trial request</option>
          <option value="billing">Billing enquiry</option>
          <option value="technical">Technical support</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className="mt-1 text-xs text-danger">{errors.subject}</p>}
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          rows={5}
          className={inputClass}
          aria-label="Message"
        />
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-danger">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} fullWidth>
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
