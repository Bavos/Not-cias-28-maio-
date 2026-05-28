import React from 'react';

export const NewsCard: React.FC<{headline: string; index: number; region: string}> = ({headline, index, region}) => {
  return (
    <div style={{backgroundColor: 'rgba(10,25,42,0.66)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '26px 28px', marginBottom: 18, backdropFilter: 'blur(6px)'}}>
      <div style={{fontSize: 22, color: '#77c5ff', letterSpacing: 1.2, fontWeight: 700, marginBottom: 10}}>
        {region} · {String(index + 1).padStart(2, '0')}
      </div>
      <div style={{fontSize: 38, lineHeight: 1.25, fontWeight: 550, color: '#f5f8fc'}}>{headline}</div>
    </div>
  );
};
