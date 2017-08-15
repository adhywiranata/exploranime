// @flow
import { fromJS } from 'immutable';
// import { createSelector } from 'reselect';

import {
  FETCH_ANIMES_CHARACTERS_BY_ANIME_LOADING as FETCH_CHARACTERS_LOADING,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_SUCCESS as FETCH_CHARACTERS_SUCCESS,
  FETCH_ANIMES_CHARACTERS_BY_ANIME_FAILURE as FETCH_CHARACTERS_FAILURE,
  FETCH_ANIME_CHARACTER_DETAILS_LOADING as FETCH_CHARACTERS_DETAILS_LOADING,
  FETCH_ANIME_CHARACTER_DETAILS_SUCCESS as FETCH_CHARACTERS_DETAILS_SUCCESS,
  FETCH_ANIME_CHARACTER_DETAILS_FAILURE as FETCH_CHARACTERS_DETAILS_FAILURE,
} from '../actions/constants';

import type { ActionType } from '../types/reduxTypes';

const initialState = fromJS({
  charactersData: [],
  isFetching: false,
  isError: false,
});

const fetchCharactersLoading = state => state.set('isFetching', true);
const fetchCharactersSuccess = (state, characters) => state
  .set('charactersData', fromJS(
    characters.map(character => ({ ...character, isFetching: false })),
  ))
  .set('isFetching', false);
const fetchCharactersFailure = state => state.set('isError', true);

const fetchCharacterDetailsLoading = (state: any, characterId: any) => {
  const characters = state.get('charactersData').toJS();
  const charactersIds = characters.map(chara => chara.id);
  const characterToUpdateIndex = charactersIds.indexOf(characterId);
  characters[characterToUpdateIndex] = { ...characters[characterToUpdateIndex], isFetching: true };
  return state.set('charactersData', fromJS(characters));
};

const fetchCharacterDetailsSuccess = (
  state: any,
  { characterId, character }: { characterId: number, character: any},
) => {
  // const characters = state.get('charactersData').toJS();
  // const charactersIds = characters.map(chara => chara.id);
  // const characterToUpdateIndex = charactersIds.indexOf(characterId);
  // characters[characterToUpdateIndex] = { ...characters[characterToUpdateIndex], ...character };
  // return state.set('charactersData', fromJS(characters));
  const characters = state.get('charactersData').toJS();
  const charactersIds = characters.map(chara => chara.id);
  const characterToUpdateIndex = charactersIds.indexOf(characterId);
  // console.log(character);
  characters[characterToUpdateIndex] = {
    ...characters[characterToUpdateIndex],
    isFetching: false,
    character,
  };
  return state.set('charactersData', fromJS(characters));
};

export default (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_CHARACTERS_LOADING: return fetchCharactersLoading(state);
    case FETCH_CHARACTERS_SUCCESS: return fetchCharactersSuccess(state, action.payload);
    case FETCH_CHARACTERS_FAILURE: return fetchCharactersFailure(state);
    case FETCH_CHARACTERS_DETAILS_LOADING:
      return fetchCharacterDetailsLoading(state, action.payload);
    case FETCH_CHARACTERS_DETAILS_SUCCESS:
      return fetchCharacterDetailsSuccess(state, action.payload);
    case FETCH_CHARACTERS_DETAILS_FAILURE: return state;
    default: return state;
  }
};

export const getCharacters = (state: any) => state.get('charactersData').toJS();
export const getFetchingStatus = (state: any) => state.get('isFetching');

export const getCharacterDetails = (state: any, charId: any) => {
  const char = state.get('charactersData').toJS().filter(character => character.id === charId)[0];
  if (char.character) {
    if (char.character.attributes.image === null) {
      char.character.attributes.image = { original: '' };
    }
    if (char.character.attributes.description === null) {
      char.character.attributes.image = { description: '' };
    }
    return char.character;
  }
  return null;
};

export const getCharacterFetchingStatus = (state: any, charId: number) => {
  const char = state.get('charactersData').toJS().filter(character => character.id === charId)[0];
  if (char.isFetching) {
    return char.isFetching;
  }
  return false;
};

// export const getCharacterFetchingStatus = createSelector(
//   getCharacters,
//   (characters, charId) => {
//     console.log('====== the selectors ====');
//     console.log(characters);
//     console.log(charId);
//     const char = characters.filter(character => character.id === charId)[0];
//     if (char.isFetching) {
//       return char.isFetching;
//     }
//     return false;
//   },
// );
