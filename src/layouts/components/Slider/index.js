import classNames from 'classnames/bind';
import styles from './SliderLayout.module.scss';
import Slider from 'react-slick';

const cl = classNames.bind(styles);

function SliderLayout() {
  var settings = {
    arrows: false,
    dots: false,
    autoplay: true,
  };
  return (
    <div className={cl('wrapper')}>
      <Slider slidesToShow={2} className={cl('slider')} {...settings}>
        <div className={cl('slide')}>
          <div className={cl('image')}>
            <img src="https://i.docln.net/lightnovel/banners/chapter/8252_d.jpg?t=1655710942" alt="url" />
          </div>
        </div>
        <div className={cl('slide')}>
          <div className={cl('image')}>
            <img
              src="https://cdn.dribbble.com/users/298353/screenshots/17841586/media/c9e30c229186f1c3e312274c0296787d.jpg"
              alt="url"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderLayout;
