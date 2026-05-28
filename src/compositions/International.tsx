import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {NewsCard} from '../components/NewsCard';
import {LowerThird} from '../components/LowerThird';

export const International: React.FC<{items: string[]}> = ({items}) => {
  return (
    <AbsoluteFill style={{padding: '220px 60px 180px 60px'}}>
      <div style={{fontSize: 30, color: '#7cc6ff', letterSpacing: 2, marginBottom: 14, fontWeight: 700}}>MUNDO</div>
      {items.map((item, index) => (
        <NewsCard key={item} index={index} headline={item} region="INTERNACIONAL" />
      ))}
      <Sequence from={240} durationInFrames={180}>
        <LowerThird title="Panorama Global" subtitle="Mercados acompanham riscos geopolíticos e logística internacional." />
      </Sequence>
    </AbsoluteFill>
  );
};
