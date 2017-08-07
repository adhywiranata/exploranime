// @flow
import React from 'react';

import Cover from './Detail/Cover';
import Content from './Detail/Content';
import CoverLoading from './Detail/CoverLoading';
import ContentLoading from './Detail/ContentLoading';

type Props = {
  anime: any,
  isFetching: boolean,
};

export default ({ anime, isFetching }: Props): React$Element<any> => (
  <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
    {isFetching && ([
      <CoverLoading
        key={1}
      />,
      <ContentLoading key={2} />,
    ])}
    {!isFetching && anime.attributes && ([
      <Cover
        key={1}
        title={anime.attributes.canonicalTitle}
        image={anime.attributes.coverImage.original}
        coverPaddingTop={anime.attributes.coverImageTopOffset}
      />,
      <Content key={2} anime={anime} />,
    ])}
  </div>
);
