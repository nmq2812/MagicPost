import React from 'react';
import classNames from 'classnames/bind';
//import { Carousel } from 'react-responsive-carousel';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);
var Carousel = require('react-responsive-carousel').Carousel;

function ImageSlider() {
    return (
        <Carousel className={cx('banner')} showArrows={true}>
            <div>
                <img src="https://ph-files.imgix.net/e1ff2331-309c-4836-a851-7a6b8546858b.png?auto=format&fit=crop" />
            </div>
            {/* Add more 'div' with 'img' for additional images */}
        </Carousel>
    );
}

export default ImageSlider;
