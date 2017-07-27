// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllAnimes, getFetchingStatus } from '../reducers/animeReducer';
import { fetchAnimes, fetchAnimesLoading, fetchAnimesSuccess } from '../actions/animeActions';

import AnimeList from '../components/animes/AnimeList';

const mapStateToProps = ({ animes }) => ({
  animes: getAllAnimes(animes),
  isFetching: getFetchingStatus(animes),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnimes: () => dispatch(fetchAnimes()),
  fetchAnimesLoading: () => dispatch(fetchAnimesLoading()),
  fetchAnimesSuccess: () => dispatch(fetchAnimesSuccess()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    constructor(props) {
      super(props);
      document.addEventListener('scroll', () => {
        // console.log(document.body.height);
        // console.log(document.getElementsByTagName('body')[0].height);
        // console.log(window.innerHeight);
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollY = document.body.scrollTop;

        if(documentHeight === windowHeight + scrollY) {
          console.log('FETCHING...');
          this.props.fetchAnimesLoading();
          this.props.fetchAnimesSuccess();
        }
      });
    }

    componentDidMount() {
      this.props.fetchAnimesLoading();
      setTimeout(this.props.fetchAnimesSuccess, 3000);
    }

    render() {
      const { animes, isFetching } = this.props;
      return (
        <AnimeList animesData={animes} isFetching={isFetching} />
      );
    }
})
