import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The official icon, inlined — ImageResponse can't fetch from /public. */
const appIcon =
  "data:image/png;base64," +
  readFileSync(
    join(process.cwd(), "src/app/apple-icon.png"),
  ).toString("base64");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 50% -10%, #0f3d27 0%, transparent 60%), linear-gradient(160deg, #07140e 0%, #050505 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={appIcon}
            alt=""
            width={64}
            height={64}
            style={{ borderRadius: "18px" }}
          />
          <div style={{ display: "flex", color: "white", fontSize: "40px", fontWeight: 700 }}>
            {SITE.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "1000px",
            }}
          >
            Habits that survive a bad week.
          </div>
          <div
            style={{
              display: "flex",
              color: "#22C55E",
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            {SITE.tagline} · {SITE.platform}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
