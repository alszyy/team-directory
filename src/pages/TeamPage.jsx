import TeamDirectory from '../components/TeamDirectory';

function TeamPage({
    members,
    onAddMember,
    onToggleStatus,
    onAddStar
}) {
    return (
        <TeamDirectory
            members={members}
            onAddMember={onAddMember}
            onToggleStatus={onToggleStatus}
            onAddStar={onAddStar}
        />
    );
}

export default TeamPage;
