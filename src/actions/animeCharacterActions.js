import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE,
  FETCH_ANIME_CHARACTER_DETAILS,
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

export const fetchAnimeCharacterDetails = characterId => ({
  type: FETCH_ANIME_CHARACTER_DETAILS,
  payload: characterId,
});
