// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllAnimes, getFetchingStatus } from '../reducers/animeReducer';
import { fetchAnimes } from '../actions/animeActions';

import AnimeList from '../components/animes/AnimeList';

const mapStateToProps = ({ animes }) => ({
  animes: getAllAnimes(animes),
  isFetching: getFetchingStatus(animes),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnimes: () => dispatch(fetchAnimes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    componentDidMount() {
      this.props.fetchAnimes();
    }

    render() {
      const { animes, isFetching } = this.props;
      return (
        <AnimeList animesData={animes} isFetching={isFetching} />
      );
    }
})
