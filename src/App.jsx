// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';

const AppContainer = glamorous.div({
});

export default class extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Exploranime</title>
        </Helmet>
        <AppContainer>
          Exploranime
        </AppContainer>
      </div>
    );
  }
}
