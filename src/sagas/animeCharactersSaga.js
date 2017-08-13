import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchAnimesCharactersLoading as fetchCharactersLoadingActionCreator,
  fetchAnimesCharactersSuccess as fetchCharactersSuccessActionCreator,
  fetchAnimesCharactersFailure as fetchCharactersFailureActionCreator,
  fetchAnimeCharacterDetailsLoading as fetchCharacterDetailsLoadingActionCreator,
  fetchAnimeCharacterDetailsSuccess as fetchCharacterDetailsSuccessActionCreator,
  fetchAnimeCharacterDetailsFailure as fetchCharacterDetailsFailureActionCreator,
} from '../actions/animeCharacterActions';

import {
  fetchKitsuAnimeCharactersByAnimeId,
  fetchKitsuAnimeCharacterById,
} from '../config/apis';

import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME,
  FETCH_ANIME_CHARACTER_DETAILS,
} from '../actions/constants';

export function* fetchAnimeCharacters(action) {
  yield put(fetchCharactersLoadingActionCreator());
  const charactersData = yield call(fetchKitsuAnimeCharactersByAnimeId, action.payload);
  try {
    yield put(fetchCharactersSuccessActionCreator(charactersData.data.data));
  } catch (e) {
    yield put(fetchCharactersFailureActionCreator());
  }
}

export function* watchFetchAnimeCharacters() {
  yield takeEvery(FETCH_ANIMES_CHARACTERS_BY_ANIME, fetchAnimeCharacters);
}

export function* fetchAnimeCharacterDetails(action) {
  const characterId = action.payload;
  yield put(fetchCharacterDetailsLoadingActionCreator(characterId));
  const characterData = yield call(fetchKitsuAnimeCharacterById, characterId);
  try {
    yield put(fetchCharacterDetailsSuccessActionCreator(characterId, characterData.data.data));
  } catch (e) {
    yield put(fetchCharacterDetailsFailureActionCreator());
  }
}

export function* watchFetchAnimeCharacterDetails() {
  yield takeEvery(FETCH_ANIME_CHARACTER_DETAILS, fetchAnimeCharacterDetails);
}
