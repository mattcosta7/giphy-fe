import React from 'react';
import Image from '../../components/Image';
import Styles from './styles.scss';

export default function GifList({ gifs }) {
  return (
    <ul className={Styles['gif-list']}>
      {gifs.map(gif => (
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
