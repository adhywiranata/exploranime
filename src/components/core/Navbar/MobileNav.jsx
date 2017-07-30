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

export default ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean, toggleNavbar: any }) => (
  <div>
    <Overlay
      onClick={toggleNavbar}
      isNavbarActive={isNavbarActive}
    />
    <CloseIcon
      onClick={toggleNavbar}
      src={closeSvg}
      isNavbarActive={isNavbarActive}
    />
    <Container isNavbarActive={isNavbarActive}>
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
