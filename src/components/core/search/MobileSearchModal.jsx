// @flow
import React from 'react';

import SearchResultItem from './SearchResultItem';
import { ModalWrapper, SearchHeading, BigIcon, SearchResultHeading, ResultsList } from './styles';
import searchIcon from './navigation-search.svg';

type Props = {
  isSearchActive: boolean,
  handleSearchResultLink: any,
  isFetching: boolean,
  searchResults: any,
  searchTerm: string,
};

export default ({
  isSearchActive,
  handleSearchResultLink,
  isFetching,
  searchResults,
  searchTerm,
}: Props) => (
  <ModalWrapper isSearchActive={isSearchActive}>
    { searchTerm === '' && ([
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />,
      <SearchHeading>Search Your Animes Here!</SearchHeading>,
    ])}
    { searchTerm !== '' && isFetching && ([
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />,
      <SearchHeading>LOADING...</SearchHeading>,
    ])}
    { searchTerm !== '' && !isFetching && searchResults.length > 0 && ([
      <SearchResultHeading>SEARCH RESULTS</SearchResultHeading>,
      <ResultsList>
        {searchResults.map(anime => (
          <SearchResultItem
            key={anime.id}
            handleSearchResultLink={handleSearchResultLink}
            {...anime}
          />
        ))}
      </ResultsList>,
    ])}
    { searchTerm !== '' && !isFetching && searchResults.length === 0 && ([
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} />,
      <SearchHeading>Anime not found! Find other animes.</SearchHeading>,
    ])}
  </ModalWrapper>
);
