// @flow

export type Anime = {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
};

export type AnimeStateType = {
  animesData: Anime[],
  isFetching: boolean,
};
