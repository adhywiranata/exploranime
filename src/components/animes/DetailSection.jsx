// @flow
import React from 'react';

import Cover from './Detail/Cover';
import Detail from './Detail/Content';

export default (): React$Element<any> => (
  <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
    <Cover />
    <Detail />
  </div>
);
