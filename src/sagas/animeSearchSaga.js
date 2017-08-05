import { put, call, takeEvery } from 'redux-saga/effects';

import {
  setAnimeSearchTerm as setAnimeSearchTermActionCreator,
  fetchAnimesByKeywordSuccess as fetchAnimesByKeywordSuccessActionCreator,
  fetchAnimesByKeywordFailure as fetchAnimesByKeywordFailureActionCreator,
} from '../actions/animeActions';

import {
  fetchKitsuAnimeSearch,
} from '../config/apis';

import { FETCH_ANIMES_BY_KEYWORD } from '../actions/constants';

export function* fetchAnimesByKeyword(action) {
  yield put(setAnimeSearchTermActionCreator(action.payload));
  const animesData = yield call(fetchKitsuAnimeSearch, action.payload);
  try {
    // TODO handle if no anime id found!
    yield put(fetchAnimesByKeywordSuccessActionCreator(animesData.data.data));
  } catch (e) {
    yield put(fetchAnimesByKeywordFailureActionCreator());
  }
}

export function* watchFetchAnimeSearchByKeyword() {
  yield takeEvery(FETCH_ANIMES_BY_KEYWORD, fetchAnimesByKeyword);
}
