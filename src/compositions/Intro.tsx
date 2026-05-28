import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Intro: React.FC<{title: string}> = ({title}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const zoom = interpolate(frame, [0, 120], [1.08, 1], {extrapolateRight: 'clamp'});
  const rise = spring({frame, fps, durationInFrames: 35});

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 80}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 38,
          opacity: interpolate(frame, [0, 20], [0, 1]),
          transform: `scale(${zoom})`
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: 'linear-gradient(135deg, #e31b3f, #0ea5e9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: -1,
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)'
          }}
        >
          N
        </div>

        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1}}>
          <span
            style={{
              color: '#ffffff',
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: -0.5
            }}
          >
            NEWS
          </span>

          <span
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1.2
            }}
          >
            BRASIL
          </span>
        </div>
      </div>
      <div style={{fontSize: 32, letterSpacing: 3, color: '#7cc6ff', fontWeight: 700, marginBottom: 20}}>EDIÇÃO ESPECIAL</div>
      <div style={{fontSize: 72, lineHeight: 1.12, textAlign: 'center', color: '#ffffff', fontWeight: 650, transform: `translateY(${interpolate(rise, [0, 1], [60, 0])}px)`}}>
        {title}
      </div>
      <div style={{position: 'absolute', top: 70, right: 80, color: '#d2def0', fontSize: 28}}>20:26 BRT</div>
    </AbsoluteFill>
  );
};
