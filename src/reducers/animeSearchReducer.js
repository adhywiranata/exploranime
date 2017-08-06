// @flow
import { fromJS } from 'immutable';

import {
  SET_ANIME_SEARCH_TERM,
  RESET_ANIME_SEARCH_TERM,
  FETCH_ANIMES_BY_KEYWORD_LOADING,
  FETCH_ANIMES_BY_KEYWORD_SUCCESS,
  FETCH_ANIMES_BY_KEYWORD_FAILURE,
} from '../actions/constants';

const initialState = fromJS({
  searchResultsData: [],
  searchTerm: '',
  isFetching: false,
});

const setSearchTerm = (state, searchTerm) => state.set('searchTerm', searchTerm).set('isFetching', true);
const resetSearchTerm = state => state.set('searchTerm', '').set('isFetching', false);
const fetchAnimesLoading = state => state.set('isFetching', true);

const fetchAnimesSuccess = (state, results) => {
  const searchResults = results.map(anime => ({
    id: anime.id,
    title: anime.attributes.canonicalTitle,
    image: anime.attributes.posterImage.tiny,
  }));
  return state
  .set('searchResultsData', fromJS(searchResults))
  .set('isFetching', false);
};

const fetchAnimesFailure = state => state;

export default (state: any = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case SET_ANIME_SEARCH_TERM: return setSearchTerm(state, payload);
    case RESET_ANIME_SEARCH_TERM: return resetSearchTerm(state);
    case FETCH_ANIMES_BY_KEYWORD_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_BY_KEYWORD_SUCCESS: return fetchAnimesSuccess(state, payload);
    case FETCH_ANIMES_BY_KEYWORD_FAILURE: return fetchAnimesFailure(state);
    default: return state;
  }
};

export const getSearchTerm = (state: any) => state.get('searchTerm');
export const getFetchingStatus = (state: any) => state.get('isFetching');
export const getSearchResults = (state: any) => state.get('searchResultsData').toJS();
