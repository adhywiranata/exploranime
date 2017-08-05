// @flow
import React from 'react';
import LazyImage from '../LazyImage';

export default ({ title, image }) => (
  <div style={{ borderBottom: '1px solid rbga(0,0,0,0.1)', padding: 10, boxSizing: 'border-box', backgroundColor: 'white', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
    <div style={{ width: 40 }}>
      <LazyImage src={image} style={{ height: 50, width: 40 }} />
    </div>
    <div style={{ fontSize: '0.8rem', padding: '0 10px' }}>
      {title}
    </div>
  </div>
);
