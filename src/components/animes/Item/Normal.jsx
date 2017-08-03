// @flow
import React from 'react';

import { ItemWrapper, Score } from './style';
import { PlainLink, Link } from '../../core/Links';
import LazyImage from '../../core/LazyImage';

export default ({ attributes }): React$Element<any> => {
  return (
  <ItemWrapper>
    <PlainLink to={'/'}>
      <LazyImage
        src={attributes.posterImage.small}
        alt={attributes.titles.en}
        style={{ width: '100%', height: 230 }}
      />
    </PlainLink>
    <div style={{ height: 100, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' , justifyContents: 'space-between' }}>
      <Link to={'/'} style={{ fontSize: '0.8rem', textAlign: 'center', flex: 1 }}>
        {/*attributes.titles.en !== '' ? attributes.titles.en : attributes.titles.en_jp*/}
        {attributes.canonicalTitle.substr(0, 35)}
        {attributes.canonicalTitle.length >= 35 && '...'}
      </Link>
      <Score style={{ flex: 1 }}>{attributes.averageRating}</Score>
    </div>
  </ItemWrapper>
);
}
