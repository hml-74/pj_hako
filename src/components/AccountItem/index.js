import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cl = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cl('wrapper')}>
      <img className={cl('avt')} src="https://rerollcdn.com/characters/Skin/7.5/Sejuani.png" alt="" />
      <div className={cl('info')}>
        <h5 className={cl('user')}>Ha Hay</h5>
        <span className={cl('name')}>user167</span>
      </div>
    </div>
  );
}

export default AccountItem;
