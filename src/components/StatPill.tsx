import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatPillProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatPill({ value, suffix = '', label }: StatPillProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-6 hover:border-white/20 transition-colors"
    >
      <div className="text-3xl sm:text-4xl font-bold text-white font-display">
        {inView ? (
          <CountUp end={value} duration={2} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}
