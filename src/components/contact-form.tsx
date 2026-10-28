"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icon";

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-brand-sand focus:ring-2 focus:ring-brand-sand/20 dark:border-white/10 dark:bg-night dark:text-white dark:placeholder:text-stone-500";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="space-y-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
          Your email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block space-y-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
        Subject
        <input
          name="subject"
          required
          placeholder="Project collaboration"
          className={inputClass}
        />
      </label>
      <label className="block space-y-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about what you have in mind..."
          className={`${inputClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-sand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-sand/20 transition hover:bg-brand-sand-dark"
      >
        Send message <Icon name="arrow" className="size-4" />
      </button>
      {sent && (
        <p
          role="status"
          className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
        >
          Thanks for reaching out! This demo form is ready to connect to an
          email service.
        </p>
      )}
    </form>
  );
}
