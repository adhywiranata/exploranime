// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailSection from '../components/animes/DetailSection';
import { fetchAnimeDetails } from '../actions/animeActions';
import { getAnime, getFetchingStatus } from '../reducers/animeDetailsReducer';

const mapStateToProps = state => ({
  anime: getAnime(state.animeDetails),
  isFetching: getFetchingStatus(state.animeDetails),
});

const mapDispatchToProps = dispatch => ({
  fetchAnimeDetails: id => dispatch(fetchAnimeDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    componentDidMount() {
      const animeId = parseInt(this.props.match.params.id, 10);
      this.props.fetchAnimeDetails(animeId);
    }

    render() {
      const { anime } = this.props;
      return (
        <DetailSection anime={anime} />
      );
    }
  },
);
