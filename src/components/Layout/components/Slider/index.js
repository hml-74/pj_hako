import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cl = classNames.bind(styles);

function Slider() {
  return <div className={cl('wrapper')}></div>;
}

export default Slider;
