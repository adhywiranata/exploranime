import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimesLoading as fetchAnimesLoadingActionCreator,
} from '../actions/animeActions';

import { FETCH_ANIMES } from '../actions/constants';

export function* fetchAnimes() {
  yield put(fetchAnimesLoadingActionCreator());
  try {
    // do
  } catch(e) {
    // do
  }
}

export function* watchFetchAnimes() {
  yield takeEvery(FETCH_ANIMES, fetchAnimes);
}
