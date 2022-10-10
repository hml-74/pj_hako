import Header from '~/layouts/components/Header';
import SliderLayout from '~/layouts/components/Slider';
import Footer from '~/layouts/components/Footer';
import styles from './HasSliderLayout.module.scss';

import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

function HasSliderLayout({ children }) {
  return (
    <div>
      <Header />
      <SliderLayout />
      <div className={cl('container')}>{children}</div>
      <Footer />
    </div>
  );
}

export default HasSliderLayout;
