// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';
import FontFaceObserver from 'fontfaceobserver';

import Header from './components/core/Header/';

const font = new FontFaceObserver('Open Sans');

font.load().then(() => {
  // console.log('Open Sans has loaded.');
}).catch(err => {
  console.error(err);
});

const AppContainer = glamorous.div({
  fontFamily: 'Open Sans'
});

export default class extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Exploranime</title>
        </Helmet>
        <AppContainer>
          <Header />
          Exploranime
        </AppContainer>
      </div>
    );
  }
}
