import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function FreeCounselling() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="counselling" className="relative py-24 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-teal-600/20 via-rose-500/10 to-amber-400/10 border border-white/10 p-10 sm:p-14 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="relative grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-amber-300 mb-4">
              <Phone className="w-3.5 h-3.5" /> 100% Free, No Obligation
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Get Free Career Counselling
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Talk to our academic mentors and get a personalized roadmap for
              your exam, course and career goals — completely free.
            </p>
            <ul className="mt-6 space-y-2">
              {['15-min 1:1 mentor call', 'Personalized study roadmap', 'No cost, no pressure'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-white/10 border border-white/10 p-8 text-center"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg">You're All Set!</h3>
              <p className="text-white/60 text-sm mt-2">
                Our mentor will reach out within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 text-sm outline-none focus:border-teal-400/50"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 text-sm outline-none focus:border-teal-400/50"
              />
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white/80 text-sm outline-none focus:border-teal-400/50"
              >
                <option value="" disabled>Interested In</option>
                <option>JEE Main + Advanced</option>
                <option>NEET</option>
                <option>Foundation (9th & 10th)</option>
              </select>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 via-rose-500 to-amber-400 text-black font-semibold text-sm hover:scale-[1.02] transition-transform"
              >
                Book My Free Slot
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
