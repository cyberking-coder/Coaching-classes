import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const team = [
  { name: 'Senior Faculty', role: 'Physics & IIT Alumnus', exp: '15+ yrs experience', gradient: 'from-[#8a9a7b] to-[#7fa8ad]' },
  { name: 'Senior Faculty', role: 'Chemistry Specialist', exp: '12+ yrs experience', gradient: 'from-[#7fa8ad] to-[#d9c9a3]' },
  { name: 'Senior Faculty', role: 'Mathematics Mentor', exp: '14+ yrs experience', gradient: 'from-[#d9c9a3] to-[#8a9a7b]' },
  { name: 'Senior Faculty', role: 'Biology & NEET Expert', exp: '10+ yrs experience', gradient: 'from-[#7fa8ad] to-[#8a9a7b]' },
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
            className="rounded-2xl bg-black/[0.03] border border-stone-900/10 overflow-hidden hover:border-stone-900/20 transition-colors"
          >
            <div className={`h-40 bg-gradient-to-br ${member.gradient} opacity-80`} />
            <div className="p-5">
              <h3 className="text-stone-800 font-semibold">{member.name}</h3>
              <p className="text-sm text-stone-600 mt-1">{member.role}</p>
              <p className="text-xs text-[#8a9a7b] mt-2">{member.exp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
