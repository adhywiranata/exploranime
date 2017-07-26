// @flow
type Anime = {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
};

type AnimeStateType = {
  animesData: Anime[],
  isFetching: boolean,
};

type ActionCreatorType = {
  type: string,
};

const initialState = {
  animesData: [],
  isFetching: false,
};

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    default: return state;
  }
};
