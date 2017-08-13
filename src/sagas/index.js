import { all } from 'redux-saga/effects';

import { watchFetchAnimes } from './animeSaga';
import { watchFetchAnimeDetails } from './animeDetailsSaga';
import { watchFetchAnimeSearchByKeyword } from './animeSearchSaga';
import { watchFetchAnimeCharacters } from './animeCharactersSaga';

export default function* rootSaga() {
  yield all([
    watchFetchAnimes(),
    watchFetchAnimeDetails(),
    watchFetchAnimeSearchByKeyword(),
    watchFetchAnimeCharacters(),
  ]);
}
