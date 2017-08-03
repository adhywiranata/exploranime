import { all } from 'redux-saga/effects';

import {
  watchFetchAnimes,
} from './animeSaga';

import {
  watchFetchAnimeDetails,
} from './animeDetailsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchAnimes(),
    watchFetchAnimeDetails(),
  ]);
}
