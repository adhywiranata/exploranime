// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import glamorous from 'glamorous';
import FontFaceObserver from 'fontfaceobserver';

import Header from './components/core/Header/';
import store from './configureStore';

import ListSection from './components/animes/ListSection';

const history = createHistory();

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
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Helmet>
              <title>Exploranime</title>
            </Helmet>
            <AppContainer>
              <Header />
              <div style={{ height: 1000, paddingTop: 50 }}>
                <Switch>
                  <Route exact path={'/'} component={ListSection} />
                </Switch>
              </div>
            </AppContainer>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
