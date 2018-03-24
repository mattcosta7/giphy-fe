import React from 'react';
import Image from '../../components/Image';
import Styles from './styles.scss';

export default class GifList extends React.Component {
  render() {
    return (
      <ul onScroll={this.props.handleScroll} className={Styles['gif-list']}>
        {this.props.gifs.map(gif => (
          <li className={Styles['gif-list-item']} key={gif.id}>
            <Image
              src={gif.images.fixed_height.url}
              placeholder={gif.images.fixed_height_downsampled.url}
              height={200}
            />
          </li>
        ))}
      </ul>
    );
  }
}
