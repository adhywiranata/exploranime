// @flow
import { connect } from 'react-redux';

import { getSearchTerm, getFetchingStatus, getSearchResults } from '../reducers/animeSearchReducer';
import MobileSearchModal from '../components/core/search/MobileSearchModal';

const mapStateToProps = ({ animeSearch }) => ({
  searchTerm: getSearchTerm(animeSearch),
  isFetching: getFetchingStatus(animeSearch),
  searchResults: getSearchResults(animeSearch),
});

export default connect(
  mapStateToProps,
  null,
)(MobileSearchModal);
