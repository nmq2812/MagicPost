import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1>Theo dõi đơn hàng</h1>
            <span className={cx('search-box')}>
                <div className={cx('search-bar')}>
                    <input
                        placeholder="Nhập mã đơn hàng bạn cần tra cứu"
                        className={cx('input')}
                        type="text"
                        spellCheck={false}
                    />
                    <span className={cx('btn')}>
                        <button type="button" className={cx('search-btn')}>
                            <span>Theo dõi</span>
                        </button>
                    </span>
                </div>
            </span>
        </div>
    );
}

export default Home;
