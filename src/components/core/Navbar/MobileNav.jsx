// @flow
import React from 'react';

import {
  MobileNavOverlay as Overlay,
  MobileNavContainer as Container,
  MobileNavHeader as Header,
  MobileNavList as Ul,
  MobileNavListItem as Li,
} from './styles';

export default ({ isNavbarActive, toggleNavbar }: { isNavbarActive: boolean, toggleNavbar: any }) => (
  <div>
    {isNavbarActive && <Overlay onClick={toggleNavbar} />}
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
