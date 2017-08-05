import React from 'react';
import { connect } from 'react-redux';

import { getSearchTerm } from '../reducers/animeSearchReducer';
import MobileSearchModal from '../components/core/search/MobileSearchModal';

const mapStateToProps = ({ animeSearch }) => ({
  searchTerm: getSearchTerm(animeSearch),
});

export default connect(
  mapStateToProps,
  null,
)(
  class extends React.Component {
    render() {
      return (
        <MobileSearchModal
          isSearchActive={this.props.isSearchActive}
          searchTerm={''}
        />
      );
    }
  },
);
