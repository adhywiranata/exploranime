import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimesLoading as fetchAnimesLoadingActionCreator,
  fetchAnimesSuccess as fetchAnimesSuccessActionCreator,
  fetchAnimesFailure as fetchAnimesFailureActionCreator,
} from '../actions/animeActions';

import {
  fetchKitsuAnimesPaginated,
} from '../config/apis';

import { FETCH_ANIMES } from '../actions/constants';

export function* fetchAnimes() {
  yield put(fetchAnimesLoadingActionCreator());
  try {
    const animesData = yield call(fetchKitsuAnimesPaginated);
    yield put(fetchAnimesSuccessActionCreator(animesData));
  } catch (e) {
    yield put(fetchAnimesFailureActionCreator());
  }
}

export function* watchFetchAnimes() {
  yield takeEvery(FETCH_ANIMES, fetchAnimes);
}
