'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const colors = {
  navy: '#0a192f',
  white: '#ffffff'
};

const faqs = [
  {
    q: 'How do I start a project with DevilsLab?',
    a: 'Click the "Start Your Project" button in the header or contact section. Provide a brief overview and we will follow up with a discovery call to scope deliverables and timeline.'
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Timelines vary by scope. Small projects can launch in 4–8 weeks; more complex platforms typically range from 3–9 months. We provide a detailed roadmap during the discovery phase.'
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes — we provide support, maintenance, and optimization packages tailored to your needs, including monitoring, security updates, and iterative improvements.'
  },
  {
    q: 'Can you integrate AI into our existing product?',
    a: 'Absolutely. We assess your data, architecture and use-cases, then design an integration plan using on-prem, cloud, or hybrid approaches depending on privacy and performance requirements.'
  },
  {
    q: 'How does pricing work?',
    a: 'We offer flexible pricing including fixed-scope engagements, time & materials, and retainers for ongoing partnerships. After discovery we provide a transparent proposal.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative z-10" style={{ background: colors.white }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.navy }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: `${colors.navy}99` }}>
            Answers to common questions about working with DevilsLab.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="p-6 border-2 transition-all duration-300 cursor-pointer card-standard"
                style={{
                  borderColor: isOpen ? colors.navy : `${colors.navy}10`,
                  background: colors.white
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                role="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: colors.navy }}>{item.q}</h3>
                    <div className="text-base" style={{ color: `${colors.navy}90`, maxWidth: '65ch' }}>
                      {isOpen ? (
                        <p style={{ marginTop: 8 }}>{item.a}</p>
                      ) : (
                        <p style={{ marginTop: 8 }}>{item.a.substring(0, 120)}{item.a.length > 120 ? '…' : ''}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6" style={{ color: colors.navy }} />
                    ) : (
                      <ChevronDown className="w-6 h-6" style={{ color: colors.navy }} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
