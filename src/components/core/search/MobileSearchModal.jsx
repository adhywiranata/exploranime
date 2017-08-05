import React from 'react';

import SearchResultItem from './SearchResultItem';
import { ModalWrapper, SearchHeading, BigIcon } from './styles';
import searchIcon from './navigation-search.svg';

export default ({ isSearchActive, isFetching, searchResults, searchTerm }) => (
  <div>
  { searchTerm === '' && (
    <ModalWrapper isSearchActive={isSearchActive}>
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />
      <SearchHeading>Search Your Animes Here!</SearchHeading>
    </ModalWrapper>
  )}
  { searchTerm !== '' && (
    <ModalWrapper isSearchActive={isSearchActive}>
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />
      <SearchHeading>LOADING...</SearchHeading>
    </ModalWrapper>
  )}
  { searchTerm !== '' && !isFetching && (
    <ModalWrapper isSearchActive={isSearchActive} style={{ justifyContent: 'flex-start', backgroundColor: 'white' }}>
      <div style={{ background: '#3A6073', width: '100%', color: 'white', padding: 10, boxSizing: 'border-box' }}>
        SEARCH RESULTS
      </div>
      <div style={{ overflow: 'scroll', height: 'auto', width: '100%', backgroundColor: 'white' }}>
        {searchResults.map((anime, index) => <SearchResultItem key={index} {...anime} />)}
      </div>
    </ModalWrapper>
  )}
  { searchTerm !== '' && !isFetching && searchResults.length === 0 && (
    <ModalWrapper isSearchActive={isSearchActive}>
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />
      <SearchHeading>Anime not found! Find other animes.</SearchHeading>
    </ModalWrapper>
  )}
  </div>
);
