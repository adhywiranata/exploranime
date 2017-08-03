// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';
import animeDetailsReducer from './animeDetailsReducer';

export default combineReducers({
  router: routerReducer,
  animes: animeReducer,
  animeDetails: animeDetailsReducer,
});
