import {
  FETCH_ANIMES,
  FETCH_ANIMES_LOADING,
  FETCH_ANIMES_SUCCESS,
  FETCH_ANIMES_FAILURE,
  FETCH_ANIME_DETAILS,
  FETCH_ANIME_DETAILS_LOADING,
  FETCH_ANIME_DETAILS_SUCCESS,
  FETCH_ANIME_DETAILS_FAILURE,
} from './constants';

// Action Creators for Fetch Animes List
export const fetchAnimes = offset => ({
  type: FETCH_ANIMES,
  payload: offset,
});

export const fetchAnimesLoading = () => ({
  type: FETCH_ANIMES_LOADING,
});

export const fetchAnimesSuccess = animesData => ({
  type: FETCH_ANIMES_SUCCESS,
  payload: animesData,
});

export const fetchAnimesFailure = () => ({
  type: FETCH_ANIMES_FAILURE,
});

export const fetchAnimeDetails = () => ({
  type: FETCH_ANIME_DETAILS,
});

// Action Creators for Fetching Anime Details
export const fetchAnimeDetailsLoading = () => ({
  type: FETCH_ANIME_DETAILS_LOADING,
});

export const fetchAnimeDetailsSuccess = () => ({
  type: FETCH_ANIME_DETAILS_SUCCESS,
});

export const fetchAnimeDetailsFailure = () => ({
  type: FETCH_ANIME_DETAILS_FAILURE,
});
