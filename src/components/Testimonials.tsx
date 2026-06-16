import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Aarav Sharma',
    result: 'AIR 342, JEE Advanced',
    quote:
      'The mentorship and weekly test analysis at Coaching Classes completely changed how I approached problem solving. I went from average to top rank in 18 months.',
  },
  {
    name: 'Sneha Patil',
    result: 'AIR 891, NEET',
    quote:
      'Small batches meant every doubt got answered. The faculty here genuinely care about each student\'s growth, not just the syllabus.',
  },
  {
    name: 'Rohan Mehta',
    result: 'Topper, Foundation Batch',
    quote:
      'I joined in 9th grade with zero confidence in Math. The structured approach and constant encouragement made all the difference.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 lg:px-10">
      <SectionHeading
        eyebrow="Success Stories"
        title="Loved by Students. Proven by Results."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-black/[0.03] border border-stone-900/10 p-7 relative"
          >
            <Quote className="w-8 h-8 text-[#8a9a7b]/40 mb-4" />
            <p className="text-stone-700 text-sm leading-relaxed">{t.quote}</p>
            <div className="mt-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-[#d9c9a3] text-[#d9c9a3]" />
              ))}
            </div>
            <div className="mt-3">
              <p className="text-stone-800 font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-[#8a9a7b]">{t.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
