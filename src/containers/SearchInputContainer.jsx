// @flow
import React from 'react';
import { connect } from 'react-redux';

import { SearchInput } from '../components/core/Header/style';
import { getSearchTerm } from '../reducers/animeSearchReducer';

const mapStateToProps = ({ animeSearch }) => ({
  searchTerm: getSearchTerm(animeSearch),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (e) => dispatch({ type: 'test', payload: e.target.value }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => <SearchInput onChange={props.setSearchTerm} value={props.searchTerm} {...props} />);
