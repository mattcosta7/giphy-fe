import React from 'react';
import LazyLoad from 'react-lazyload';
import ProgressiveImage from 'react-progressive-image';
import classnames from 'classnames';
import Styles from './styles.scss';

export default class Image extends React.Component {
  render() {
    const {
      src, className, alt, placeholder, frameClassName, ...restProps
    } = this.props;

    return (
      <LazyLoad
        throttle={300}
        once
        unmountIfInvisible
        overflow
        height={200}
        offset={300}
        placeholder={<div>loading</div>}
      >
        <div className={classnames(Styles.frame, frameClassName)}>
          <ProgressiveImage src={src} placeholder={placeholder || src}>
            {(imageSrc, loading) => (
              <img
                className={classnames(Styles.image, loading && Styles.loading, className)}
                src={imageSrc}
                alt={alt}
                {...restProps}
              />
            )}
          </ProgressiveImage>
        </div>
      </LazyLoad>
    );
  }
}
