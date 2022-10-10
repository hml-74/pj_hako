import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import images from '~/assets/imgs';
import Image from '~/components/Image';
import styles from './Profile.module.scss';
import * as profileServices from '~/services/profileService';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faGlobe, faPen, faStar } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function Profile() {
  const { nickname } = useParams();

  const [profile, setProfile] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const result = await profileServices.profile(nickname);

      setProfile(result);
    };

    fetchApi();
  }, [nickname]);

  let fullName = `${profile.first_name} ${profile.last_name}`;

  if (!fullName.trim()) {
    fullName = 'Người dùng MinT';
  }
  const i = profile.id % images.coverRandom.length;

  const imgCover = images.coverRandom[i];

  return (
    <div className={cl('wrapper')}>
      <Image src={imgCover} alt="cover" className={cl('cover-profile')} />
      <div className={cl('profile-wrapper')}>
        <div className={cl('cover-img')}>
          <Image src={profile.avatar} alt={profile.nickname} className={cl('img-in-cover')} fallback={images.noAvt} />
        </div>
        <div className={cl('name-wrapper')}>
          <h2 className={cl('full-name')}>{fullName}</h2>
          <p className={cl('user-name')}>{`@${profile.nickname}`}</p>
        </div>
        <Button primary small className={cl('contact')}>
          <FontAwesomeIcon className={cl('icon')} icon={faPaperPlane} />
          <span className={cl('tilte')}>Liên Hệ</span>
        </Button>
      </div>
      <div className={cl('content')}>
        <div className={cl('row')}>
          <div className={cl('col-4')}>
            <section className={cl('section')}>
              <ul className={cl('statastic', 'row')}>
                <li className={cl('col-6')}>
                  <div className={cl('statastic-value')}>{profile.followings_count}</div>
                  <div className={cl('statastic-name')}>Videos Upload</div>
                </li>
                <li className={cl('col-6')}>
                  <div className={cl('statastic-value')}>{profile.likes_count}</div>
                  <div className={cl('statastic-name')}>Followers</div>
                </li>
              </ul>
              <main className={cl('body')}>
                <ul className={cl('info')}>
                  <li className={cl('info-item')}>
                    <span className={cl('info-name')}>
                      <FontAwesomeIcon icon={faStar} className={cl('info-icon')} />
                      Bio:
                    </span>
                    <span className={cl('info-value')}>{profile.bio}</span>
                  </li>
                  <li className={cl('info-item')}>
                    <span className={cl('info-name')}>
                      <FontAwesomeIcon icon={faGlobe} className={cl('info-icon')} />
                      Web:
                    </span>
                    <a href={profile.website_url} className={cl('info-value')}>
                      {profile.website_url}
                    </a>
                  </li>
                  <li className={cl('info-item')}>
                    <span className={cl('info-name')}>
                      <FontAwesomeIcon icon={faCalendar} className={cl('info-icon')} />
                      Created at:
                    </span>
                    <span className={cl('info-value')}>{profile.created_at}</span>
                  </li>
                  <li className={cl('info-item')}>
                    <span className={cl('info-name')}>
                      <FontAwesomeIcon icon={faPen} className={cl('info-icon')} />
                      Last update:
                    </span>
                    <span className={cl('info-value')}>{profile.updated_at}</span>
                  </li>
                </ul>
              </main>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
