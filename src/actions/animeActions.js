import { FETCH_ANIMES, FETCH_ANIMES_LOADING, FETCH_ANIMES_SUCCESS, FETCH_ANIMES_FAILURE } from './constants';

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
