// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllAnimes, getFetchingStatus, getAPICursorOffset } from '../reducers/animeReducer';
import { fetchAnimes as fetchAnimesAction } from '../actions/animeActions';

import AnimeList from '../components/animes/AnimeList';

type Props = {
  animes: any,
  isFetching: boolean,
  dataCursor: number,
  fetchAnimes: any,
};

const mapStateToProps = ({ animes }) => ({
  animes: getAllAnimes(animes),
  isFetching: getFetchingStatus(animes),
  dataCursor: getAPICursorOffset(animes),
});

const mapDispatchToProps = dispatch => ({
  fetchAnimes: (offset = 0) => dispatch(fetchAnimesAction(offset)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
      document.addEventListener('scroll', this.handleScroll);
    }

    props: Props;
    handleScroll: () => void;

    handleScroll() {
      const { isFetching, fetchAnimes, dataCursor } = this.props;

      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = document.body.scrollTop;

      if (documentHeight === windowHeight + scrollY) {
        if (!isFetching) {
          fetchAnimes(dataCursor);
        }
      }
    }

    componentDidMount() {
      if (this.props.animes.length === 0) {
        this.props.fetchAnimes();
      }
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }

    render() {
      const { animes, isFetching } = this.props;
      return (
        <AnimeList animesData={animes} isFetching={isFetching} />
      );
    }
});
