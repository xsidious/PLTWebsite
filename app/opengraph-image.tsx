import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "PDT Unlimited — Commercial Finishing Contractor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #060f1c 0%, #0b1b33 55%, #132a4a 100%)",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(225, 18, 26, 0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -60,
            bottom: -120,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.04)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={88}
            height={88}
            style={{ objectFit: "contain" }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              PDT Unlimited
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 22,
                marginTop: 4,
              }}
            >
              Commercial Finishing Contractor
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              color: "#e1121a",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Painting · Drywall · Finish Carpentry · Tile
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            Professional finishes. Scalable workforce. Reliable execution.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 24,
              marginTop: 24,
            }}
          >
            Serving Broward County & Palm Beach County · Wellington, FL
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
