import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const moveA = interpolate(frame, [0, 1350], [-120, 120]);
  const moveB = interpolate(frame, [0, 1350], [120, -120]);
  const opacity = interpolate(frame, [0, 60, 1290, 1350], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #07111f 0%, #0b1f33 38%, #102f46 70%, #07111f 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity,
          background:
            "radial-gradient(circle at 20% 20%, rgba(40, 130, 180, 0.30), transparent 34%), radial-gradient(circle at 80% 60%, rgba(180, 25, 45, 0.18), transparent 30%)",
          transform: `translateX(${moveA}px)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          right: -420 + moveB,
          top: 180,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: -260 + moveA,
          bottom: -180,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(38, 166, 210, 0.20), rgba(38, 166, 210, 0.04) 50%, transparent 72%)",
        }}
