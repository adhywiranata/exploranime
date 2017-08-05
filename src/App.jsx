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
import MobileNav from './components/core/Navbar/MobileNav';
// import MobileSearchModal from './components/core/search/MobileSearchModal';
import Footer from './components/core/Footer/';
import store from './configureStore';

import ListSection from './components/animes/ListSection';

import AnimeDetailsContainer from './containers/AnimeDetailsContainer';
import SearchContainer from './containers/SearchContainer';

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
  constructor() {
    super();
    this.state = {
      isNavbarActive: false,
      isSearchActive: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleNavbar() {
    this.setState({ isNavbarActive: !this.state.isNavbarActive });
  }

  toggleSearch() {
    this.setState({ isSearchActive: !this.state.isSearchActive });
  }

  render(): React$Element<any> {
    const { isNavbarActive, isSearchActive } = this.state;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Helmet>
              <title>Exploranime</title>
            </Helmet>
            <AppContainer>
              <Header
                isNavbarActive={isNavbarActive}
                isSearchActive={isSearchActive}
                toggleNavbar={this.toggleNavbar}
                toggleSearch={this.toggleSearch}
              />
              <Navbar />
              <MobileNav isNavbarActive={isNavbarActive} toggleNavbar={this.toggleNavbar} />
              {<SearchContainer
                isSearchActive={isSearchActive}
              />}
              <div style={{ height: 'auto', paddingTop: 50, paddingBottom: 100 }}>
                <Switch>
                  <Route exact path={'/'} component={ListSection} />
                  <Route exact path={'/anime/:id'} component={AnimeDetailsContainer} />
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
