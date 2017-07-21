import React from 'react';
import glamorous from 'glamorous';

import AnimeItem from './AnimeItem';

const ListWrapper = glamorous.div({
  padding: 5,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  '@media(min-width: 1200px)': {
    padding: '5px 150px',
  },
  '@media(min-width: 768px)': {
    padding: '5px 80px',
  },
});

export default () => (
  <div>
    <ListWrapper>
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
      <AnimeItem />
    </ListWrapper>
  </div>
);
