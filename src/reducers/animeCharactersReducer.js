// @flow
import { fromJS } from 'immutable';

import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING as FETCH_CHARACTERS_LOADING,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS as FETCH_CHARACTERS_SUCCESS,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE as FETCH_CHARACTERS_FAILURE,
} from '../actions/constants';

const initialState = fromJS({
  charactersData: [],
  isFetching: false,
  isError: false,
});

const fetchCharacters = state => state.set('isFetching', true);
const fetchCharactersSuccess = (state, characters) => state
  .set('charactersData', fromJS(characters))
  .set('isFetching', false);
const fetchCharactersFailure = state => state.set('isError', true);

export default (state = initialState, action) => {
  switch (action.payload) {
    case FETCH_CHARACTERS_LOADING: return fetchCharacters(state);
    case FETCH_CHARACTERS_SUCCESS: return fetchCharactersSuccess(state, action.payload);
    case FETCH_CHARACTERS_FAILURE: return fetchCharactersFailure(state);
    default: return state;
  }
};
