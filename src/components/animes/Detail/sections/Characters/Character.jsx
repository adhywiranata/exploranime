import React from 'react';

import {
  DetailContent,
  CharacterWrapper,
  ExpandContentText,
  CharacterAvatar,
  CharacterDescription,
} from '../../styles';
import LazyImage from '../../../../core/LazyImage';

export default ({ description }) => (
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
);
