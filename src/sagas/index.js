import { all } from 'redux-saga/effects';

import { watchFetchAnimes } from './animeSaga';

export default function* rootSaga() {
  yield all([
    watchFetchAnimes(),
  ]);
}
