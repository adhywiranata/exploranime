import React from 'react';

import { ModalWrapper, SearchHeading, BigIcon } from './styles';
import searchIcon from './navigation-search.svg';

export default ({ isSearchActive }) => (
  <ModalWrapper isSearchActive={isSearchActive}>
    <BigIcon src={searchIcon} isSearchActive={isSearchActive} />
    <SearchHeading>Search Your Animes Here!</SearchHeading>
  </ModalWrapper>
);
