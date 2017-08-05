import React from 'react';

import { ModalWrapper, SearchHeading, BigIcon } from './styles';
import searchIcon from './navigation-search.svg';

export default ({ isSearchActive, searchResults, searchTerm }) => (
  <div>
  { searchTerm === '' && (
    <ModalWrapper isSearchActive={isSearchActive}>
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />
      <SearchHeading>Search Your Animes Here!</SearchHeading>
    </ModalWrapper>
  )}
  { searchTerm !== '' && (
    <ModalWrapper isSearchActive={isSearchActive}>
      list...
    </ModalWrapper>
  )}
  </div>
);
