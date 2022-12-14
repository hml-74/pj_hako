import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './MainLayout.module.scss';

import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cl('container')}>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
