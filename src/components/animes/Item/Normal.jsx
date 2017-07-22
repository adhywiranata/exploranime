import React from 'react';

import { ItemWrapper, ItemCover } from './style';
import { PlainLink, Link } from '../../core/Links';

export default () => (
  <ItemWrapper>
    <PlainLink to={'/'}>
      <ItemCover
        src={'https://media.kitsu.io/anime/poster_images/12/small.jpg?1490541434'}
        alt={'one piece'}
      />
    </PlainLink>
    <Link to={'/'}>One Piece</Link>
  </ItemWrapper>
);
