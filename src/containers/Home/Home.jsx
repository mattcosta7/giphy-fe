import React from 'react';
import GifList from '../../components/GifList';
import Styles from './styles.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrending();
  }

  handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.props.fetchTrending({ direction: 'next' });
    } else if (e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight) {
      this.props.fetchTrending({ direction: 'previous' });
    }
  }

  render() {
    return (
      <div className={Styles.container}>
        <h1>Trending GIFs</h1>
        <GifList handleScroll={this.handleScroll} gifs={this.props.trendingGifs} />
      </div>
    );
  }
}
