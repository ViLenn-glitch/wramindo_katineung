import { useState } from 'react';
import '../styles/login.css';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                // Simpan token ke LocalStorage (tanpa database)
                localStorage.setItem('adminToken', data.token);
                setError('');
                alert('Login Berhasil!');
                if (onLoginSuccess) onLoginSuccess();
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Gagal menghubungi server.');
        }
    };

    return (
        <section className="login-section">
            <div className="login-box">
                <h2>Admin Panel</h2>
                <p>Silakan login untuk mengelola menu (Tanpa DB)</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ketik 'admin'"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ketik 'nampol123'"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">Login Masuk</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
