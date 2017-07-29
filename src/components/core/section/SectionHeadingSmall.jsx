import React from 'react';

import { H2 } from '../TextHeadings';

export default ({ label }) => (
  <H2 style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
    <span style={{ color: '#CCCCCC' }}>{label}</span>
  </H2>
);
