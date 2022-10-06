import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import * as searchServices from '~/services/searchService';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import BookItem from '~/components/BookItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cl = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const searchInput = useRef(null);

  function handleChange(e) {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(' ')) {
      setSearchValue(inputValue);
    }
  }

  function handleClear() {
    setSearchValue('');
    setSearchResult([]);
    searchInput.current.focus();
  }

  function handleSearch() {}

  function handleFocus() {
    searchInput.current.focus();
  }

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div className={cl('wrapper')}>
      <HeadlessTippy
        interactive={true}
        visible={searchResult.length > 0 && showResult}
        render={(attrs) => (
          <div className={cl('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cl('search-title')}>Truyện</h4>
              <BookItem />
              <BookItem />
              <BookItem />
              <h4 className={cl('search-title')}>Tác giả</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} onClick={handleClear} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cl('search')}>
          <input
            value={searchValue}
            className={cl('search-input')}
            placeholder="Tối thiểu 2 ký tự"
            spellCheck={false}
            ref={searchInput}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cl('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cl('load')} icon={faSpinner} />}
          <button
            className={cl('search-btn')}
            onClick={!!searchValue ? handleSearch : handleFocus}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
