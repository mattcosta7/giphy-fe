import React from 'react';
import GifList from '../../components/GifList';
import Styles from './styles.scss';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTrending();
  }
  render() {
    return (
      <div className={Styles.container}>
        <h1>Trending GIFs</h1>
        <GifList gifs={this.props.trendingGifs} />
      </div>
    );
  }
}
