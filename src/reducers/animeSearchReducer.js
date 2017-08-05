// @flow
import { fromJS } from 'immutable';

import {
  FETCH_ANIMES_BY_KEYWORD_LOADING,
  FETCH_ANIMES_BY_KEYWORD_SUCCESS,
  FETCH_ANIMES_BY_KEYWORD_FAILURE,
} from '../actions/constants';

const initialState = fromJS({
  searchResultsData: [],
  searchTerm: '',
  isFetching: false,
});

const fetchAnimesLoading = (state) => {
  return state.set('isFetching', true);
};

const fetchAnimesSuccess = (state) => {
  return state.set('searchResultsData', fromJS([]));
};

const fetchAnimesFailure = (state) => {
  return state;
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_ANIMES_LOADING: return fetchAnimesLoading(state);
    case FETCH_ANIMES_SUCCESS: return fetchAnimesSuccess(state, payload);
    case FETCH_ANIMES_FAILURE: return fetchAnimesFailure(state);
    default: return state;
  }
};
