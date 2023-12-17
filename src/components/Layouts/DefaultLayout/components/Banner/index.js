import React from 'react';
import classNames from 'classnames/bind';
import banner1 from 'src/assets/images/banner/1.png';
import banner2 from 'src/assets/images/banner/2.png';
import styles from './Banner.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const cx = classNames.bind(styles);
var Carousel = require('react-responsive-carousel').Carousel;

function ImageSlider() {
    return (
        <div className={cx('wrapper')}>
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} autoPlay={5000}>
                <div>
                    <img src={banner1} alt="banner 1" />
                </div>
                <div>
                    <img src={banner2} alt="banner 2" />
                </div>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
