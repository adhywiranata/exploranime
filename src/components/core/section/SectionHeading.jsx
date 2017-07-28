import React from 'react';

import { H1 } from '../TextHeadings';

export default ({ label }) => {
  const words = label.split(' ');
  const strongLabel = words[0];
  const restLabel = words.slice(1).join(' ');
  return (
    <H1 style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
      <strong>{strongLabel}</strong>
      <span style={{ color: '#CCCCCC' }}>{restLabel}</span>
    </H1>
  );
}
