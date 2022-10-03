import classNames from 'classnames/bind';
import styles from './BookItem.module.scss';

const cl = classNames.bind(styles);

function BookItem() {
  return (
    <div className={cl('wrapper')}>
      <div className={cl('ratio', 'cover')}>
        <div
          className={cl('img-in-ratio')}
          style={{
            backgroundImage:
              'url(https://i.docln.net/lightnovel/covers/s11662-6590b799-1478-47e9-bc97-e031f2c7894d-m.jpg)',
          }}
        ></div>
      </div>
      <div className={cl('info')}>
        <h5 className={cl('name')}>Chuyện tình lãng mạn và hài hước của Anh Hùng và Phù Thủy chuyển sinh</h5>
        <span className={cl('author')}>Amamiya Kazuki</span>
      </div>
    </div>
  );
}

export default BookItem;
