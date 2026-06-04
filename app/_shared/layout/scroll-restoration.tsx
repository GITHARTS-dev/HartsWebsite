"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Per-URL scroll restoration for the App Router with proper handling for
 * three navigation kinds:
 *
 *   1. Browser back / forward (popstate fires)       → restore saved scroll
 *   2. Link click with hash (e.g. /page#section)     → scroll to that anchor
 *   3. Link click without hash                        → top of page
 *
 * The previous implementation restored saved scroll on every pathname
 * change, which (a) overrode hash-anchor jumps and (b) made clicking a
 * link return you to wherever you'd previously scrolled on that page —
 * making the hero feel "missing" on revisits.
 *
 * Scroll positions still save on every scroll event (with a 180 ms paused
 * window after each route change so the post-navigation scroll-to-top
 * can't poison the saved value).
 *
 * Mount once in the root layout.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  // popstate flag — set true by the browser back/forward listener,
  // consumed (and reset) on the next pathname-change effect.
  const isPopRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => {
      isPopRef.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const key = `harts:scroll:${pathname}`;
    const hash = window.location.hash;
    const saved = sessionStorage.getItem(key);
    const wasPop = isPopRef.current;
    isPopRef.current = false; // consume the flag

    let savingPaused = true;

    const finalisePause = () => {
      savingPaused = false;
    };

    if (wasPop && saved !== null) {
      // — Browser back/forward — restore the saved scroll for this URL.
      const target = Number.parseInt(saved, 10) || 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: target, left: 0, behavior: "auto" });
          setTimeout(() => {
            window.scrollTo({ top: target, left: 0, behavior: "auto" });
            finalisePause();
          }, 180);
        });
      });
    } else if (hash && hash.length > 1) {
      // — Forward navigation with hash — scroll to the matching element.
      // CSS scroll-padding-top already accounts for the sticky header.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          let el: Element | null = null;
          try {
            el = document.querySelector(hash);
          } catch {
            el = null;
          }
          if (el) {
            (el as HTMLElement).scrollIntoView({
              behavior: "auto",
              block: "start",
            });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }
          setTimeout(finalisePause, 180);
        });
      });
    } else {
      // — Forward navigation without hash — start at the top.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      setTimeout(finalisePause, 180);
    }

    const onScroll = () => {
      if (savingPaused) return;
      sessionStorage.setItem(key, String(window.scrollY));
    };
    const writeNow = () => {
      sessionStorage.setItem(key, String(window.scrollY));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", writeNow);
    window.addEventListener("beforeunload", writeNow);

    return () => {
      if (!savingPaused) writeNow();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", writeNow);
      window.removeEventListener("beforeunload", writeNow);
    };
  }, [pathname]);

  return null;
}
