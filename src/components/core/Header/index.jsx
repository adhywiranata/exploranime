// @flow
import React from 'react';

import { PlainLink } from '../Links';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';

import { HeaderWrapper, LogoBold, LogoReg } from './style';

export default (): React$Element<any> => (
  <HeaderWrapper>
    <img src={NavBurger} style={{ width: 30, height: 30 }} alt={'nav'} />
    <PlainLink to={'/'}>
      <LogoBold>Explor</LogoBold>
      <LogoReg>anime</LogoReg>
    </PlainLink>
    <img src={NavSearch} style={{ width: 20, height: 20 }} alt={'search'} />
  </HeaderWrapper>
);
