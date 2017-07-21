import React from 'react';
import glamorous from 'glamorous';

import { PlainLink, Link } from '../core/Links';

const ItemWrapper = glamorous.div({
  margin: '5px 1%',
  width: '48%',
  height: 'auto',
  borderRadius: 3,
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '0.5px solid rgba(0,0,0,0.05)',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
  paddingBottom: 10,
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
