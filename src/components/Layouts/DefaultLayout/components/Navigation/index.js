import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('container')}>
                <div className={cx('nav-item')}>
                    <a href="/search">
                        <h3>Tra cứu - Định vị</h3>
                    </a>
                </div>
                <div className={cx('nav-item')}>
                    <a href="/service">
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
                        <h3>Email</h3>
                    </a>
                </div>
                <div className={cx('nav-item')}>
                    <a href="#">
                        <h3>API</h3>
                    </a>
                </div>
                <div className={cx('nav-item')}>
                    <a href="/login">
                        <h3>Đăng nhập</h3>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
