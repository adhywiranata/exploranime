import axios from 'axios';

export const fetchKitsuAnimesPaginated = offset => (
  axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}&sort=-averageRating`)
);

export const fetchKitsuAnimeSearch = keyword => (
  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${keyword}`)
);

export const fetchKitsuAnimeDetails = id => (
  axios.get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
);

export const fetchKitsuAnimeCharactersByAnimeId = animeId => (
  axios.get(`https://kitsu.io/api/edge/anime/${animeId}/anime-characters`)
);

export const fetchKitsuAnimeCharacterById = id => (
  axios.get(`https://kitsu.io/api/edge/anime-characters/${id}/character`)
);
