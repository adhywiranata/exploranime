// @flow
import React from 'react';

import LazyImage from '../../core/LazyImage';
import { LoadingText } from './styles';

export default (): React$Element<any> => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20, boxSizing: 'border-box', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', width: '50%' }}>
        <LazyImage src={''} style={{ height: 220 }} />
      </div>

      <div style={{ padding: '0px 20px', width: '100%' }}>
        <LoadingText />
        <LoadingText />
        <LoadingText />
        <LoadingText />
        <LoadingText />
      </div>
    </div>
  </div>
);
