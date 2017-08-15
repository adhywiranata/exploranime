// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import FontFaceObserver from 'fontfaceobserver';
import { LazyComponent } from 'react-code-split-component';
import ScrollToTop from './components/core/ScrollToTop';
import Header from './components/core/Header/';
import MobileNav from './components/core/Navbar/MobileNav';
// import MobileSearchModal from './components/core/search/MobileSearchModal';
import Footer from './components/core/Footer/';
import store from './configureStore';

// import ListSection from './components/animes/ListSection';
// import AnimeDetailsContainer from './containers/AnimeDetailsContainer';
import SearchModalContainer from './containers/SearchModalContainer';

const history = createHistory();

const font = new FontFaceObserver('Open Sans');

font.load().then(() => {
  // console.log('Open Sans has loaded.');
}).catch(() => {
  // console.error(err);
});

type State = {
  isNavbarActive: boolean,
  isSearchActive: boolean,
};

export default class extends Component {
  constructor() {
    super();
    this.state = {
      isNavbarActive: false,
      isSearchActive: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleSearchResultLink = this.handleSearchResultLink.bind(this);
  }

  state: State;
  toggleNavbar: () => void;
  toggleSearch: () => void;
  handleSearchResultLink: () => void;

  toggleNavbar() {
    this.setState({ isNavbarActive: !this.state.isNavbarActive });
  }

  toggleSearch() {
    this.setState({ isSearchActive: !this.state.isSearchActive });
  }

  handleSearchResultLink() {
    this.setState({ isSearchActive: false });
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
            <ScrollToTop>
              <div style={{
                fontFamily: 'Open Sans',
                position: 'relative',
                minHeight: '100vh',
              }}
              >
                <Header
                  isNavbarActive={isNavbarActive}
                  isSearchActive={isSearchActive}
                  toggleNavbar={this.toggleNavbar}
                  toggleSearch={this.toggleSearch}
                />
                <LazyComponent load={() => import('./components/core/Navbar')} />
                <MobileNav isNavbarActive={isNavbarActive} toggleNavbar={this.toggleNavbar} />
                <SearchModalContainer
                  isSearchActive={isSearchActive}
                  handleSearchResultLink={this.handleSearchResultLink}
                />
                <div style={{ height: 'auto', paddingTop: 50, paddingBottom: 100 }}>
                  <Switch>
                    <Route exact path={'/'} component={props => <LazyComponent load={() => import('./components/animes/ListSection')} {...props} />} />
                    <Route exact path={'/anime/:id'} component={props => <LazyComponent load={() => import('./containers/AnimeDetailsContainer')} {...props} />} />
                  </Switch>
                </div>
                <Footer />
              </div>
            </ScrollToTop>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
