import React, { useState } from 'react';
import './Login.module.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        if (isLogin) {
            // Xử lý đăng nhập
            console.log('Login - Username:', username, 'Password:', password);
        } else {
            // Xử lý đăng ký
            console.log('Register - Username:', username, 'Password:', password);
        }
        // Đặt lại trạng thái của biểu mẫu sau khi đăng nhập
        setUsername('');
        setPassword('');
    };

    return (
        <div className="container d-flex align-items-center" style={{ flexDirection: 'column' }}>
            <h1 className="p-5">{isLogin ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}</h1>
            <form className="form-group w-50" onSubmit={handleLogin}>
                <div className="p-1">
                    <label htmlFor="username">Tên tài khoản / Email:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="p-1">
                    <label htmlFor="password">Mật khấu:</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {!isLogin ? (
                    <div className="p-1">
                        <label htmlFor="password">Nhập lại mật khẩu:</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                ) : (
                    ''
                )}
                <button className="btn btn-primary default-color w-100 p-2 mt-3 mb-3" type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <a onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Bạn là người dùng mới? Đăng ký tại đây' : 'Bạn đã có tài khoản? Đăng nhập'}
            </a>
        </div>
    );
}

export default Login;
