// @flow
import React from 'react';

import { PlainLink } from '../Links';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';
import CloseIcon from './close.svg';

import { HeaderWrapper, LogoBold, LogoReg, HamburgerIcon, SearchIcon, SearchInput,
MobileSearchModal, CloseSearchIcon, } from './style';

type Props = {
  isNavbarActive: boolean,
  isSearchActive: boolean,
  toggleNavbar: any,
};

export default ({ isNavbarActive, isSearchActive, toggleNavbar, toggleSearch }: Props): React$Element<any> => (
  <HeaderWrapper isSearchActive={isSearchActive}>
    <HamburgerIcon
      src={NavBurger}
      onClick={toggleNavbar}
      isSearchActive={isSearchActive}
      alt={'nav'}
    />
    {!isSearchActive && (
      <PlainLink to={'/'}>
        <LogoBold>Explor</LogoBold>
        <LogoReg>anime</LogoReg>
      </PlainLink>
    )}
    {isSearchActive && (
      <SearchInput type={'text'} placeholder={'Search for animes...'} />
    )}
    <SearchIcon
      src={NavSearch}
      alt={'search'}
      isNavbarActive={isNavbarActive}
      isSearchActive={isSearchActive}
      onClick={toggleSearch}
    />
    <CloseSearchIcon
      src={CloseIcon}
      alt={'close'}
      isNavbarActive={isNavbarActive}
      isSearchActive={isSearchActive}
      onClick={toggleSearch}
    />
  </HeaderWrapper>
);
