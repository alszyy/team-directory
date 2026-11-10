
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import fotoAhmad from './assets/foto-ahmad.jpg';
import fotoBudi from './assets/foto-budi.jpg';
import fotoSiti from './assets/foto-siti.jpg';

import Navbar from './components/Navbar';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import MemberDetailPage from './pages/MemberDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const initialMembers = [
    {
        id: 1,
        name: 'Heru',
        role: 'Mythical Mawi',
        bio: 'Aktif mengembangkan kemampuan dan kerja sama tim',
        status: 'Online',
        stars: 1,
        rank: 'Epic',
        avatar: fotoAhmad
    },
    {
        id: 2,
        name: 'Alsera Ganteng',
        role: 'Mythical Immortal',
        bio: 'Terus meningkatkan kemampuan bermain dan strategi',
        status: 'Online',
        stars: 2,
        rank: 'Mythic',
        avatar: fotoBudi
    },
    {
        id: 3,
        name: 'Ghandol',
        role: 'Mythical Honor',
        bio: 'Berpengalaman dan siap membantu anggota tim',
        status: 'Offline',
        stars: 5,
        rank: 'Legend',
        avatar: fotoSiti
    }
];

function App() {
    const [members, setMembers] = useState(initialMembers);

    const handleAddMember = (newMemberData) => {
        const newEntry = {
            ...newMemberData,
            id: Date.now(),
            status: 'Online',
            stars: 0,
            rank: 'Epic',
            avatar: 'https://i.pravatar.cc/150?u=' + Date.now()
        };

        setMembers((prev) => [newEntry, ...prev]);
    };

    const handleToggleStatus = (id) => {
        setMembers((prev) =>
            prev.map((member) =>
                member.id === id
                    ? {
                        ...member,
                        status: member.status === 'Online'
                            ? 'Offline'
                            : 'Online'
                    }
                    : member
            )
        );
    };

    const handleAddStar = (id) => {
        setMembers((prev) =>
            prev.map((member) =>
                member.id === id
                    ? { ...member, stars: member.stars + 1 }
                    : member
            )
        );
    };

    return (
        <div className="App">
            <Navbar totalMembers={members.length} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <TeamPage
                            members={members}
                            onAddMember={handleAddMember}
                            onToggleStatus={handleToggleStatus}
                            onAddStar={handleAddStar}
                        />
                    }
                />

                <Route path="/news" element={<NewsPage />} />

                <Route
                    path="/member/:id"
                    element={<MemberDetailPage members={members} />}
                />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
