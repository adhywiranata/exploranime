// @flow
import React from 'react';

import SearchInputContainer from '../../../containers/SearchInputContainer';
import { PlainLink } from '../Links';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';
import CloseIcon from './close.svg';
import {
  HeaderWrapper,
  LogoBold,
  LogoReg,
  HamburgerIcon,
  SearchIcon,
  CloseSearchIcon,
} from './style';

type Props = {
  isNavbarActive: boolean,
  isSearchActive: boolean,
  toggleNavbar: any,
  toggleSearch: any,
};

export default ({
  isNavbarActive,
  isSearchActive,
  toggleNavbar,
  toggleSearch,
}: Props): React$Element<any> => (
  <HeaderWrapper isSearchActive={isSearchActive} className={'header'}>
    <HamburgerIcon
      src={NavBurger}
      onClick={toggleNavbar}
      isSearchActive={isSearchActive}
      alt={'nav'}
      className={'nav-icon'}
    />
    {!isSearchActive && (
      <PlainLink to={'/'}>
        <LogoBold className={'logo'}>Explor</LogoBold>
        <LogoReg className={'logo'}>anime</LogoReg>
      </PlainLink>
    )}
    {isSearchActive && (
      <SearchInputContainer type={'text'} placeholder={'Search for animes...'} />
    )}
    <SearchIcon
      src={NavSearch}
      alt={'search'}
      isNavbarActive={isNavbarActive}
      isSearchActive={isSearchActive}
      onClick={toggleSearch}
      className={'nav-icon'}
    />
    <CloseSearchIcon
      src={CloseIcon}
      alt={'close'}
      isNavbarActive={isNavbarActive}
      isSearchActive={isSearchActive}
      onClick={toggleSearch}
      className={'nav-icon hidden-icon'}
    />
  </HeaderWrapper>
);
