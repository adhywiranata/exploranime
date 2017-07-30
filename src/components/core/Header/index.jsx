// @flow
import React from 'react';

import { PlainLink } from '../Links';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';

import { HeaderWrapper, LogoBold, LogoReg, HamburgerIcon, SearchIcon } from './style';

export default ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean, toggleNavbar: any }): React$Element<any> => (
  <HeaderWrapper>
    <HamburgerIcon
      src={NavBurger}
      onClick={toggleNavbar}
      alt={'nav'}
    />
    <PlainLink to={'/'}>
      <LogoBold>Explor</LogoBold>
      <LogoReg>anime</LogoReg>
    </PlainLink>
    <SearchIcon src={NavSearch} alt={'search'} isNavbarActive={isNavbarActive} />
  </HeaderWrapper>
);
