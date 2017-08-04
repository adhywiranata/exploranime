// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailSection from '../components/animes/DetailSection';
import { fetchAnimeDetails } from '../actions/animeActions';
import { getFetchingStatus } from '../reducers/animeDetailsReducer';

const mapStateToProps = state => ({
  isFetching: getFetchingStatus(state.animeDetails),
});
const mapDispatchToProps = dispatch => ({
  fetchAnimeDetails: () => dispatch(fetchAnimeDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    componentDidMount() {
      this.props.fetchAnimeDetails();
    }

    render() {
      return (
        <DetailSection />
      );
    }
  }
);
