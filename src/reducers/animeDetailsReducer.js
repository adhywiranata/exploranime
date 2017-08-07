// @flow
import { fromJS } from 'immutable';

import {
  FETCH_ANIME_DETAILS_LOADING,
  FETCH_ANIME_DETAILS_SUCCESS,
  FETCH_ANIME_DETAILS_FAILURE,
} from '../actions/constants';

const initialState = fromJS({
  animeData: {},
  isFetching: false,
});

const fetchAnimeDetailsLoading = state => state.set('isFetching', true);
const fetchAnimeDetailsSuccess = (state: any, anime: any) => state
                                                            .set('animeData', fromJS(anime))
                                                            .set('isFetching', false);

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_DETAILS_LOADING: return fetchAnimeDetailsLoading(state);
    case FETCH_ANIME_DETAILS_SUCCESS: return fetchAnimeDetailsSuccess(state, action.payload);
    case FETCH_ANIME_DETAILS_FAILURE: return state;
    default: return state;
  }
};

export const getAnime = state => state.get('animeData').toJS();
export const getFetchingStatus = state => state.get('isFetching');
