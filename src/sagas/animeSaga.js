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

export function* fetchAnimes(action) {
  yield put(fetchAnimesLoadingActionCreator());
  const animesData = yield call(fetchKitsuAnimesPaginated, action.payload);
  try {
    yield put(fetchAnimesSuccessActionCreator(animesData.data));
  } catch (e) {
    yield put(fetchAnimesFailureActionCreator());
  }
}

export function* watchFetchAnimes() {
  yield takeEvery(FETCH_ANIMES, fetchAnimes);
}
