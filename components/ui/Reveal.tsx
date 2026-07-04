"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { observeReveal } from "./revealObserver";

type RevealProps = {
  children: ReactNode;
  /** Optional delay (ms) applied to the reveal transition. */
  delay?: number;
};

/**
 * Wraps a section and fades/slides it in once it scrolls into view.
 * Falls back to immediately visible when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    return observeReveal(node, () => setVisible(true));
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
