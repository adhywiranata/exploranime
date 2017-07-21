import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavBurger from './navigation-hamburger.svg';
import NavSearch from './navigation-search.svg';

import { HeaderWrapper, LogoBold, LogoReg } from './style';

export default () => (
  <HeaderWrapper>
    <img src={NavBurger} style={{ width: 30, height: 30 }} />
    <div>
    <LogoBold>Explor</LogoBold>
    <LogoReg>anime</LogoReg>

    <FontAwesome name={'rocket'} style={{ color: 'black', fontSize: 15 }} />
    </div>
    <img src={NavSearch} style={{ width: 20, height: 20 }} />
  </HeaderWrapper>
);
