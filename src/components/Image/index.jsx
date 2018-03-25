import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import ProgressiveImage from 'react-progressive-image';
import classnames from 'classnames';
import Styles from './styles.scss';

class Image extends React.Component {
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
            {imageSrc => (
              <img
                className={classnames(Styles.image, className)}
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

Image.defaultProps = {
  frameClassName: null,
  placeholder: null,
  className: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  frameClassName: PropTypes.string,
};

export default Image;
