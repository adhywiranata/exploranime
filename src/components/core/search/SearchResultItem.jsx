// @flow
import React from 'react';

import LazyImage from '../LazyImage';
import { Link } from '../Links';

type Props = {
  id: number,
  title: string,
  image: string,
  handleSearchResultLink: any,
};

export default ({ id, title, image, handleSearchResultLink }: Props) => (
  <div style={{ borderBottom: '1px solid rbga(0,0,0,0.1)', padding: 10, boxSizing: 'border-box', backgroundColor: 'white', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
    <div style={{ width: 40, height: 55 }}>
      { image !== null && <LazyImage src={image} style={{ height: 50, width: 40 }} /> }
    </div>
    <div style={{ fontSize: '0.8rem', padding: '0 10px' }}>
      <Link to={`/anime/${id}`} onClick={handleSearchResultLink}>{title}</Link>
    </div>
  </div>
);
