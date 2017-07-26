import React from 'react';
import { connect } from 'react-redux';

import getAllAnimes from '../reducers/animeReducer';

import AnimeList from '../components/animes/AnimeList';

const mapStateToProps = state => ({
  animes: getAllAnimes(state.animes),
});

export default connect(
  mapStateToProps,
  null
)(
  class extends React.Component {
    render() {
      return (
        <AnimeList animes={this.props.animes} />
      );
    }
})
