import { Link } from 'react-router-dom';
import mlRankLogo from '../assets/ml-rank-logo.png';
function TeamCard({
    id,
    name,
    role,
    bio,
    avatar,
    status,
    stars,
    rank,
    onToggleStatus,
    onAddStar
}) {
    return (
        <div className="team-card">

            <div className="avatar-wrapper">
    <img
    src={mlRankLogo}
    alt="Mobile Legends Logo"
    className="avatar-watermark"
/>

    <img
        src={avatar}
        alt={name}
        className="card-avatar"
    />
</div>

            <div className="card-info">

                <h3 className="card-name">{name}</h3>
                <p className="card-role">{role}</p>
                <p className="card-bio">"{bio}"</p>

                <div className="card-badges">

                    <span className={`badge ${status === 'Online' ? 'badge-online' : 'badge-offline'}`}>
                        ● {status}
                    </span>

                    <span className={`badge-rank rank-${rank?.toLowerCase()}`}>
                    🏆 {rank}

                    </span>
                    <span className="badge-stars">
                        ⭐ {stars} Bintang
                    </span>

                </div>

                <div className="card-actions">

                    <button
                        className="btn-star"
                        onClick={() => onAddStar(id)}
                    >
                        ⭐ Beri Bintang
                    </button>

                    <button
                        className="btn-status-toggle"
                        onClick={() => onToggleStatus(id)}
                    >
                        Ubah ke {status === 'Online' ? 'Offline' : 'Online'}
                    </button>

                </div>
                <Link to={`/member/${id}`} className="btn-view-profile">
                    Lihat Profil Detail →
                </Link>
                
            </div>

        </div>
    );
}

export default TeamCard;
