"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Props = { count?: number };

export default function FloatingHearts({ count = 16 }: Props) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 8,
        dur: 10 + Math.random() * 10,
        driftX: (Math.random() - 0.5) * 120
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map(h => (
        <motion.span
          key={h.id}
          className="heart absolute"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            width: h.size,
            height: h.size,
            // @ts-ignore – CSS var
            ["--drift-x" as any]: `${h.driftX}px`,
            ["--drift-dur" as any]: `${h.dur}s`
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0.8, 0], y: -window.innerHeight - 200 }}
          transition={{ duration: h.dur, delay: h.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}