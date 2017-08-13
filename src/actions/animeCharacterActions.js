import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE,
} from './constants';

export const fetchAnimesCharacters = animeId => ({
  type: FETCH_ANIMES_CHARACTERS_BY_ANIME,
  payload: animeId,
});

export const fetchAnimesCharactersLoading = () => ({
  type: FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING,
});

export const fetchAnimesCharactersSuccess = characters => ({
  type: FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS,
  payload: characters,
});

export const fetchAnimesCharactersFailure = () => ({
  type: FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE,
});
