// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailSection from '../components/animes/DetailSection';
import { fetchAnimeDetails } from '../actions/animeActions';
import { getAnime, getFetchingStatus } from '../reducers/animeDetailsReducer';

const mapStateToProps = state => {
  return {
    anime: getAnime(state.animeDetails),
    isFetching: getFetchingStatus(state.animeDetails),
  }
};
const mapDispatchToProps = dispatch => ({
  fetchAnimeDetails: id => dispatch(fetchAnimeDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    componentDidMount() {
      this.props.fetchAnimeDetails(1);
    }

    render() {
      const { anime } = this.props;
      const { id, type, attributes } = anime;
      const animeData = { id, type, attributes };
      return (
        <DetailSection anime={animeData} />
      );
    }
  }
);
