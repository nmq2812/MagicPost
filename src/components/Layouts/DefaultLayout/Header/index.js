import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from 'src/assets/images/logo.png';
import Navigation from 'src/components/Navigation';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="MagicPost" />
                </div>
                <Navigation></Navigation>
            </div>
        </header>
    );
}

export default Header;
