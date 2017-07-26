// @flow
import React from 'react';
import glamorous from 'glamorous';

import AnimeItemLoading from './Item/Loading';
import AnimeItem from './Item/Normal';

import type { AnimeStateType } from '../../types/animeTypes';

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

export default ({ animesData, isFetching }: AnimeStateType): React$Element<any> => (
  <div>

    {isFetching && (
      <ListWrapper>
        <AnimeItemLoading />
        <AnimeItemLoading />
      </ListWrapper>
    )}
    {!isFetching && (
      <ListWrapper>
        {animesData.map(anime => <AnimeItem key={anime.id} {...anime} />)}
      </ListWrapper>
    )}
  </div>
);
