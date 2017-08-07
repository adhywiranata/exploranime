// @flow
import React from 'react';

import { H2 } from '../../core/TextHeadings';

export default () => (
  <div style={{
    background: 'gray',
    height: 60,
    width: '100%',
    padding: '50px 0',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    position: 'relative',
    backgroundPosition: '0 40px',
  }}
  >
    <div style={{
      background: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      padding: 30,
      boxSizing: 'border-box',
      top: 0,
    }}
    >
      <H2 style={{ color: 'white', position: 'absolute', bottom: 0, textAlign: 'center' }}>
        {''}
      </H2>
    </div>
  </div>
);
