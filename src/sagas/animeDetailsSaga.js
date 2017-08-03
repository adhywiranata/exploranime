import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimeDetailsLoading as fetchAnimeDetailsLoadingActionCreator,
  fetchAnimeDetailsSuccess as fetchAnimeDetailsSuccessActionCreator,
  fetchAnimeDetailsFailure as fetchAnimeDetailsFailureActionCreator,
} from '../actions/animeActions';

import {
  fetchKitsuAnimeDetails,
} from '../config/apis';

import { FETCH_ANIME_DETAILS } from '../actions/constants';

export function* fetchAnimeDetails(action) {
  yield put(fetchAnimeDetailsLoadingActionCreator());
  const animesData = yield call(fetchKitsuAnimeDetails, action.payload);
  try {
    yield put(fetchAnimeDetailsSuccessActionCreator(animesData.data));
  } catch (e) {
    yield put(fetchAnimeDetailsFailureActionCreator());
  }
}

export function* watchFetchAnimeDetails() {
  yield takeEvery(FETCH_ANIME_DETAILS, fetchAnimeDetails);
}
