import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getCharacters, getFetchingStatus } from '../../../../../reducers/animeCharactersReducer';
import { H3 } from '../../../../core/TextHeadings';

import CharacterLoading from './CharacterLoading';
// import Character from './Character';
import CharacterContainer from './CharacterContainer';

import {
  DetailSectionWrapper,
  DetailContentWrapper,
} from '../../styles';

import { fetchAnimesCharacters } from '../../../../../actions/animeCharacterActions';

const Characters = ({ characters, isFetching }) => (
  <DetailSectionWrapper>
    <H3>Characters</H3>
    <DetailContentWrapper style={{ flexDirection: 'column' }}>
      {isFetching && <CharacterLoading />}
      {!isFetching && characters.map(character => (
        <CharacterContainer key={character.id} character={character} />
      ))}
    </DetailContentWrapper>
  </DetailSectionWrapper>
);

const componentLifeCycle = {
  componentDidMount() {
    this.props.fetchCharacters(this.props.animeId);
  },
  shouldComponentUpdate() {
    return true;
  },
};

const mapStateToProps = ({ animeCharacters }) => ({
  characters: getCharacters(animeCharacters),
  isFetching: getFetchingStatus(animeCharacters),
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters: animeId => dispatch(fetchAnimesCharacters(animeId)),
});

export default compose(
  connect(null, mapDispatchToProps),
  lifecycle(componentLifeCycle),
  connect(mapStateToProps),
)(Characters);
