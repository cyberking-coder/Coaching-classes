import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-teal-300 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-white/55 text-base">{description}</p>}
    </motion.div>
  );
}
