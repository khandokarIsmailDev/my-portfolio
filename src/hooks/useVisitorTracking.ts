/**
 * useVisitorTracking
 *
 * Custom hook that fires one POST to /api/track-visit on mount.
 * Silently fails — never affects user experience.
 *
 * Usage: call it once inside _app.tsx or index.tsx
 */
import { useEffect } from "react";
import { useRouter } from "next/router";

export function useVisitorTracking() {
  const router = useRouter();

  useEffect(() => {
    // Fire and forget — don't await, don't block render
    fetch("/api/track-visit", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: router.asPath }),
    }).catch(() => {
      // Silently swallow any network errors
    });
  // Only runs once per page load (router.asPath as dep is fine for SPA nav too)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);
}
