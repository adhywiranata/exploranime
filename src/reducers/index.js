// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import animeReducer from './animeReducer';
import animeDetailsReducer from './animeDetailsReducer';
import animeSearchReducer from './animeSearchReducer';
import animeCharactersReducer from './animeCharactersReducer';

export default combineReducers({
  router: routerReducer,
  animes: animeReducer,
  animeDetails: animeDetailsReducer,
  animeSearch: animeSearchReducer,
  animeCharacters: animeCharactersReducer,
});
