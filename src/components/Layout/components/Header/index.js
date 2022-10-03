import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/imgs';
import { publicRoutes } from '~/routes';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import BookItem from '~/components/BookItem';

const cl = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
    }, 0);
  }, []);

  return (
    <header className={cl('wrapper')}>
      <div className={cl('inner')}>
        <img className={cl('logo')} src={images.logo} alt="logo" />
        <ul className={cl('navbar')}>
          {publicRoutes.map((route, index) => (
            <li key={index}>
              <Link className={cl('navbar-item')} to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cl('search-result')} tabIndex="3" {...attrs}>
              <PopperWrapper>
                <h4 className={cl('search-title')}>Truyện</h4>
                <BookItem />
                <BookItem />
                <BookItem />
                <h4 className={cl('search-title')}>Tác giả</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cl('search')}>
            <input type="text" className={cl('search-input')} placeholder="Tối thiểu 2 ký tự" spellCheck={false} />
            <button className={cl('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cl('load')} icon={faSpinner} />
            <button className={cl('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
      </div>
    </header>
  );
}

export default Header;
