import { motion } from 'framer-motion';
import { Target, Users2, Clock, NotebookPen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  {
    icon: Target,
    title: 'Goal-Oriented Batches',
    desc: 'Small batch sizes structured around exam-specific strategy, not generic syllabus coverage.',
  },
  {
    icon: Users2,
    title: 'Mentor-Led Learning',
    desc: 'Every student is mapped to a dedicated mentor who tracks progress week over week.',
  },
  {
    icon: NotebookPen,
    title: 'Test-Driven Practice',
    desc: 'Weekly tests, instant analytics and doubt-clearing sessions to convert effort into rank.',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    desc: 'Morning, evening and weekend batches designed to fit school and college schedules.',
  },
];

export default function ClassesOverview() {
  return (
    <section id="classes" className="relative py-24 px-6 lg:px-10">
      <SectionHeading
        eyebrow="Classes Overview"
        title="A Learning System Built Around You"
        description="Coaching Classes blends structured pedagogy with personal attention so every student gets a path tailored to their goal."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teal-400/40 hover:bg-white/[0.07] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-rose-500/20 flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-teal-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
