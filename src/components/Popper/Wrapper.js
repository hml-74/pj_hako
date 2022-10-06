import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cl = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cl('wrapper', className)}>{children}</div>;
}

export default Wrapper;
