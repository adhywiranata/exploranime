// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';

export default (): any => combineReducers({
  router: routerReducer,
  animes: animeReducer,
});

