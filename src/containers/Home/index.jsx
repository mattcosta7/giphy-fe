import React from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from '../../actions/TrendingActions';
import Image from '../../components/Image';
import hotReload from '../../helpers/hotloader-helper';
import Styles from './styles.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTrending();
  }
  render() {
    return (
      <div className={Styles.container}>
        <h1>Trending GIFs</h1>
        <ul className={Styles['gif-list']}>
          {this.props.trendingGifs.map(gif => (
            <li className={Styles['gif-list-item']} key={gif.id}>
              <Image
                src={gif.images.fixed_height.url}
                placeholder={gif.images.fixed_height_downsampled.url}
                height={200}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trendingGifs: state.gifs.allIds.map(id => state.gifs.byId[id]),
});
const mapDispatchToProps = {
  fetchTrending,
};

export default hotReload(module, connect(mapStateToProps, mapDispatchToProps)(Home));
