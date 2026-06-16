import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const team = [
  { name: 'Senior Faculty', role: 'Physics & IIT Alumnus', exp: '15+ yrs experience', gradient: 'from-violet-500 to-indigo-500' },
  { name: 'Senior Faculty', role: 'Chemistry Specialist', exp: '12+ yrs experience', gradient: 'from-pink-500 to-rose-500' },
  { name: 'Senior Faculty', role: 'Mathematics Mentor', exp: '14+ yrs experience', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Senior Faculty', role: 'Biology & NEET Expert', exp: '10+ yrs experience', gradient: 'from-emerald-400 to-teal-500' },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 px-6 lg:px-10">
      <SectionHeading
        eyebrow="Our Faculty"
        title="Mentors Who've Walked the Path"
        description="A team of subject-matter experts, IIT/NIT alumni and exam strategists dedicated to your success."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
          >
            <div className={`h-40 bg-gradient-to-br ${member.gradient} opacity-80`} />
            <div className="p-5">
              <h3 className="text-white font-semibold">{member.name}</h3>
              <p className="text-sm text-white/55 mt-1">{member.role}</p>
              <p className="text-xs text-violet-300 mt-2">{member.exp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
