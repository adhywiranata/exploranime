// @flow
import { fromJS } from 'immutable';

import { FETCH_ANIMES_LOADING, FETCH_ANIMES_SUCCESS } from '../actions/constants';
import type { AnimeStateType } from '../types/animeTypes';
import type { ActionType } from '../types/reduxTypes';

const initialState = fromJS({
  animesData: [],
  dataCursor: 0,
  isFetching: false,
});

const fetchAnimesLoading = (state: any) => state.set('isFetching', true);
const fetchAnimesSuccess = (state: any, animesData: any) => {
  const newAnimesData = state.get('animesData').concat(fromJS(animesData.data));
  const newDataCursor = state.get('dataCursor') + 10;
  return state
  .set('isFetching', false)
  .set('dataCursor', newDataCursor)
  .set('animesData', newAnimesData);
};

export default (
  state: ?AnimeStateType = initialState,
  action: ActionType,
): ?AnimeStateType => {
  switch (action.type) {
    case FETCH_ANIMES_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_SUCCESS: return fetchAnimesSuccess(state, action.payload);
    default: return state;
  }
};

export const getAllAnimes = (animesState: AnimeStateType) => animesState.get('animesData').toArray().map(obj => obj.toJS());
export const getFetchingStatus = (animesState: AnimeStateType) => animesState.get('isFetching');
export const getAPICursorOffset = (animeState: AnimeStateType) => animeState.get('dataCursor');
