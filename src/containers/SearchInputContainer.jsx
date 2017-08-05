// @flow
import React from 'react';
import { connect } from 'react-redux';

import { SearchInput } from '../components/core/Header/style';
import { getSearchTerm } from '../reducers/animeSearchReducer';
import { fetchAnimesByKeyword } from '../actions/animeActions';

const mapStateToProps = ({ animeSearch }) => ({
  searchTerm: getSearchTerm(animeSearch),
});

const mapDispatchToProps = dispatch => ({
  fetchAnimesByKeyword: e => dispatch(fetchAnimesByKeyword(e.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <SearchInput
    onChange={props.fetchAnimesByKeyword}
    value={props.searchTerm}
    {...props}
  />),
);
