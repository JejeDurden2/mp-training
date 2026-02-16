'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { faqItems } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  faqIndices: number[];
}

export function FAQSection({ faqIndices }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqIndices.map((i) => faqItems[i]).filter(Boolean);

  if (faqs.length === 0) return null;

  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title="Questions Fréquentes"
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={faqIndices[index]}
            className="glass-card overflow-hidden rounded-xl"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 font-heading text-sm uppercase tracking-wider text-mp-white">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={cn(
                  'shrink-0 text-mp-neon transition-transform duration-300',
                  openIndex === index && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-body text-sm leading-relaxed text-mp-white/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
