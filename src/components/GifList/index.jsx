import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Styles from './styles.scss';

class GifList extends React.Component {
  render() {
    return (
      <ul onScroll={this.props.handleScroll} className={Styles['gif-list']}>
        {this.props.gifs.map(gif => (
          <li className={Styles['gif-list-item']} key={gif.id}>
            <Image
              src={gif.images.fixed_height.url}
              placeholder={gif.images.preview_gif.url}
              height={200}
              alt={gif.title || gif.slug}
            />
          </li>
        ))}
      </ul>
    );
  }
}

GifList.propTypes = {
  handleScroll: PropTypes.func.isRequired,
  gifs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GifList;
