"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ 
  end, 
  suffix = "", 
  prefix = "", 
  duration = 2.5,
  className = "" 
}: AnimatedCounterProps) {
  return (
    <span className={className}>
      <CountUp
        end={end}
        suffix={suffix}
        prefix={prefix}
        duration={duration}
        enableScrollSpy
        scrollSpyOnce
      />
    </span>
  );
}
