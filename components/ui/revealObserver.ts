// Shared IntersectionObserver for all <Reveal> instances on the page.
//
// One observer with a Map of per-element callbacks is cheaper than creating a
// separate observer per section (the landing page has ~11). Each element is
// unobserved as soon as it reveals, so the observer naturally empties out.

type RevealCallback = () => void;

const callbacks = new WeakMap<Element, RevealCallback>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const callback = callbacks.get(entry.target);
        if (callback) {
          callback();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );

  return observer;
}

/**
 * Reveal `node` once it scrolls into view, then stop watching it. Returns a
 * cleanup function for React effect teardown (e.g. fast unmount before reveal).
 */
export function observeReveal(node: Element, onReveal: RevealCallback): () => void {
  const obs = getObserver();
  callbacks.set(node, onReveal);
  obs.observe(node);

  return () => {
    obs.unobserve(node);
    callbacks.delete(node);
  };
}
