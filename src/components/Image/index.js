import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '~/assets/imgs';
import styles from './Image.module.scss';

// const cl = classNames.bind(styles);

function Image({ src, alt, className, fallback: customFallback = images.noImg, ...props }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      ref={ref}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
