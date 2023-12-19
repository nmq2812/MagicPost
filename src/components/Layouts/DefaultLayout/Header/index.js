import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from 'src/assets/images/logo.png';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={logo} alt="MagicPost" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
