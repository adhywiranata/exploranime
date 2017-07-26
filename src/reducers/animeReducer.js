// @flow
import { fromJS } from 'immutable';

import type { AnimeStateType, ActionCreatorType } from '../types/animeTypes';

const initialState = fromJS({
  animesData: [
    { id: 1, title: 'One Piece', description: '', imageUrl: '' },
    { id: 2, title: 'Senki Senki', description: '', imageUrl: '' },
  ],
  isFetching: false,
});

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    default: return state;
  }
};

export const getAllAnimes = (animesState: AnimeStateType) => {
  return animesState.get('animesData').toArray().map(obj => obj.toObject());
};
