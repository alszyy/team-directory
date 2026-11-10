import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="directory-container">
            <h1>404</h1>
            <h2>Halaman Tidak Ditemukan</h2>
            <p>Maaf, halaman yang kamu cari tidak tersedia.</p>

            <Link to="/">
                Kembali ke Beranda
            </Link>
        </div>
    );
}

export default NotFoundPage;
