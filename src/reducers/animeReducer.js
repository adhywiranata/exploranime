// @flow
type AnimeStateType = {
  animesData: number[],
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
