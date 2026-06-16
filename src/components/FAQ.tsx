import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'What batch sizes does Coaching Classes maintain?',
    a: 'We cap every batch at 25-30 students to ensure personal attention and faster doubt resolution for each learner.',
  },
  {
    q: 'Do you offer scholarships or fee concessions?',
    a: 'Yes, merit-based scholarships up to 50% are available based on our entrance scholarship test scores.',
  },
  {
    q: 'Are study materials included in the course fee?',
    a: 'Absolutely. All printed modules, test series and digital practice resources are included at no extra cost.',
  },
  {
    q: 'Can I switch batches or timings later?',
    a: 'Yes, subject to seat availability you can request a batch or timing change anytime through your mentor.',
  },
  {
    q: 'Is online learning support available?',
    a: 'All classes are recorded and made available on our portal, along with live online doubt-clearing sessions.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 px-6 lg:px-10">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-white font-medium text-sm sm:text-base">{f.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-white/50 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
