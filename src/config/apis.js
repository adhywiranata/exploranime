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

export const fetchKitsuAnimeCharactersByKeyword = () => (
  axios.get(`https://kitsu.io/api/edge/anime-characters/${36317}/character`)
);
