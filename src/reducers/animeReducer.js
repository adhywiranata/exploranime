// @flow
import { fromJS } from 'immutable';

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

const initialState = fromJS({
  animesData: [
    { id: 1, title: 'One Piece', description: '', imageUrl: '' },
    { id: 2, title: 'Senki Senki', description: '', imageUrl: '' },
  ],
  isFetching: false,
});

export default (
  state: ?AnimeStateType = initialState,
  action: ActionCreatorType,
): ?AnimeStateType => {
  switch (action.type) {
    default: return state;
  }
};

export const getAllAnimes = (animesState) => {
  console.log(animesState);
  return animesState.get('animesData').toArray().map(obj => obj.toObject());
};
