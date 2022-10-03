import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cl = classNames.bind(styles);

function Wrapper({ children }) {
  return <div className={cl('wrapper')}>{children}</div>;
}

export default Wrapper;
