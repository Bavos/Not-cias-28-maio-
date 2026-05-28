import React from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const driftX = interpolate(frame, [0, durationInFrames], [-40, 40]);
  const opacityPulse = interpolate(frame % 120, [0, 60, 120], [0.2, 0.38, 0.2]);

  return (
    <AbsoluteFill style={{backgroundColor: '#081624'}}>
      <Img
        src="/background.jpg"
        style={{
          width: '110%',
          height: '110%',
          objectFit: 'cover',
          transform: `translate(${driftX}px, -20px)`,
          filter: 'brightness(0.35) saturate(0.9)'
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(50, 132, 186, 0.2), transparent 40%), linear-gradient(180deg, rgba(3,10,18,0.45) 0%, rgba(3,10,18,0.85) 100%)'
        }}
      />
      <AbsoluteFill
        style={{
          opacity: opacityPulse,
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.04) 65%, rgba(255,255,255,0) 100%)'
        }}
      />
    </AbsoluteFill>
  );
};
