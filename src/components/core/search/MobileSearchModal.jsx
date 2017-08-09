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
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} key={1} className={'hidden-icon'} alt={'search'} />,
      <SearchHeading key={2}>Search Your Animes Here!</SearchHeading>,
    ])}
    { searchTerm !== '' && isFetching && ([
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} key={3} />,
      <SearchHeading key={4}>LOADING...</SearchHeading>,
    ])}
    { searchTerm !== '' && !isFetching && searchResults.length > 0 && ([
      <SearchResultHeading key={5}>SEARCH RESULTS</SearchResultHeading>,
      <ResultsList key={6}>
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
      <BigIcon src={searchIcon} isSearchActive={isSearchActive} key={7} className={'hidden-icon'} alt={'search'} />,
      <SearchHeading key={8}>Anime not found! Find other animes.</SearchHeading>,
    ])}
  </ModalWrapper>
);
