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

export const fetchAnimesCharactersLoading = animeId => ({
  type: FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING,
  payload: animeId,
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

export const fetchAnimeCharacterDetailsLoading = characterId => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_LOADING,
  payload: characterId,
});

export const fetchAnimeCharacterDetailsSuccess = (characterId, character) => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_SUCCESS,
  payload: { characterId, character },
});

export const fetchAnimeCharacterDetailsFailure = characterId => ({
  type: FETCH_ANIME_CHARACTER_DETAILS_FAILURE,
  payload: characterId,
});
