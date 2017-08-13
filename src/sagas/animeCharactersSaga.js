import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimesCharactersLoading as fetchCharactersLoadingActionCreator,
  fetchAnimesCharactersSuccess as fetchCharactersSuccessActionCreator,
  fetchAnimesCharactersFailure as fetchCharactersFailureActionCreator,
} from '../actions/animeCharacterActions';

import {
  fetchKitsuAnimeCharactersByKeyword,
} from '../config/apis';

import { FETCH_ANIMES_CHARACTERS_BY_ANIME } from '../actions/constants';

export function* fetchAnimeCharacters(action) {
  yield put(fetchCharactersLoadingActionCreator());
  const animesData = yield call(fetchKitsuAnimeCharactersByKeyword, action.payload);
  try {
    yield put(fetchCharactersSuccessActionCreator(animesData.data));
  } catch (e) {
    yield put(fetchCharactersFailureActionCreator());
  }
}

export function* watchFetchAnimeCharacters() {
  yield takeEvery(FETCH_ANIMES_CHARACTERS_BY_ANIME, fetchAnimeCharacters);
}
