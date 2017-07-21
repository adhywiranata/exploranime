import React from 'react';
import glamorous from 'glamorous';

import { PlainLink, Link } from '../core/Links';

const ItemWrapper = glamorous.div({
  margin: '10px 1%',
  width: '48%',
  height: 'auto',
  borderRadius: 3,
  overflow: 'hidden',
  backgroundColor: '#F5F5F5',
});

const ItemCover = glamorous.img({
  width: '100%',
});


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
