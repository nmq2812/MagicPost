import Header from 'src/components/Layouts/DefaultLayout/Header';
import Navigation from './components/Navigation';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
