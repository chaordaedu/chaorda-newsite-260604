"use client";

import { useState } from "react";

type FormShellProps = {
  title: string;
  description: string;
  variant: "enterprise" | "investor" | "research";
};

export function FormShell({ title, description, variant }: FormShellProps) {
  const [submitted, setSubmitted] = useState(false);

  const fields = {
    enterprise: ["Name", "Company", "Work email", "Role", "Agent use case"],
    investor: [
      "Full name",
      "Fund or family office",
      "Corporate email",
      "LinkedIn URL",
      "Check size appetite"
    ],
    research: ["Name", "Organization", "Email", "Research area"]
  }[variant];

  return (
    <form
      className="rounded-lg border border-boundary bg-porcelain p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="grid gap-2 text-sm font-medium text-ink">
            {field}
            <input
              required
              className="focus-ring min-h-11 rounded-md border border-boundary bg-paper px-3 text-sm text-ink"
              name={field.toLowerCase().replaceAll(" ", "-")}
              type={field.toLowerCase().includes("email") ? "email" : "text"}
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea
            className="focus-ring min-h-28 rounded-md border border-boundary bg-paper px-3 py-3 text-sm text-ink"
            name="message"
          />
        </label>
      </div>
      {variant === "investor" ? (
        <label className="mt-5 flex gap-3 text-sm leading-6 text-muted">
          <input required type="checkbox" className="mt-1 size-4 accent-ink" />
          I acknowledge that data room access is subject to manual approval and
          NDA review.
        </label>
      ) : (
        <p className="mt-5 text-sm leading-6 text-muted">
          Submissions are reviewed manually. Do not include raw biometric data or
          confidential user records.
        </p>
      )}
      <button
        type="submit"
        className="focus-ring mt-6 min-h-11 rounded-md bg-ink px-5 py-3 text-sm font-medium text-porcelain transition hover:bg-graphite"
      >
        Submit request
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md bg-paper p-3 text-sm text-ink">
          Request received. This demo form is ready for CRM integration.
        </p>
      ) : null}
    </form>
  );
}
