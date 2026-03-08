"use client";

import { useState } from "react";

interface FaqItem {
  frage: string;
  antwort: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <dl className="divide-y divide-accent/20">
      {items.map((item, i) => {
        const id = `faq-answer-${i}`;
        return (
          <div key={i} className="py-6">
            <dt>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded"
                aria-expanded={openIndex === i}
                aria-controls={id}
              >
                <span className="text-lg font-semibold leading-snug">
                  {item.frage}
                </span>
                <span
                  className={`mt-1 shrink-0 text-xl leading-none text-accent transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </dt>
            <dd
              id={id}
              aria-hidden={openIndex !== i}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                openIndex === i
                  ? "mt-4 max-h-[40rem] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="whitespace-pre-line leading-relaxed text-neutral-600">{item.antwort}</p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
