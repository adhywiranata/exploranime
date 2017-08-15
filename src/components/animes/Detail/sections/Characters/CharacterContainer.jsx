// @flow
import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import CharacterLoading from './CharacterLoading';
import Character from './Character';
import { fetchAnimeCharacterDetails } from '../../../../../actions/animeCharacterActions';
import {
  getCharacterDetails,
  getCharacterFetchingStatus,
} from '../../../../../reducers/animeCharactersReducer';

type Props = {
  characterData: any,
  isFetching: any,
};

const CharacterContainer = ({ characterData, isFetching }: Props) => (
  <div>
    {isFetching && <CharacterLoading />}
    {!isFetching && characterData !== null && <Character {...characterData.attributes} />}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  characterData: getCharacterDetails(state.animeCharacters, ownProps.character.id),
  isFetching: getCharacterFetchingStatus(state.animeCharacters, ownProps.character.id),
});
const mapDispatchToProps = dispatch => ({
  fetchCharacterDetails: characterId => dispatch(fetchAnimeCharacterDetails(characterId)),
});

const componentLifeCycle = {
  componentDidMount() {
    this.props.fetchCharacterDetails(this.props.character.id);
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(componentLifeCycle),
)(CharacterContainer);
