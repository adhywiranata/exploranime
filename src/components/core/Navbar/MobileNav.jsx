// @flow
import React from 'react';

import {
  MobileNavOverlay as Overlay,
  MobileNavContainer as Container,
  MobileNavHeader as Header,
  MobileNavList as Ul,
  MobileNavListItem as Li,
} from './styles';

export default () => (
  <div>
    <Overlay />
    <Container>
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