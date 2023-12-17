import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

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
        <div className="wrapper">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <a onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'New user? Register here' : 'Already registered? Login here'}
            </a>
        </div>
    );
}

export default Login;
