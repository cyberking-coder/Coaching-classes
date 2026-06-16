import { GraduationCap, Camera, Video, Globe, MessageCircle } from 'lucide-react';

const columns = [
  {
    title: 'Courses',
    links: ['JEE Main + Advanced', 'NEET', 'Foundation 9th & 10th', 'Olympiads'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Faculty', 'Careers', 'Centers'],
  },
  {
    title: 'Resources',
    links: ['Results', 'Blog', 'Free Mock Tests', 'Scholarship Test'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8a9a7b] via-[#7fa8ad] to-[#d9c9a3] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-black" />
            </div>
            <span className="font-display font-bold text-lg text-white">Coaching Classes</span>
          </div>
          <p className="text-sm text-white/50 max-w-sm leading-relaxed">
            Empowering students with mentorship, structured learning and
            result-driven coaching since day one.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Camera, Video, Globe, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">© 2026 Coaching Classes. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs text-white/40">
          <a href="#" className="hover:text-white/70">Privacy Policy</a>
          <a href="#" className="hover:text-white/70">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
