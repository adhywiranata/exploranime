// @flow
import { fromJS } from 'immutable';

import {
  FETCH_ANIME_DETAILS_LOADING,
  FETCH_ANIME_DETAILS_SUCCESS,
  FETCH_ANIME_DETAILS_FAILURE,
} from '../actions/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_DETAILS_LOADING: return state;
    case FETCH_ANIME_DETAILS_SUCCESS: return state;
    case FETCH_ANIME_DETAILS_FAILURE: return state;
    default: return state;
  }
};
