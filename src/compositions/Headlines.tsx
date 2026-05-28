import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {NewsCard} from '../components/NewsCard';
import {LowerThird} from '../components/LowerThird';

export const Headlines: React.FC<{items: string[]}> = ({items}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{padding: '220px 60px 160px 60px'}}>
      <div style={{fontSize: 30, color: '#7cc6ff', letterSpacing: 2, marginBottom: 14, fontWeight: 700}}>BRASIL AGORA</div>
      <div style={{opacity: interpolate(frame, [0, 15], [0, 1])}}>
        {items.slice(0, 5).map((item, index) => (
          <NewsCard key={item} index={index} headline={item} region="BRASIL" />
        ))}
      </div>
      <Sequence from={180} durationInFrames={250}>
        <LowerThird title="Pontos de atenção" subtitle="Senado deve discutir impactos econômicos e regras de transição." />
      </Sequence>
    </AbsoluteFill>
  );
};
