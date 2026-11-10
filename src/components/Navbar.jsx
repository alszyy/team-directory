
import { NavLink } from 'react-router-dom';

function Navbar({ totalMembers }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Team Directory
            </div>

            <div className="navbar-menu">
                <NavLink to="/" end>
                    Anggota Tim ({totalMembers})
                </NavLink>

                <NavLink to="/news">
                    Berita Terkini
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
