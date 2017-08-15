import React from 'react';

import {
  DetailContent,
  LoadingText,
  CharacterWrapper,
  CharacterAvatar,
  CharacterDescription,
} from '../../styles';
import LazyImage from '../../../../core/LazyImage';

export default () => (
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
);
