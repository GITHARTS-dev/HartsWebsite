"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/**
 * Every route should land at scroll-y 0 on initial mount / navigation, so the
 * hero is always the first thing in view. Browsers otherwise restore previous
 * scroll positions on refresh and Next's router can defer scroll-to-top under
 * some flag combinations — force it explicitly here.
 */
function useScrollToTopOnNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Skip if user navigated to a same-page hash explicitly.
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
}

export function PageShell({ children }: { children: ReactNode }) {
  useScrollToTopOnNavigation();

  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
