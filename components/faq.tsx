import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="rounded-lg border border-boundary bg-porcelain p-5"
        >
          <summary className="cursor-pointer text-base font-semibold text-ink">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
