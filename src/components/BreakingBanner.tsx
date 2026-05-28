import React from 'react';

export const BreakingBanner: React.FC<{text: string}> = ({text}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 110,
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #8f1c2d 0%, #b3253a 45%, #8f1c2d 100%)',
        borderTop: '2px solid rgba(255,255,255,0.22)'
      }}
    >
      <div style={{backgroundColor: '#ffffff', color: '#8f1c2d', fontWeight: 800, fontSize: 30, padding: '12px 20px', marginLeft: 24, borderRadius: 10}}>
        BREAKING
      </div>
      <div style={{marginLeft: 20, color: '#fff', fontSize: 32, fontWeight: 500, letterSpacing: 0.3}}>{text}</div>
    </div>
  );
};
