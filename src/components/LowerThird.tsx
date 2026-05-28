import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type LowerThirdProps = {
  title: string;
  subtitle: string;
};

export const LowerThird: React.FC<LowerThirdProps> = ({title, subtitle}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, durationInFrames: 25});
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: 60,
        right: 60,
        bottom: 220,
        transform: `translateY(${interpolate(entrance, [0, 1], [80, 0])}px)`,
        opacity
      }}
    >
      <div style={{padding: '22px 28px', backgroundColor: 'rgba(7, 17, 29, 0.82)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.18)'}}>
        <div style={{fontSize: 44, fontWeight: 700, color: '#ffffff', marginBottom: 8}}>{title}</div>
        <div style={{fontSize: 30, color: '#d5deeb', lineHeight: 1.35}}>{subtitle}</div>
      </div>
    </div>
  );
};
