import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-content content-1')}>content 1</div>
            <div className={cx('main-content content-2')}>content 2</div>
            <div className={cx('main-content content-3')}>content 2</div>
        </div>
    );
}

export default Home;
