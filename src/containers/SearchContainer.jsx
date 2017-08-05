import React from 'react';

import MobileSearchModal from '../components/core/search/MobileSearchModal';

export default class extends React.Component {
  render() {
    return (
      <MobileSearchModal
        isSearchActive={this.props.isSearchActive}
        searchTerm={''}
      />
    );
  }
}
