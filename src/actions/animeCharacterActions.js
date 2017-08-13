import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE,
  FETCH_ANIME_CHARACTER_DETAILS,
  FETCH_ANIME_CHARACTER_DETAILS_LOADING,
  FETCH_ANIME_CHARACTER_DETAILS_SUCCESS,
  FETCH_ANIME_CHARACTER_DETAILS_FAILURE,
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

export const fetchAnimeCharacterDetailsLoading = () => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_LOADING,
});

export const fetchAnimeCharacterDetailsSuccess = character => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_SUCCESS,
  payload: character,
});

export const fetchAnimeCharacterDetailsFailure = () => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_FAILURE,
});
