"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TWEAKS, TWEAK_KEY } from "@/lib/tweaks";
import styles from "./TweakSwitcher.module.css";

/**
 * Floating preview control to switch the whole-page design "Tweak".
 *
 * Preview-only: it renders nothing unless the inline script in the layout head
 * marked the document with data-preview="1" (dev, or ?preview=1 in the URL), so
 * real visitors never see it and the published site always serves the base theme.
 * The active Tweak is applied by toggling [data-tweak] on <html>; the choice is
 * persisted to localStorage and restored by that same inline script on reload.
 */
export default function TweakSwitcher() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  // Read the preview flag + current Tweak after mount (client-only → no SSR
  // markup, so there is no hydration mismatch).
  useEffect(() => {
    const html = document.documentElement;
    setEnabled(html.getAttribute("data-preview") === "1");
    setCurrent(html.getAttribute("data-tweak") ?? "");
  }, []);

  // While the panel is open, close it on Escape or an outside click.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const apply = useCallback((id: string) => {
    const html = document.documentElement;

    // Brief colour cross-fade unless the user prefers reduced motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      html.classList.add("tweak-animating");
      window.setTimeout(() => html.classList.remove("tweak-animating"), 480);
    }

    if (id) html.setAttribute("data-tweak", id);
    else html.removeAttribute("data-tweak");

    try {
      window.localStorage.setItem(TWEAK_KEY, id);
    } catch {
      /* localStorage may be unavailable (private mode) — ignore. */
    }

    setCurrent(id);
    setOpen(false);
  }, []);

  if (!enabled) return null;

  const activeLabel =
    TWEAKS.find((t) => t.id === current)?.label ?? TWEAKS[0].label;

  return (
    <div ref={rootRef} className={styles.root}>
      {open && (
        <div
          className={styles.panel}
          role="menu"
          aria-label="Variações de design"
        >
          <p className={styles.heading}>Variações de design</p>
          {TWEAKS.map((t) => {
            const isActive = t.id === current;
            return (
              <button
                key={t.id || "base"}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                className={`${styles.option}${
                  isActive ? ` ${styles.optionActive}` : ""
                }`}
                onClick={() => apply(t.id)}
              >
                <span className={styles.swatch} aria-hidden="true">
                  {t.swatch.map((c, i) => (
                    <span key={i} style={{ background: c }} />
                  ))}
                </span>
                <span className={styles.optionLabel}>{t.label}</span>
                {isActive && <CheckIcon />}
              </button>
            );
          })}
          <p className={styles.note}>Modo pré-visualização</p>
        </div>
      )}

      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Variação de design atual: ${activeLabel}. Abrir seletor.`}
        onClick={() => setOpen((v) => !v)}
      >
        <AppearanceIcon />
        <span className={styles.toggleLabel}>Design</span>
      </button>
    </div>
  );
}

function AppearanceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
