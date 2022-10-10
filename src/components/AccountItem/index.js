import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/imgs';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function AccountItem({ data, ...passProps }) {
  let fullName = data.full_name;

  if (!fullName.trim()) {
    fullName = 'Người dùng MinT';
  }

  return (
    <Link to={`/@${data.nickname}`} className={cl('wrapper')} {...passProps}>
      <Image className={cl('avt')} src={data.avatar} alt={data.nickname} fallback={images.noAvt} />
      <div className={cl('info')}>
        <h5 className={cl('user')}>{fullName}</h5>
        <span className={cl('name')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
