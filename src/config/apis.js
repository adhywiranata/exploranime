import axios from 'axios';

export const fetchKitsuAnimesPaginated = () => {
  return axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0`);
}
