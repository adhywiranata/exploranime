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
import Navbar from './components/core/Navbar';
import Footer from './components/core/Footer/';
import store from './configureStore';

import ListSection from './components/animes/ListSection';
import DetailSection from './components/animes/DetailSection';

const history = createHistory();

const font = new FontFaceObserver('Open Sans');

font.load().then(() => {
  // console.log('Open Sans has loaded.');
}).catch(err => {
  console.error(err);
});

const AppContainer = glamorous.div({
  fontFamily: 'Open Sans',
  position: 'relative',
  minHeight: '100vh',
});

export default class extends Component {
  render(): React$Element<any> {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Helmet>
              <title>Exploranime</title>
            </Helmet>
            <AppContainer>
              <Header />
              <Navbar />
              <div style={{ height: 'auto', paddingTop: 50, paddingBottom: 100 }}>
                <Switch>
                  <Route exact path={'/'} component={ListSection} />
                  <Route exact path={'/anime/:id'} component={DetailSection} />
                </Switch>
              </div>
              <Footer />
            </AppContainer>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
