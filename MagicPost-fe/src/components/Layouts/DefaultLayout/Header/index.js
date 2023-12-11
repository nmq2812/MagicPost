import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from 'src/res/MagicPost-logos.jpeg';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="MagicPost" />
                </div>
            </div>
        </header>
    );
}

export default Header;
