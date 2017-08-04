// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllAnimes, getFetchingStatus, getAPICursorOffset } from '../reducers/animeReducer';
import { fetchAnimes } from '../actions/animeActions';

import AnimeList from '../components/animes/AnimeList';

const mapStateToProps = ({ animes }) => ({
  animes: getAllAnimes(animes),
  isFetching: getFetchingStatus(animes),
  dataCursor: getAPICursorOffset(animes),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnimes: (offset = 0) => dispatch(fetchAnimes(offset)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    constructor(props) {
      super(props);
      const { isFetching, fetchAnimes, dataCursor } = props;
      let scrollCursor = dataCursor;
      document.addEventListener('scroll', () => {
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollY = document.body.scrollTop;

        if (documentHeight === windowHeight + scrollY) {
          if (!isFetching) {
            scrollCursor += 10;
            fetchAnimes(scrollCursor);
          }
        }
      });
    }

    componentWillMount() {

    }

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
