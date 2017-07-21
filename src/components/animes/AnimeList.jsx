import React from 'react';

import AnimeItem from './AnimeItem';

export default () => (
  <div>
    list...
    <div style={{ padding: 5, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
    </div>
  </div>
);
