// @flow
import { fromJS } from 'immutable';

import { FETCH_ANIMES_LOADING, FETCH_ANIMES_SUCCESS } from '../actions/constants';
import type { AnimeStateType, ActionCreatorType } from '../types/animeTypes';

const initialState = fromJS({
  animesData: [],
  dataCursor: 0,
  isFetching: false,
});

const fetchAnimesLoading = (state) => {
  return state.set('isFetching', true);
};

const fetchAnimesSuccess = (state, animesData) => {
  // console.log(animesData.data);
  const newAnimesData = state.get('animesData').concat(fromJS(animesData.data));
  const newDataCursor = state.get('dataCursor') + 10;
  return state
  .set('isFetching', false)
  .set('dataCursor', newDataCursor)
  .set('animesData', newAnimesData);
};

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    case FETCH_ANIMES_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_SUCCESS: return fetchAnimesSuccess(state, action.payload);
    default: return state;
  }
};

export const getAllAnimes = (animesState: AnimeStateType) => {
  return animesState.get('animesData').toArray().map(obj => obj.toJS());
};

export const getFetchingStatus = (animesState: AnimeStateType) => {
  return animesState.get('isFetching');
};
