"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

type InstagramEmbedProps = {
  /** Public permalink, e.g. https://www.instagram.com/reel/DJZgWILtV7V/ */
  url: string;
  /** Render the post caption inside the embed card. */
  captioned?: boolean;
};

/**
 * Renders an Instagram post/reel via Instagram's official embed.js, which
 * swaps the blockquote for a self-sizing iframe — so vertical Reels are not
 * clipped by a fixed height. The inner link is the no-JS fallback.
 *
 * embed.js is only requested once the card approaches the viewport, keeping
 * Instagram's third-party script and iframes off the initial page load.
 */
export default function InstagramEmbed({
  url,
  captioned = false,
}: InstagramEmbedProps) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const loadEmbed = () => {
      const process = () => window.instgrm?.Embeds.process();

      if (window.instgrm) {
        process();
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${SCRIPT_SRC}"]`,
      );
      if (existing) {
        existing.addEventListener("load", process, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", process, { once: true });
      document.body.appendChild(script);
    };

    // Defer the third-party script until the card nears the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            loadEmbed();
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [url]);

  return (
    <blockquote
      ref={ref}
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      {...(captioned ? { "data-instgrm-captioned": "" } : {})}
      style={{
        margin: 0,
        width: "100%",
        minWidth: 0,
        background: "var(--surface)",
      }}
    >
      <a href={url} target="_blank" rel="noopener">
        Ver publicação no Instagram
      </a>
    </blockquote>
  );
}
