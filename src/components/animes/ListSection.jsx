// @flow
import React from 'react';

import SectionHeading from '../core/section/SectionHeading';
import AnimesContainer from '../../containers/AnimesContainer';

export default (): React$Element<any> => (
  <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column' }}>
    <SectionHeading label={'Popular Animes'} />
    <AnimesContainer />
  </div>
);
