// @flow
import React from 'react';

import {
  DetailContent,
  CharacterWrapper,
  ExpandContentText,
  CharacterAvatar,
  CharacterDescription,
} from '../../styles';
import LazyImage from '../../../../core/LazyImage';

type Props = {
  name: string,
  image: string,
  description: string,
};

export default ({ name, image, description = '' }: Props) => (
  <CharacterWrapper>
    <CharacterAvatar>
      {image.original !== null && (<LazyImage src={image.original} width={'100%'} alt={'img'} style={{ height: 114 }} />)}
      {image.original === null && (<div style={{ background: 'black', height: 114, width: '100%' }} />)}
    </CharacterAvatar>
    <CharacterDescription>
      <span>{name}</span>
      <DetailContent>
        <ExpandContentText>See More</ExpandContentText>
        {typeof (description) === 'string' && description
          .split('<br/>')
          .join('<br />')
          .split('<span class="spoiler">')
          .join('')
          .split('</span>')
          .join('')
          .split('<br />')
          .map((desc, index) => <p key={index}>{desc}</p>)}
      </DetailContent>
    </CharacterDescription>
  </CharacterWrapper>
);
