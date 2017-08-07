// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailSection from '../components/animes/DetailSection';
import { fetchAnimeDetails } from '../actions/animeActions';
import { getAnime, getFetchingStatus } from '../reducers/animeDetailsReducer';

type Props = {
  match: any,
  fetchAnimeDetails: any,
  isFetching: boolean,
  anime: any,
};

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

    props: Props;

    render() {
      const { anime, isFetching } = this.props;
      return (
        <DetailSection anime={anime} isFetching={isFetching} />
      );
    }
  },
);
