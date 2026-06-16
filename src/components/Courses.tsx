import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const courses = [
  {
    name: 'Foundation (9th & 10th)',
    tag: 'Most Popular',
    price: '₹18,000',
    period: '/ year',
    features: ['NTSE & Olympiad prep', 'Concept-first curriculum', 'Monthly parent reports', 'Personal mentor'],
    highlight: false,
  },
  {
    name: 'JEE Main + Advanced',
    tag: 'Best Results',
    price: '₹45,000',
    period: '/ year',
    features: ['IIT alumni faculty', 'All-India test series', 'Daily problem sets', '1:1 doubt sessions'],
    highlight: true,
  },
  {
    name: 'NEET (11th & 12th)',
    tag: 'High Demand',
    price: '₹42,000',
    period: '/ year',
    features: ['NCERT-aligned modules', 'Biology mastery track', 'Weekly mock NEET', 'Rank prediction tool'],
    highlight: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-24 px-6 lg:px-10">
      <SectionHeading
        eyebrow="Courses We Offer"
        title="Pick the Track. We'll Handle the Rest."
        description="From foundation building to competitive exam mastery — structured programs for every milestone."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-8 border ${
              c.highlight
                ? 'bg-gradient-to-b from-[#8a9a7b]/15 to-[#7fa8ad]/5 border-[#8a9a7b]/40 shadow-[0_0_60px_rgba(138, 154, 123, 0.15)]'
                : 'bg-white/5 border-white/10'
            }`}
          >
            {c.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#8a9a7b] to-[#7fa8ad] text-xs font-semibold text-white">
                Recommended
              </div>
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d9c9a3]">{c.tag}</span>
            <h3 className="mt-3 text-2xl font-bold text-white">{c.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">{c.price}</span>
              <span className="text-white/50 text-sm">{c.period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 text-[#8a9a7b] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#counselling"
              className={`mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm transition-transform hover:scale-[1.02] ${
                c.highlight
                  ? 'bg-gradient-to-r from-[#8a9a7b] via-[#7fa8ad] to-[#d9c9a3] text-black'
                  : 'bg-white/10 text-white border border-white/15'
              }`}
            >
              Enroll Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
