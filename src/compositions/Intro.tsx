import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Intro: React.FC<{title: string}> = ({title}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const zoom = interpolate(frame, [0, 120], [1.08, 1], {extrapolateRight: 'clamp'});
  const rise = spring({frame, fps, durationInFrames: 35});

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 80}}>
      <Img src="/logo.png" style={{width: 170, marginBottom: 38, opacity: interpolate(frame, [0, 20], [0, 1]), transform: `scale(${zoom})`}} />
      <div style={{fontSize: 32, letterSpacing: 3, color: '#7cc6ff', fontWeight: 700, marginBottom: 20}}>EDIÇÃO ESPECIAL</div>
      <div style={{fontSize: 72, lineHeight: 1.12, textAlign: 'center', color: '#ffffff', fontWeight: 650, transform: `translateY(${interpolate(rise, [0, 1], [60, 0])}px)`}}>
        {title}
      </div>
      <div style={{position: 'absolute', top: 70, right: 80, color: '#d2def0', fontSize: 28}}>20:26 BRT</div>
    </AbsoluteFill>
  );
};
