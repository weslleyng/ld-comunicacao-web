"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { NAV_ITEMS } from "@/lib/nav";
import styles from "./SiteNav.module.css";

// In-page navigation: a horizontal menu on desktop and a hamburger-triggered
// overlay panel on mobile. Both share NAV_ITEMS; a lightweight IntersectionObserver
// scrollspy highlights the section currently in view.
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // The overlay is portalled to <body>: the sticky header's backdrop-filter
  // creates a containing block that would otherwise trap our position:fixed panel.
  useEffect(() => setMounted(true), []);

  // Scrollspy: mark the section sitting in the upper-middle band of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // While open: Escape closes and focus moves into the panel. On close, focus
  // returns to the trigger for predictable keyboard navigation.
  useEffect(() => {
    if (!open) {
      return;
    }
    const trigger = buttonRef.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <nav className={styles.desktop} aria-label="Navegação principal">
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${
                  activeId === item.id ? styles.linkActive : ""
                }`}
                aria-current={activeId === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={buttonRef}
        type="button"
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="site-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.burgerBox} aria-hidden="true">
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </span>
      </button>

      {/* Scrim closes the panel; `inert` keeps the hidden panel out of tab order. */}
      {mounted &&
        createPortal(
          <div
            className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
            onClick={() => setOpen(false)}
            inert={!open}
          >
            <div
              ref={panelRef}
              id="site-nav-panel"
              className={styles.panel}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              onClick={(event) => event.stopPropagation()}
            >
              <nav aria-label="Seções da página">
                <ul className={styles.panelList}>
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`${styles.panelLink} ${
                          activeId === item.id ? styles.panelLinkActive : ""
                        }`}
                        aria-current={activeId === item.id ? "true" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <WhatsAppButton variant="gold" className={styles.panelCta} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
