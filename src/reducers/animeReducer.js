// @flow
import { fromJS } from 'immutable';

import { FETCH_ANIMES_LOADING, FETCH_ANIMES_SUCCESS } from '../actions/constants';
import type { AnimeStateType, ActionCreatorType } from '../types/animeTypes';

const initialState = fromJS({
  animesData: [
    {
      id: 1,
      title: 'One Piece',
      description: 'wow',
      imageUrl: 'https://media.kitsu.io/anime/poster_images/12/small.jpg?1490541434',
    },
    {
      id: 2,
      title: 'Piece One',
      description: 'test',
      imageUrl: 'https://media.kitsu.io/anime/poster_images/12/small.jpg?1490541434',
    },
    {
      id: 3,
      title: 'One One',
      description: 'oke',
      imageUrl: 'https://media.kitsu.io/anime/poster_images/12/small.jpg?1490541434',
    },
    {
      id: 4,
      title: 'Piece Piece',
      description: 'yeah',
      imageUrl: 'https://media.kitsu.io/anime/poster_images/12/small.jpg?1490541434',
    },
  ],
  isFetching: false,
});

const fetchAnimesLoading = (state) => {
  return state.set('isFetching', true);
};

const fetchAnimesSuccess = (state) => {
  return state.set('isFetching', false);
};

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    case FETCH_ANIMES_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_SUCCESS: return fetchAnimesSuccess(state);
    default: return state;
  }
};

export const getAllAnimes = (animesState: AnimeStateType) => {
  return animesState.get('animesData').toArray().map(obj => obj.toObject());
};

export const getFetchingStatus = (animesState: AnimeStateType) => {
  return animesState.get('isFetching');
};
