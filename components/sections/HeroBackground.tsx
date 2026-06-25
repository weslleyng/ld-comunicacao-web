"use client";

import { useEffect, useState } from "react";
import bg from "@/assets/img/background.webp";
import styles from "./Hero.module.css";

// Deferred hero background. The image is fetched off the critical path (only
// after hydration, never preloaded) and applied as a CSS background — which is
// NOT an LCP candidate — so it can't delay the hero's Largest Contentful Paint.
// A dark placeholder on .hero keeps the light text readable before it arrives.
export default function HeroBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = bg.src;
    if (img.complete) {
      setReady(true);
      return;
    }
    img.onload = () => setReady(true);
  }, []);

  return (
    <div className={styles.bgLayer} aria-hidden="true">
      <div
        className={`${styles.bgImage} ${ready ? styles.bgImageReady : ""}`}
        style={ready ? { backgroundImage: `url(${bg.src})` } : undefined}
      />
      <div className={styles.bgOverlay} />
    </div>
  );
}
