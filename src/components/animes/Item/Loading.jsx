import React from 'react';

import { ItemWrapper, ItemCoverLoading, ItemTitleWrapper, ItemScoreWrapper, ItemTitleLoading } from './style';

export default () => (
  <ItemWrapper>
    <ItemCoverLoading />
    <ItemTitleWrapper>
      <ItemTitleLoading />
    </ItemTitleWrapper>
    <ItemScoreWrapper>
      <ItemTitleLoading />
    </ItemScoreWrapper>
  </ItemWrapper>
);
