import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import GifList from '../../components/GifList';
import { NEXT_DIRECTION, PREVIOUS_DIRECTION } from '../../constants/SearchDirectionConstants';
import Styles from './styles.scss';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrending();
  }

  handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.props.fetchTrending({ direction: NEXT_DIRECTION });
    } else if (e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight) {
      this.props.fetchTrending({ direction: PREVIOUS_DIRECTION });
    }
  }

  render() {
    const isLoading = this.props.loading && this.props.gifs.length === 0;
    return (
      <div className={Styles.container}>
        <Helmet>
          <title>Trending</title>
        </Helmet>
        <h1>Trending GIFs</h1>
        {isLoading ? (
          'loading'
        ) : (
          <GifList handleScroll={this.handleScroll} gifs={this.props.gifs} />
        )}
      </div>
    );
  }
}

Trending.propTypes = {
  fetchTrending: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  gifs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Trending;
