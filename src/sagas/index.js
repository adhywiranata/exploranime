import { all } from 'redux-saga/effects';

import {
  watchFetchAnimes,
  watchFetchAnimeDetails,
} from './animeSaga';

export default function* rootSaga() {
  yield all([
    watchFetchAnimes(),
    watchFetchAnimeDetails(),
  ]);
}
