function Sidebar() {
    return (
        <div className="sidebar col-md-2">
            <nav className="d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Thống kê
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Quản lý điểm
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Quản lý nhân viên
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cài đặt
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
