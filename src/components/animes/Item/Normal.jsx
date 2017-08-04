// @flow
import React from 'react';

import { ItemWrapper, Score } from './style';
import { PlainLink, Link } from '../../core/Links';
import LazyImage from '../../core/LazyImage';

export default ({ id, attributes }): React$Element<any> => {
  return (
  <ItemWrapper style={{ background: '#EEEEEE' }}>
    <PlainLink to={`/anime/${id}`} style={{ backgroundColor: '#eee' }}>
      <LazyImage
        src={attributes.posterImage.small}
        alt={attributes.titles.en}
        style={{ width: '100%', height: 220 }}
      />
    </PlainLink>
    <div style={{ width: '90%', background: '#FFFFFF', height: 100, padding: '0 20px', paddingTop: 20, paddingBottom: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' , justifyContents: 'space-between' }}>
      <Link to={`/anime/${id}`} style={{ fontSize: '0.8rem', textAlign: 'center', flex: 1 }}>
        {/*attributes.titles.en !== '' ? attributes.titles.en : attributes.titles.en_jp*/}
        {attributes.canonicalTitle.substr(0, 35)}
        {attributes.canonicalTitle.length >= 35 && '...'}
      </Link>
      <Score style={{ flex: 1 }}>{attributes.averageRating}</Score>
    </div>
  </ItemWrapper>
);
}
