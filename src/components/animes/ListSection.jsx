import React from 'react';

import { H1 } from '../core/TextHeadings';
import AnimeList from './AnimeList';

export default () => (
  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column' }}>
    <H1 style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
      <strong>Popular</strong>
      <span style={{ color: '#CCCCCC' }}>Animes</span>
    </H1>
    <AnimeList />
  </div>
);
