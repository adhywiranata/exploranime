import axios from 'axios';

export const fetchKitsuAnimesPaginated = (offset = 0) => {
  return axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}&sort=-averageRating`);
}
