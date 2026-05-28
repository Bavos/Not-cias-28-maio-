import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Closing: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 80}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 30,
          opacity: interpolate(frame, [0, 20], [0, 1])
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

        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1, textAlign: 'left'}}>
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
      <div style={{fontSize: 64, color: '#ffffff', lineHeight: 1.2, fontWeight: 650}}>Este foi o resumo do dia</div>
      <div style={{fontSize: 38, marginTop: 20, color: '#d4deea'}}>Atualização contínua nas próximas edições</div>
      <div style={{fontSize: 26, marginTop: 36, color: '#76c7ff', letterSpacing: 2}}>NEWSROOM BRASIL • 28 MAI 2026</div>
    </AbsoluteFill>
  );
};
