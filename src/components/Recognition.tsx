import { motion } from 'framer-motion';
import { Award, Trophy, ShieldCheck, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import StatPill from './StatPill';

const badges = [
  { icon: Trophy, label: 'India\'s #1 Coaching Brand' },
  { icon: Award, label: 'Excellence in Education 2024' },
  { icon: ShieldCheck, label: 'ISO 9001:2015 Certified' },
  { icon: Star, label: '4.9/5 Rated by Parents' },
];

export default function Recognition() {
  return (
    <section className="relative py-24 px-6 lg:px-10">
      <SectionHeading
        eyebrow="Recognition"
        title="Trusted, Awarded, Proven"
        description="Years of consistent results have earned Coaching Classes recognition across the education ecosystem."
      />

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl bg-black/[0.03] border border-stone-900/10 p-6 flex flex-col items-center text-center gap-3 hover:border-[#d9c9a3]/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#d9c9a3]/15 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-[#9a8a5a]" />
            </div>
            <span className="text-sm text-stone-700 font-medium">{b.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
        <StatPill value={15000} suffix="+" label="Alumni Network" />
        <StatPill value={120} suffix="+" label="Top 1000 Ranks" />
        <StatPill value={25} suffix="+" label="Cities Reached" />
      </div>
    </section>
  );
}
