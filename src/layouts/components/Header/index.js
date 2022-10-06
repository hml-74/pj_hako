// import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {
  faBell,
  faBookmark,
  faClockRotateLeft,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faHeart,
  faMoon,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routesConfig from '~/configs/routes';
import styles from './Header.module.scss';
import images from '~/assets/imgs';
import { publicRoutes } from '~/routes';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../../Search';

const cl = classNames.bind(styles);

function Header() {
  const currenntUser = true;

  const MENU_ITEM = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Languge',
        data: [
          {
            code: 'en',
            title: 'English',
          },
          {
            code: 'vn',
            title: 'Tiếng Việt',
          },
        ],
      },
    },
    { icon: <FontAwesomeIcon icon={faMoon} />, title: 'Dark mode' },
    { icon: <FontAwesomeIcon icon={faClockRotateLeft} />, title: 'History', to: '/history' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback', to: '/feedback' },
  ];

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Hakoin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
      danger: true,
    },
  ];

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Language':
        // Handle change language
        break;
      default:
    }
  };

  return (
    <header className={cl('wrapper')}>
      <div className={cl('inner')}>
        <Link to={routesConfig.home}>
          <img className={cl('logo')} src={images.logo} alt="logo" />
        </Link>
        <ul className={cl('navbar')}>
          {publicRoutes.map((route, index) => (
            <li key={index}>
              <Link className={cl('navbar-item')} to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        <Search />

        <div className={cl('actions')}>
          {currenntUser ? (
            <>
              <Tippy delay={[0, 10]} content="Upload" placement="bottom">
                <button className={cl('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Bookmark" placement="bottom">
                <button className={cl('action-btn')}>
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Follow" placement="bottom">
                <button className={cl('action-btn')}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Notify" placement="bottom">
                <button className={cl('action-btn')}>
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
              <Button outline to="/signin">
                Sign in
              </Button>
            </>
          )}
          <Menu items={currenntUser ? userMenu : MENU_ITEM} onChage={handleMenuChange}>
            {currenntUser ? (
              <Image
                className={cl('user-avt')}
                src="https://wd.imgix.net/image/foR0vJZKULb5AGJExlazy1xYDgI2/U5OHzQL4tEKFr6OFIxWK.jpg?auto=format&w=52"
                alt="A"
                fallback={images.noAvt}
              />
            ) : (
              <>
                <button className={cl('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
