import React from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame} from 'remotion';

export const Closing: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 80}}>
      <Img src="/logo.png" style={{width: 140, marginBottom: 30, opacity: interpolate(frame, [0, 20], [0, 1])}} />
      <div style={{fontSize: 64, color: '#ffffff', lineHeight: 1.2, fontWeight: 650}}>Este foi o resumo do dia</div>
      <div style={{fontSize: 38, marginTop: 20, color: '#d4deea'}}>Atualização contínua nas próximas edições</div>
      <div style={{fontSize: 26, marginTop: 36, color: '#76c7ff', letterSpacing: 2}}>NEWSROOM BRASIL • 28 MAI 2026</div>
    </AbsoluteFill>
  );
};
