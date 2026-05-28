import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {AnimatedBackground} from '../components/AnimatedBackground';
import {BreakingBanner} from '../components/BreakingBanner';
import {Closing} from './Closing';
import {Headlines} from './Headlines';
import {International} from './International';
import {Intro} from './Intro';
import newsData from '../data/news.json';

export const NewsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <AnimatedBackground />

      <Sequence from={0} durationInFrames={120}>
        <Intro title={newsData.title} />
      </Sequence>

      <Sequence from={120} durationInFrames={480}>
        <Headlines items={newsData.brazil} />
      </Sequence>

      <Sequence from={600} durationInFrames={480}>
        <International items={newsData.world} />
      </Sequence>

      <Sequence from={1080} durationInFrames={270}>
        <Closing />
      </Sequence>

      <BreakingBanner text="Cobertura contínua: política, economia e cenário internacional em foco." />
    </AbsoluteFill>
  );
};
