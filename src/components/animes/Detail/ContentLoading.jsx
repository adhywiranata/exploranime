// @flow
import React from 'react';

import { H3 } from '../../core/TextHeadings';
import LazyImage from '../../core/LazyImage';

export default (): React$Element<any> => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20, boxSizing: 'border-box', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', width: '50%' }}>
        <LazyImage src={''} style={{ height: 220 }} />
      </div>

      <div style={{ padding: '0px 20px', width: '100%' }}>
        <H3>Summary</H3>
        <p style={{ color: '#666666', fontSize: '0.8rem', textAlign: 'justify' }}>
          Loading...
        </p>
      </div>
    </div>
  </div>
);
