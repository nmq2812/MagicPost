import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <ul className={cx('nav')}>
            <li>
                <a href="#">Vận chuyển</a>
            </li>
            <li>
                <a href="#">Dịch vụ</a>
            </li>
            <li>
                <a href="#">Liên hệ</a>
            </li>
            <li>
                <a href="#">
                    More
                    <i className={cx('nav-down-icon ti-angle-down')}></i>
                </a>
                <ul className={cx('subnav')}>
                    <li>
                        <a href="#">Merchandis</a>
                    </li>
                    <li>
                        <a href="#">Extras</a>
                    </li>
                    <li>
                        <a href="#">Media</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default Navigation;
