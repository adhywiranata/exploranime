import axios from 'axios';

export const fetchKitsuAnimesPaginated = offset => (
  axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}&sort=-averageRating`)
);
export const fetchKitsuAnimeDetails = id => (
  axios.get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
);
