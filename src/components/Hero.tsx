import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import StatPill from './StatPill';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8a9a7b]/15 rounded-full blur-[150px]" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-[#7fa8ad]/15 rounded-full blur-[120px]" />
      <div className="absolute top-60 left-0 w-[400px] h-[400px] bg-[#d9c9a3]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-stone-900/10 text-sm text-stone-700 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#d9c9a3]" />
          India's #1 Rated Coaching Classes Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-stone-800"
        >
          Where Toppers Are{' '}
          <span className="text-gradient">Made, Not Born.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto"
        >
          Personalized mentorship, result-driven curriculum and India's most
          experienced faculty — all under one roof at Coaching Classes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#counselling"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8a9a7b] via-[#7fa8ad] to-[#d9c9a3] text-black font-semibold hover:shadow-[0_0_40px_rgba(138,154,123,0.35)] transition-shadow"
          >
            Book Free Counselling
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-stone-900/15 text-stone-800 hover:bg-black/[0.04] transition-colors"
          >
            <PlayCircle className="w-4 h-4" />
            Explore Courses
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <StatPill value={400} suffix="+" label="Students Mentored" />
          <StatPill value={98} suffix="%" label="Selection Rate" />
          <StatPill value={50} suffix="+" label="Expert Faculty" />
          <StatPill value={12} suffix="+" label="Years of Legacy" />
        </motion.div>
      </div>
    </section>
  );
}
