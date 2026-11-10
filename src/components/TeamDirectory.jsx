
import { useState } from 'react';
import TeamCard from './TeamCard';
import AddMemberForm from './AddMemberForm';

export default function TeamDirectory({
    members,
    onAddMember,
    onToggleStatus,
    onAddStar
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOnline, setFilterOnline] = useState(false);

    const totalMembers = members.length;

    const onlineMembers = members.filter(
        (member) => member.status === 'Online'
    ).length;

    const offlineMembers = totalMembers - onlineMembers;

    const filteredMembers = members.filter((member) => {
        const matchesSearch = member.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesOnline = filterOnline
            ? member.status === 'Online'
            : true;

        return matchesSearch && matchesOnline;
    });

    return (
        <div className="directory-container">

            <AddMemberForm onAddMember={onAddMember} />

            <header className="directory-header">
                <h1>Daftar Anggota Tim ML INFORMATICS ENGINEERING</h1>
                <p>Kelola anggota dan pantau aktivitas tim.</p>
            </header>

            <div className="team-statistics">
                <div className="stat-card total">
                    <h3>Total Members</h3>
                    <p>{totalMembers}</p>
                </div>

                <div className="stat-card online">
                    <h3>Online</h3>
                    <p>{onlineMembers}</p>
                </div>

                <div className="stat-card offline">
                    <h3>Offline</h3>
                    <p>{offlineMembers}</p>
                </div>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Cari nama anggota..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                    type="button"
                    onClick={() => setFilterOnline(!filterOnline)}
                >
                    {filterOnline ? 'Tampilkan Semua' : 'Online Saja'}
                </button>
            </div>

            <div className="team-grid">
                {filteredMembers.length === 0 ? (
                    <div className="empty-state">
                        ⚠️ Tidak ada anggota tim yang cocok.
                    </div>
                ) : (
                    filteredMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            {...member}
                            onToggleStatus={onToggleStatus}
                            onAddStar={onAddStar}
                        />
                    ))
                )}
            </div>

        </div>
    );
}
