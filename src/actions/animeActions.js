import {
  FETCH_ANIMES,
  FETCH_ANIMES_LOADING,
  FETCH_ANIMES_SUCCESS,
  FETCH_ANIMES_FAILURE,
  FETCH_ANIME_DETAILS,
  FETCH_ANIME_DETAILS_LOADING,
  FETCH_ANIME_DETAILS_SUCCESS,
  FETCH_ANIME_DETAILS_FAILURE,
  SET_ANIME_SEARCH_TERM,
  RESET_ANIME_SEARCH_TERM,
  FETCH_ANIMES_BY_KEYWORD,
  FETCH_ANIMES_BY_KEYWORD_LOADING,
  FETCH_ANIMES_BY_KEYWORD_SUCCESS,
  FETCH_ANIMES_BY_KEYWORD_FAILURE,
} from './constants';

// Action Creators for Fetch Animes List
export const fetchAnimes = offset => ({
  type: FETCH_ANIMES,
  payload: offset,
});

export const fetchAnimesSuccess = animesData => ({
  type: FETCH_ANIMES_SUCCESS,
  payload: animesData,
});

export const fetchAnimesFailure = () => ({
  type: FETCH_ANIMES_FAILURE,
});

export const fetchAnimeDetails = id => ({
  type: FETCH_ANIME_DETAILS,
  payload: id,
});

// Action Creators for Fetching Anime Details
export const fetchAnimesLoading = () => ({
  type: FETCH_ANIMES_LOADING,
});

export const fetchAnimeDetailsLoading = () => ({
  type: FETCH_ANIME_DETAILS_LOADING,
});

export const fetchAnimeDetailsSuccess = animeData => ({
  type: FETCH_ANIME_DETAILS_SUCCESS,
  payload: animeData,
});

export const fetchAnimeDetailsFailure = () => ({
  type: FETCH_ANIME_DETAILS_FAILURE,
});

// Action Creators for Fetching Anime Based on Keyword
export const setAnimeSearchTerm = keyword => ({
  type: SET_ANIME_SEARCH_TERM,
  payload: keyword,
});

export const resetAnimeSearchTerm = () => ({
  type: RESET_ANIME_SEARCH_TERM,
});

export const fetchAnimesByKeyword = keyword => ({
  type: FETCH_ANIMES_BY_KEYWORD,
  payload: keyword,
});

export const fetchAnimesByKeywordLoading = () => ({
  type: FETCH_ANIMES_BY_KEYWORD_LOADING,
});

export const fetchAnimesByKeywordSuccess = animes => ({
  type: FETCH_ANIMES_BY_KEYWORD_SUCCESS,
  payload: animes,
});

export const fetchAnimesByKeywordFailure = () => ({
  type: FETCH_ANIMES_BY_KEYWORD_FAILURE,
});
