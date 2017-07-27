import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimesLoading as fetchAnimesLoadingActionCreator,
  fetchAnimesSuccess as fetchAnimesSuccessActionCreator,
  fetchAnimesFailure as fetchAnimesFailureActionCreator,
} from '../actions/animeActions';

import { FETCH_ANIMES } from '../actions/constants';

export function* fetchAnimes() {
  yield put(fetchAnimesLoadingActionCreator());
  try {
    yield put(fetchAnimesSuccessActionCreator());
  } catch (e) {
    yield put(fetchAnimesFailureActionCreator());
  }
}

export function* watchFetchAnimes() {
  yield takeEvery(FETCH_ANIMES, fetchAnimes);
}
