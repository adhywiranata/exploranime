// @flow

type animeStateType = {
  animesData: number[],
  isFetching: boolean,
};

type actionCreatorType = {
  type: string,
};

const initialState = {
  animesData: [],
  isFetching: false,
};

export default (
  state: ?animeStateType = initialState,
  action: actionCreatorType
): ?animeStateType => {
  switch (action.type) {
    default: return state;
  }
};
