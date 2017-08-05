// @flow
import { fromJS } from 'immutable';

import {
  SET_ANIME_SEARCH_TERM,
  FETCH_ANIMES_BY_KEYWORD_LOADING,
  FETCH_ANIMES_BY_KEYWORD_SUCCESS,
  FETCH_ANIMES_BY_KEYWORD_FAILURE,
} from '../actions/constants';

const initialState = fromJS({
  searchResultsData: [],
  searchTerm: '',
  isFetching: false,
});

const setSearchTerm = (state, searchTerm) => {
  return state.set('searchTerm', searchTerm);
}

const fetchAnimesLoading = (state) => {
  return state.set('isFetching', true);
};

const fetchAnimesSuccess = (state, results) => {
  return state.set('searchResultsData', fromJS([]));
};

const fetchAnimesFailure = (state) => {
  return state;
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_ANIME_SEARCH_TERM: return setSearchTerm(state, payload);
    case FETCH_ANIMES_BY_KEYWORD_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_BY_KEYWORD_SUCCESS: return fetchAnimesSuccess(state, payload);
    case FETCH_ANIMES_BY_KEYWORD_FAILURE: return fetchAnimesFailure(state);
    default: return state;
  }
};

export const getSearchTerm = (state) => {
  return state.get('searchTerm');
};

export const getFetchingStatus = (state) => {
  return state.get('isFetching');
};

export const getSearchResults = (state) => {
  return state.get('searchResultsData').toJS();
};
