import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getCharacters } from '../../../../reducers/animeCharactersReducer';
import { H3 } from '../../../core/TextHeadings';
import LazyImage from '../../../core/LazyImage';

import {
  DetailSectionWrapper,
  DetailContentWrapper,
  DetailContent,
  ExpandContentText,
  LoadingText,
  CharacterWrapper,
  CharacterAvatar,
  CharacterDescription,
} from '../styles';

import { fetchAnimesCharacters } from '../../../../actions/animeCharacterActions';

const Characters = ({ characters, description }) => (
  <DetailSectionWrapper>
    <H3>Characters</H3>
    <DetailContentWrapper style={{ flexDirection: 'column' }}>
      {JSON.stringify(characters)}
      <CharacterWrapper>
        <CharacterAvatar>
          <LazyImage src={''} width={'100%'} alt={'img'} style={{ height: 100 }} />
        </CharacterAvatar>
        <CharacterDescription>
          <LoadingText style={{ width: '50%' }} />
          <DetailContent>
            <LoadingText />
          </DetailContent>
        </CharacterDescription>
      </CharacterWrapper>
      <CharacterWrapper>
        <CharacterAvatar>
          <LazyImage src={'https://media.kitsu.io/characters/images/57048/original.jpg?1483096805'} width={'100%'} alt={'img'} />
        </CharacterAvatar>
        <CharacterDescription>
          <span>Saitama</span>
          <DetailContent>
            <ExpandContentText>See More</ExpandContentText>
            {description.split('<br />').map((desc, index) => <p key={index}>{desc}</p>)}
          </DetailContent>
        </CharacterDescription>
      </CharacterWrapper>
    </DetailContentWrapper>
  </DetailSectionWrapper>
);

const componentLifeCycle = {
  componentDidMount() {
    this.props.fetchCharacters(3936);
  },
};

const mapStateToProps = state => ({
  characters: getCharacters(state.animeCharacters),
  description: `
      Race: Human <br />
      Age: 25<br />
      Height: 175 cm (5)<br />
      Weight: 70 kg (154 lbs)<br />
      Location: Z-City<br />
      Abilities: Superhuman physical powers<br />
      Occupation: Superhero<br />
      Level: <br />
      <span>C-Class (Rank 388 - 342 - 5 - 1)<br />
      B-Class (Rank 101 - 63 -33 - 7)<br />
      A-Class (Rank 39)</span><br />
      Affiliation: Hero Association<br />
      Partner(s): Genos<br /><br />
      Saitama is the most powerful hero alive. Having apparently trained himself to superhuman condition, Saitama faces an existential crisis as he is now too powerful to gain any thrill from his heroic deeds.<br/><br/>He is registered with the Heroes Association as a C-Class Superhero and is tasked to defend Z-City against Mysterious Beings.<br/><br/>Saitama is usually deliberately drawn in a simpler style than other characters, with a very rounded head and only a simple mouth and eyes. When drawn in a more 'action-oriented' style with more detail, Saitama is revealed to have sharp features, dangerous looking eyes, and chiseled musculature. His costume is a plain yellow jumpsuit with a short zipper at the collar and a belt. The costume is finished out by an ensemble of red boots and gloves, and a white cape.<br/><br/>For a superhero, Saitama is rather laid back. Because even the mightiest foes pose no challenge to him, he doesn't take his hero work very seriously. In spite of this, he is constantly searching for an opponent that can challenge him, since his superhero work is beginning to bore him because it's too easy. The combination of his attitude, unstoppable strength, and distinctively simple and 'unimpressive' appearance often cause his battles to become anticlimactic. Saitama will usually allow his opponents to rant about their motives and power up into their strongest forms before suddenly and nonchalantly obliterating them with one punch.<br/><br/>(Source: One Punch-Man Wikia)
  `,
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters: animeId => dispatch(fetchAnimesCharacters(animeId)),
});

export default compose(
  connect(null, mapDispatchToProps),
  lifecycle(componentLifeCycle),
  connect(mapStateToProps),
)(Characters);
