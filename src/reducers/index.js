// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';

export default combineReducers({
  router: routerReducer,
  animes: animeReducer,
});

