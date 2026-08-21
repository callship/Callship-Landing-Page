import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What if I have phone anxiety and prefer not to do voice calls?",
    answer: "Callship accommodates varying energy levels. If live phone calls feel overwhelming today, you can log 10-second audio notes, quick meme check-ins, or low-spoon text messages. You earn full XP and keep relationships in steady orbit without pressure."
  },
  {
    question: "How does the Shame-Free Reset work?",
    answer: "If you haven't connected with someone for weeks or months, traditional apps punish you with red overdue notices. Callship includes a 1-tap 'Shame-Free Reset' that wipes the overdue counter, offers compassionate text revival templates, and awards +20 XP for choosing self-compassion."
  },
  {
    question: "Is Callship really 100% free?",
    answer: "Yes. All features, unlimited contacts, 2-minute call sprint modes, shame-free resets, orbital maps, and 100 levels of progress are completely free for everyone. There are no paywalled features, advertisements, or mandatory fees. An optional coffee tip jar is available if you wish to support development."
  },
  {
    question: "How does the optional coffee tip jar work?",
    answer: "Payment is entirely voluntary. You can use Callship forever without paying anything. Users who want to support infrastructure and development can optionally tip $3, $5, or $10."
  },
  {
    question: "Where is my contact information and note data stored?",
    answer: "All data stays 100% on your local device. Callship does not upload your address book or transmit personal logs to external databases. Your friendships and notes remain completely private."
  },
  {
    question: "Can I use Callship across devices?",
    answer: "Yes. Callship runs directly in any modern mobile or desktop web browser and can be installed as a standalone Progressive Web App (PWA) on iOS and Android."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about neurodivergent friendship maintenance, privacy, and the 100% free model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="app-surface rounded-xl border border-slate-200 bg-white overflow-hidden snappy-transition shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

