import React from 'react';

import SearchResultItem from './SearchResultItem';
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
  { searchResults.length > 0 && (
    <ModalWrapper isSearchActive={isSearchActive}>
      <div style={{ background: '#3A6073', width: '100%', color: 'white', padding: 10 }}>
        SEARCH RESULTS
      </div>
      <div style={{ overflow: 'scroll', height: 'auto', width: '100%' }}>
        {searchResults.map((anime, index) => <SearchResultItem key={index} {...anime} />)}
      </div>
    </ModalWrapper>
  )}
  </div>
);
