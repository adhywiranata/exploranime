// @flow
import { fromJS } from 'immutable';

import { FETCH_ANIMES } from '../actions/constants';
import type { AnimeStateType, ActionCreatorType } from '../types/animeTypes';

const initialState = fromJS({
  animesData: [
    { id: 1, title: 'One Piece', description: '', imageUrl: '' },
    { id: 2, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 3, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 4, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 5, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 6, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 7, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 8, title: 'Senki Senki', description: '', imageUrl: '' },
    { id: 9, title: 'Senki Senki', description: '', imageUrl: '' },
  ],
  isFetching: false,
});

const fetchAnimes = (state) => {
  return state.set('isFetching', true);
};

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    case FETCH_ANIMES: return fetchAnimes(state);
    default: return state;
  }
};

export const getAllAnimes = (animesState: AnimeStateType) => {
  return animesState.get('animesData').toArray().map(obj => obj.toObject());
};

export const getFetchingStatus = (animesState: AnimeStateType) => {
  return animesState.get('isFetching');
};
