import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

function MemberDetailPage({ members }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate('/');
    };

    const member = members.find(
        (item) => item.id === Number(id)
    );

    if (!member) {
        return (
            <div className="directory-container">
                <h2>Anggota Tidak Ditemukan</h2>
                <Link to="/">Kembali ke Daftar Anggota</Link>
            </div>
        );
    }

    return (
        <div className="directory-container">
            <div className="team-card">
                <div className="avatar-wrapper">
                    <img
                        src={member.avatar}
                        alt={member.name}
                        className="card-avatar"
                    />
                </div>

                <div className="card-info member-detail-info">
                    <p>Alamat halaman: {location.pathname}</p>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <p>"{member.bio}"</p>
                    <p>Status: {member.status}</p>
                    <p>Rank: 🏆 {member.rank}</p>
                    <p>Bintang: ⭐ {member.stars}</p>
                </div>
            </div>

    <button
        type="button"
        onClick={handleBackClick}
        className="back-to-team"
>
    ← Kembali ke Daftar Anggota
</button>
        </div>
    );
}

export default MemberDetailPage;
