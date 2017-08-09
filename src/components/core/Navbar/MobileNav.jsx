// @flow
import React from 'react';

import {
  MobileNavOverlay as Overlay,
  MobileNavContainer as Container,
  MobileNavHeader as Header,
  MobileNavList as Ul,
  MobileNavListItem as Li,
  CloseIcon,
} from './styles';

import closeSvg from './close.svg';

type Props = { isNavbarActive: boolean, toggleNavbar: any };

export default ({ isNavbarActive, toggleNavbar }: Props) => (
  <div>
    <Overlay
      onClick={toggleNavbar}
      isNavbarActive={isNavbarActive}
    />
    <CloseIcon
      onClick={toggleNavbar}
      src={closeSvg}
      isNavbarActive={isNavbarActive}
      className={'hidden-icon'}
      alt={'close'}
    />
    <Container isNavbarActive={isNavbarActive} className={'sidebar'}>
      <Header>
        menu
      </Header>
      <Ul>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Login</Li>
      </Ul>
    </Container>
  </div>
);
