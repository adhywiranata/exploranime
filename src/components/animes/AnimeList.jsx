import React from 'react';
import glamorous from 'glamorous';

import AnimeItem from './Item/Normal';

const ListWrapper = glamorous.div({
  padding: '0 5px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  '@media(min-width: 1200px)': {
    padding: '0px 150px',
  },
  '@media(min-width: 768px)': {
    padding: '0px 80px',
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
