import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {AnimatedBackground} from "../components/AnimatedBackground";

const NewsLogo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "linear-gradient(135deg, #e31b3f, #0ea5e9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: -2,
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
        }}
      >
        N
      </div>

      <div style={{display: "flex", flexDirection: "column", lineHeight: 1}}>
        <span
          style={{
            color: "white",
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: -1,
          }}
        >
          NEWS
        </span>

        <span
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 2,
            marginTop: 6,
          }}
        >
          28 MAIO 2026
        </span>
      </div>
    </div>
  );
};

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const titleY = interpolate(frame, [0, 45], [60, 0], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 30, 105, 120], [0, 1, 1, 0], {
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
          opacity,
        }}
      >
        <NewsLogo />
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          top: 520,
          opacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            color: "#e31b3f",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Edição Especial
        </div>

        <h1
          style={{
            margin: 0,
            color: "white",
            fontSize: 82,
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: -4,
            maxWidth: 840,
          }}
        >
          Resumo das Notícias
        </h1>

        <div
          style={{
            marginTop: 34,
            color: "rgba(255,255,255,0.78)",
            fontSize: 34,
            fontWeight: 500,
          }}
        >
          Brasil e Mundo · 28 de maio de 2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          bottom: 120,
          height: 2,
          background:
            "linear-gradient(90deg, #e31b3f, rgba(255,255,255,0.65), transparent)",
          opacity,
        }}
      />
    </AbsoluteFill>
  );
};
