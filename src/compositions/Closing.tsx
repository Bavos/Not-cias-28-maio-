import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {AnimatedBackground} from "../components/AnimatedBackground";

export const Closing: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25, 245, 270], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 45], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <AnimatedBackground />

      <div
        style={{
          position: "absolute",
          top: 90,
          left: 70,
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity,
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 14,
            background: "linear-gradient(135deg, #e31b3f, #0ea5e9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 900,
            letterSpacing: -1,
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          }}
        >
          N
        </div>

        <div style={{display: "flex", flexDirection: "column", lineHeight: 1}}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: -0.5,
            }}
          >
            NEWS
          </span>

          <span
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              marginTop: 6,
            }}
          >
            28 MAIO 2026
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          top: 480,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <div
          style={{
            color: "#e31b3f",
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Encerramento
        </div>

        <h1
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: 78,
            lineHeight: 0.98,
            fontWeight: 900,
            letterSpacing: -3,
          }}
        >
          Estas foram as principais notícias do dia.
        </h1>

        <p
          style={{
            marginTop: 36,
            color: "rgba(255,255,255,0.78)",
            fontSize: 32,
            lineHeight: 1.25,
            fontWeight: 500,
            maxWidth: 820,
          }}
        >
          Brasil e mundo em resumo, com visual jornalístico moderno, direto e sem áudio.
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          bottom: 150,
          height: 80,
          borderRadius: 22,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          alignItems: "center",
          padding: "0 28px",
          opacity,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Fim da edição • 45 segundos • Sem áudio
        </span>
      </div>
    </AbsoluteFill>
  );
};
