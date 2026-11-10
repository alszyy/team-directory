
import { useState } from 'react';

function ProfileCard() {
    const [likes, setLikes] = useState(0);
    const [nama, setNama] = useState('Alsera Daru Wismaya');
    const [profesi, setProfesi] = useState('Mahasiswa');
    const [isOnline, setIsOnline] = useState (true);
    
    return (
        <section className="profile-card">

            <div className="profile-avatar">
                👨‍🎓
            </div>

            <div className="status-badge">
                <span className="status-dot"></span>
                Sedang belajar React
            </div>

            <h2>{nama}</h2>

            <p className="profile-description">
                {profesi} • Web Developer
            </p>

            <div className="about-section">
                <h3>Tentang Saya</h3>
                <p>
                    Sedang mengembangkan kemampuan di bidang
                    teknologi, pemrograman, dan pengembangan website.
                </p>
            </div>

            <div className="interest-section">
                <h3>Minat Saya</h3>

                <div className="interest-list">
                    <span>💻 Programming</span>
                    <span>🎮 Gaming</span>
                    <span>⚛️ React</span>
                </div>
            </div>

            <div className="statistics">

                <div className="stat-box">
                    <strong>1</strong>
                    <span>Proyek</span>
                </div>

                <div className="stat-box">
                    <strong>475</strong>
                    <span>Pengikut</span>
                </div>

            </div>

            <div className="edit-profile">
                <h3>Edit Profil</h3>

                <input
                    type="text"
                    placeholder="Masukkan nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Masukkan profesi"
                    value={profesi}
                    onChange={(e) => setProfesi(e.target.value)}
                />
            </div>

            <button
                className="like-button"
                onClick={() => setLikes(likes + 1)}
            >
                ❤️ Suka ({likes})
            </button>

            <p className="profile-message">
                Terima kasih sudah mengunjungi profil saya!
            </p>

        </section>
    );
}

export default ProfileCard;
