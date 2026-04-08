/**
 * /api/send-daily-digest
 *
 * Vercel Cron Job — runs every day at 9:00 PM Bangladesh time (15:00 UTC).
 * Reads yesterday's visits from Upstash Redis and sends a beautiful
 * HTML email to ismailkhandokar0@gmail.com via Resend.
 *
 * Secured with CRON_SECRET env variable.
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

const redis  = Redis.fromEnv();
const resend = new Resend(process.env.RESEND_API_KEY);

interface Visit {
  ts:       string;
  country:  string;
  city:     string;
  device:   string;
  page:     string;
  referrer: string;
}

// Build a clean summary from raw visit list
function buildSummary(visits: Visit[]) {
  const countryMap: Record<string, number> = {};
  const deviceMap:  Record<string, number> = {};
  const pageMap:    Record<string, number> = {};

  for (const v of visits) {
    const loc = v.city !== "Unknown" ? `${v.city}, ${v.country}` : v.country;
    countryMap[loc]   = (countryMap[loc]   || 0) + 1;
    deviceMap[v.device] = (deviceMap[v.device] || 0) + 1;
    pageMap[v.page]   = (pageMap[v.page]   || 0) + 1;
  }

  const topLocations = Object.entries(countryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const devices = Object.entries(deviceMap)
    .sort((a, b) => b[1] - a[1]);

  const topPages = Object.entries(pageMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return { topLocations, devices, topPages };
}

// Build beautiful HTML email
function buildEmail(
  date: string,
  total: number,
  totalAllTime: number,
  visits: Visit[]
): string {
  const { topLocations, devices, topPages } = buildSummary(visits);

  const locationRows = topLocations
    .map(
      ([loc, count]) => `
        <tr>
          <td style="padding:8px 12px;color:#7a9cc0;font-size:13px;">🌍 ${loc}</td>
          <td style="padding:8px 12px;color:#e8f0fe;font-size:13px;font-weight:600;text-align:right;">${count}</td>
        </tr>`
    )
    .join("");

  const deviceRows = devices
    .map(
      ([dev, count]) => `
        <tr>
          <td style="padding:8px 12px;color:#7a9cc0;font-size:13px;">
            ${dev === "Mobile" ? "📱" : dev === "Tablet" ? "📟" : "🖥️"} ${dev}
          </td>
          <td style="padding:8px 12px;color:#e8f0fe;font-size:13px;font-weight:600;text-align:right;">${count}</td>
        </tr>`
    )
    .join("");

  const pageRows = topPages
    .map(
      ([pg, count]) => `
        <tr>
          <td style="padding:8px 12px;color:#7a9cc0;font-size:13px;">📄 ${pg || "/"}</td>
          <td style="padding:8px 12px;color:#e8f0fe;font-size:13px;font-weight:600;text-align:right;">${count}</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#050a12;font-family:'Roboto',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050a12;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1220 0%,#0f1c2e 100%);border:1px solid #1a2d45;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
            <div style="display:inline-block;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:10px;padding:8px 14px;margin-bottom:16px;">
              <span style="color:#3b82f6;font-size:12px;font-family:monospace;letter-spacing:2px;">PORTFOLIO ANALYTICS</span>
            </div>
            <h1 style="color:#e8f0fe;font-size:28px;font-weight:700;margin:0 0 6px;">Daily Visitor Report</h1>
            <p style="color:#7a9cc0;font-size:14px;margin:0;">${date}</p>
          </td>
        </tr>

        <!-- Stats row -->
        <tr>
          <td style="background:#0a1220;border-left:1px solid #1a2d45;border-right:1px solid #1a2d45;padding:24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding:0 8px 0 0;">
                  <div style="background:#0f1c2e;border:1px solid #1a2d45;border-radius:12px;padding:20px;text-align:center;">
                    <p style="color:#7a9cc0;font-size:11px;font-family:monospace;letter-spacing:1px;margin:0 0 6px;">TODAY'S VISITS</p>
                    <p style="color:#3b82f6;font-size:42px;font-weight:900;margin:0;line-height:1;">${total}</p>
                  </div>
                </td>
                <td width="50%" style="padding:0 0 0 8px;">
                  <div style="background:#0f1c2e;border:1px solid #1a2d45;border-radius:12px;padding:20px;text-align:center;">
                    <p style="color:#7a9cc0;font-size:11px;font-family:monospace;letter-spacing:1px;margin:0 0 6px;">ALL TIME TOTAL</p>
                    <p style="color:#10b981;font-size:42px;font-weight:900;margin:0;line-height:1;">${totalAllTime}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Locations -->
        ${locationRows ? `
        <tr>
          <td style="background:#0a1220;border-left:1px solid #1a2d45;border-right:1px solid #1a2d45;padding:0 24px 20px;">
            <div style="background:#0f1c2e;border:1px solid #1a2d45;border-radius:12px;overflow:hidden;">
              <div style="padding:14px 16px;border-bottom:1px solid #1a2d45;">
                <span style="color:#e8f0fe;font-size:13px;font-weight:600;">Visitor Locations</span>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">${locationRows}</table>
            </div>
          </td>
        </tr>` : ""}

        <!-- Devices -->
        ${deviceRows ? `
        <tr>
          <td style="background:#0a1220;border-left:1px solid #1a2d45;border-right:1px solid #1a2d45;padding:0 24px 20px;">
            <div style="background:#0f1c2e;border:1px solid #1a2d45;border-radius:12px;overflow:hidden;">
              <div style="padding:14px 16px;border-bottom:1px solid #1a2d45;">
                <span style="color:#e8f0fe;font-size:13px;font-weight:600;">Devices Used</span>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">${deviceRows}</table>
            </div>
          </td>
        </tr>` : ""}

        <!-- Pages -->
        ${pageRows ? `
        <tr>
          <td style="background:#0a1220;border-left:1px solid #1a2d45;border-right:1px solid #1a2d45;padding:0 24px 20px;">
            <div style="background:#0f1c2e;border:1px solid #1a2d45;border-radius:12px;overflow:hidden;">
              <div style="padding:14px 16px;border-bottom:1px solid #1a2d45;">
                <span style="color:#e8f0fe;font-size:13px;font-weight:600;">Pages Visited</span>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">${pageRows}</table>
            </div>
          </td>
        </tr>` : ""}

        <!-- Footer -->
        <tr>
          <td style="background:#0a1220;border:1px solid #1a2d45;border-top:none;border-radius:0 0 16px 16px;padding:20px 24px;text-align:center;">
            <p style="color:#3d5a7a;font-size:12px;font-family:monospace;margin:0;">
              khandokar-ismail.vercel.app · Automated by Vercel Cron
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verify cron secret to prevent unauthorized calls
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const today     = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const dateKey   = yesterday.toISOString().split("T")[0];
    const dateLabel = yesterday.toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    // Fetch visits from Redis
    const rawVisits = await redis.lrange(`visits:${dateKey}`, 0, -1);
    const totalAllTime = (await redis.get<number>("visits:total")) || 0;

    // Parse stored JSON strings
    const visits: Visit[] = rawVisits.map((v) =>
      typeof v === "string" ? JSON.parse(v) : v
    );

    const total = visits.length;

    // No visits? Send a simple "no activity" email
    if (total === 0) {
      await resend.emails.send({
        from:    "Portfolio Analytics <onboarding@resend.dev>",
        to:      "ismailkhandokar0@gmail.com",
        subject: `📊 Portfolio Report: No visits on ${dateLabel}`,
        html:    `<p style="font-family:Arial;color:#333;">No visitors yesterday (${dateLabel}). Total all-time: ${totalAllTime}</p>`,
      });
      return res.status(200).json({ ok: true, visits: 0 });
    }

    const html = buildEmail(dateLabel, total, totalAllTime, visits);

    await resend.emails.send({
      from:    "Portfolio Analytics <onboarding@resend.dev>",
      to:      "ismailkhandokar0@gmail.com",
      subject: `📊 ${total} visitor${total !== 1 ? "s" : ""} on your portfolio · ${dateLabel}`,
      html,
    });

    return res.status(200).json({ ok: true, visits: total });
  } catch (err) {
    console.error("[send-daily-digest]", err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
