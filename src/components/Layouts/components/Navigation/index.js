function Navigation() {
    return (
        <div className="container d-flex justify-content-center default-color mw-100">
            <ul className="nav p-3 default-width">
                <li className="col d-flex justify-content-between">
                    <a className="text-white text-decoration-none  align-items-center" href="/search">
                        <h3>Tra cứu - Định vị</h3>
                    </a>
                </li>
                <li className="col d-flex justify-content-center">
                    <a className="text-white text-decoration-none  align-items-center" href="/service">
                        <h3>Dịch vụ</h3>
                    </a>
                </li>
                <li className="col d-flex justify-content-center">
                    <a className="text-white text-decoration-none  align-items-center" href="#">
                        <h3>Liên hệ</h3>
                    </a>
                </li>
                <li className="col d-flex justify-content-center">
                    <a className="text-white text-decoration-none  align-items-center" href="#">
                        <h3>Email</h3>
                    </a>
                </li>
                <li className="col d-flex justify-content-center">
                    <a className="text-white text-decoration-none  align-items-center" href="#">
                        <h3>API</h3>
                    </a>
                </li>
                <li className="col d-flex justify-content-center">
                    <a className="text-white text-decoration-none  align-items-center" href="/login">
                        <h3>Đăng nhập</h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
