import { useState, useEffect } from 'react';
import Login from './Login';
import '../styles/admin.css';

function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [menuData, setMenuData] = useState({
        name: '',
        price: '',
        desc: '',
        image: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleChange = (e) => {
        setMenuData({ ...menuData, [e.target.name]: e.target.value });
    };

    const handleAddMenu = async (e) => {
        e.preventDefault();
        setMessage('Menambahkan menu...');
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('http://localhost:5000/api/menu/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(menuData)
            });

            const data = await response.json();
            if (data.success) {
                setMessage('Berhasil: ' + data.message);
                setMenuData({ name: '', price: '', desc: '', image: '' }); // reset form
            } else {
                setMessage('Error: ' + data.message);
            }
        } catch (error) {
            setMessage('Gagal menghubungi server.');
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
    }

    return (
        <section className="admin-dashboard">
            <div className="admin-container">
                <div className="admin-header">
                    <h2>Admin Dashboard</h2>
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                </div>

                <div className="admin-card">
                    <h3>Tambah Menu Baru</h3>
                    {message && <div className="admin-message">{message}</div>}
                    <form className="admin-form" onSubmit={handleAddMenu}>
                        <div className="form-group">
                            <label>Nama Menu</label>
                            <input
                                type="text"
                                name="name"
                                value={menuData.name}
                                onChange={handleChange}
                                required
                                placeholder="Contoh: Indomie Telur Kornet"
                            />
                        </div>
                        <div className="form-group">
                            <label>Harga</label>
                            <input
                                type="text"
                                name="price"
                                value={menuData.price}
                                onChange={handleChange}
                                required
                                placeholder="Contoh: Rp 15.000"
                            />
                        </div>
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <textarea
                                name="desc"
                                value={menuData.desc}
                                onChange={handleChange}
                                required
                                placeholder="Jelaskan secara singkat..."
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>URL Gambar</label>
                            <input
                                type="text"
                                name="image"
                                value={menuData.image}
                                onChange={handleChange}
                                required
                                placeholder="Contoh: https://..."
                            />
                        </div>
                        <button type="submit" className="btn-submit">Simpan Menu</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminDashboard;
