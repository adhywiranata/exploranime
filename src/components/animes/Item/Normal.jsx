// @flow
import React from 'react';

import { ItemWrapper, ItemCover, Score } from './style';
import { PlainLink, Link } from '../../core/Links';

export default ({ attributes }): React$Element<any> => {
  return (
  <ItemWrapper>
    <PlainLink to={'/'}>
      <ItemCover
        src={attributes.posterImage.small}
        alt={attributes.titles.en}
      />
    </PlainLink>
    <Link to={'/'}>{attributes.titles.en}</Link>
    <Score>9.05</Score>
  </ItemWrapper>
);
}
