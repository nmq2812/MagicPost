import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Chuyển trang</h2>
            <ul className={cx('side-list')}>
                <li className={cx('side-item')}>
                    <a href="">Tổng hợp tin tức</a>
                </li>
                <li className={cx('side-item')}>
                    <a href="./manage">Quản lý</a>
                </li>
                <li className={cx('side-item')}>
                    <a href="">Tem bưu chính</a>
                </li>
                <li className={cx('side-item')}>
                    <a href="">Văn bản pháp lý</a>
                </li>
                <li className={cx('side-item')}>
                    <a href="">Thông tin Doanh nghiệp</a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
