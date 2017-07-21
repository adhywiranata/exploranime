import React from 'react';

import Link from '../Link';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';

import { HeaderWrapper, LogoBold, LogoReg } from './style';

export default () => (
  <HeaderWrapper>
    <img src={NavBurger} style={{ width: 30, height: 30 }} alt={'nav'} />
    <Link to={'/'}>
      <LogoBold>Explor</LogoBold>
      <LogoReg>anime</LogoReg>
    </Link>
    <img src={NavSearch} style={{ width: 20, height: 20 }} alt={'search'} />
  </HeaderWrapper>
);
