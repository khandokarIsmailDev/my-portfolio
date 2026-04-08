/**
 * /api/track-visit
 *
 * Called by the frontend on every page load.
 * Stores visit data in Upstash Redis (free tier).
 *
 * Data stored per visit:
 *   - timestamp
 *   - country / city (from Vercel geo headers)
 *   - device type (parsed from User-Agent)
 *   - referrer
 *   - page path
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// Simple device detection from User-Agent string
function getDevice(ua: string): string {
  if (/mobile|android|iphone|ipad/i.test(ua)) return "Mobile";
  if (/tablet/i.test(ua)) return "Tablet";
  return "Desktop";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const now   = new Date();
    const today = now.toISOString().split("T")[0]; // "2025-04-08"

    // Vercel injects these geo headers automatically on Pro/Hobby
    const country = (req.headers["x-vercel-ip-country"] as string)         || "Unknown";
    const city    = (req.headers["x-vercel-ip-city"]    as string)         || "Unknown";
    const ua      = (req.headers["user-agent"]           as string)         || "";
    const referrer= (req.headers["referer"]              as string)         || "Direct";
    const { page = "/" } = req.body as { page?: string };

    const device = getDevice(ua);

    // Build visit object
    const visit = {
      ts:       now.toISOString(),
      country,
      city:     decodeURIComponent(city),
      device,
      page,
      referrer: referrer.slice(0, 120), // trim long referrers
    };

    // Store visit in a Redis list keyed by date
    // Key: "visits:2025-04-08"  → list of JSON strings
    await redis.lpush(`visits:${today}`, JSON.stringify(visit));

    // Also increment a simple total counter
    await redis.incr("visits:total");

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[track-visit]", err);
    // Fail silently — never break the portfolio for the visitor
    return res.status(200).json({ ok: false });
  }
}
