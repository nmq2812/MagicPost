import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <nav className={cx('nav')}>
            <div className={cx('nav-item')}>
                <a href="#">
                    <h3>Vận chuyển</h3>
                </a>
            </div>
            <div className={cx('nav-item')}>
                <a href="#">
                    <h3>Dịch vụ</h3>
                </a>
            </div>
            <div className={cx('nav-item')}>
                <a href="#">
                    <h3>Liên hệ</h3>
                </a>
            </div>
            <div className={cx('nav-item')}>
                <a href="#">
                    <h3>More</h3>
                    <i className={cx('nav-down-icon ti-angle-down')}></i>
                </a>
                <ul className={cx('subnav')}>
                    <div>
                        <a href="#">Merchandis</a>
                    </div>
                    <div>
                        <a href="#">Extras</a>
                    </div>
                    <div>
                        <a href="#">Media</a>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
