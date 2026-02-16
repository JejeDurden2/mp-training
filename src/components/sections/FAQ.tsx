'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { NeonIcon } from '@/components/ui/NeonIcon';
import { faqItems } from '@/lib/data';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl transition-smooth">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-body text-base font-medium text-mp-white md:text-lg">{question}</h3>
        <NeonIcon
          name="chevron-down"
          size={20}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          glow={false}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 font-body text-sm leading-relaxed text-mp-white/70 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="bg-mp-black">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions Fréquentes"
        description="Toutes les réponses à vos questions sur nos services de coaching sportif à Nice."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
}
