import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';

const links = [
  { label: 'Classes', href: '#classes' },
  { label: 'Courses', href: '#courses' },
  { label: 'Team', href: '#team' },
  { label: 'Results', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 via-rose-500 to-amber-400 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Coaching Classes
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#counselling"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
        >
          Free Counselling
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#counselling"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold text-center"
            >
              Free Counselling
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
