// @flow
import React from 'react';

import Detail from './Detail';
import { H2, H3 } from '../core/TextHeadings';

export default (): React$Element<any> => (
  <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
    <div style={{
      background: 'url("https://media.kitsu.io/anime/cover_images/10740/original.jpg?1445804501")',
      height: 100,
      width: '100%',
      padding: '50px 0',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      position: 'relative',
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        padding: 30,
        boxSizing: 'border-box',
        top: 0,
      }}>
        <H2 style={{ color: 'white', position: 'absolute', bottom: 0 }}>
          Ano hi Mita Hana No Namae Wo Bokutachi Wa Shiranai
        </H2>
      </div>
    </div>
    <Detail />
  </div>
);
