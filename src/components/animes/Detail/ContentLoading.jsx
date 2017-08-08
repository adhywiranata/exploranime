// @flow
import React from 'react';

import LazyImage from '../../core/LazyImage';

export default (): React$Element<any> => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20, boxSizing: 'border-box', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', width: '50%' }}>
        <LazyImage src={''} style={{ height: 220 }} />
      </div>

      <div style={{ padding: '0px 20px', width: '100%' }}>
        <div style={{ background: '#888888', width: '30vw', height: 20, borderRadius: 20, margin: '20px 0' }} />
        <div style={{ background: '#dddddd', width: '90vw', height: 20, borderRadius: 20, margin: '5px auto' }} />
        <div style={{ background: '#dddddd', width: '90vw', height: 20, borderRadius: 20, margin: '5px auto' }} />
        <div style={{ background: '#dddddd', width: '90vw', height: 20, borderRadius: 20, margin: '5px auto' }} />
        <div style={{ background: '#dddddd', width: '90vw', height: 20, borderRadius: 20, margin: '5px auto' }} />
        <div style={{ background: '#dddddd', width: '90vw', height: 20, borderRadius: 20, margin: '5px auto' }} />
      </div>
    </div>
  </div>
);
