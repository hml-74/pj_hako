import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cl = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cl('header')}>
      <button className={cl('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cl('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;
