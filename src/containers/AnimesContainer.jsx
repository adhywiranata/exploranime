// @flow

import React from 'react';
import { connect } from 'react-redux';

import { getAllAnimes, getFetchingStatus } from '../reducers/animeReducer';

import AnimeList from '../components/animes/AnimeList';

const mapStateToProps = ({ animes }) => ({
  animes: getAllAnimes(animes),
  isFetching: getFetchingStatus(animes),
});

export default connect(
  mapStateToProps,
  null
)(
  class extends React.Component {
    render() {
      const animes, isFetching = { this.props };
      return (
        <AnimeList animes={animes} isFetching={isFetching} />
      );
    }
})
