// @flow
import React from 'react';

import Cover from './Detail/Cover';
import Detail from './Detail/Content';

// const initialAnime = {
//   attributes: {
//     canonicalTitle: '',
//     coverImage: '',
//   },
// };

export default ({ anime }): React$Element<any> => (
  <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
    { anime.attributes && (
      <Cover
        title={anime.attributes.canonicalTitle}
        image={anime.attributes.coverImage.original}
        coverPaddingTop={anime.attributes.coverImageTopOffset}
      />
    )}
    <Detail />
  </div>
);
