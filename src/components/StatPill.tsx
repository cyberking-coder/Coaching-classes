import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatPillProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatPill({ value, suffix = '', label }: StatPillProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-6 hover:border-white/20 transition-colors"
    >
      <div className="text-3xl sm:text-4xl font-bold text-white font-display">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}
