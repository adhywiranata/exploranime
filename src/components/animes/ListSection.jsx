// @flow
import React from 'react';

import AnimesContainer from '../../containers/AnimesContainer';
import { H1 } from '../core/TextHeadings';

export default (): React$Element<any> => (
  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column' }}>
    <H1 style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
      <strong>Popular</strong>
      <span style={{ color: '#CCCCCC' }}>Animes</span>
    </H1>
    <AnimesContainer />
  </div>
);
