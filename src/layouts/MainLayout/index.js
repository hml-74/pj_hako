import Header from '~/layouts/components/Header';
import Slider from '~/layouts/components/Slider';
import Footer from '~/layouts/components/Footer';
import styles from './MainLayout.module.scss';

import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Slider />
      <div className={cl('container')}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
