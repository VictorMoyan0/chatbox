import { useNavigate } from 'react-router-dom'
import { Shield, Home, MessageSquare, Users } from "lucide-react";
import '../styles/navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const navItems = [
        { label: "Inicio", path: "/", icon: Home },
        { label: "Chat", path: "/chat", icon: MessageSquare },
        { label: "Sobre Nosotros", path: "/about", icon: Users },
    ];

    return(
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo" onClick={() => navigate("/")}>
                <Shield className="navbar-icon" />
                </div>

                {/* Enlaces de navegación */}
                <ul className="navbar-links">
                {navItems.map(({ label, path, icon: Icon }) => (
                    <li key={path} className="navbar-item">
                    <button
                        onClick={() => navigate(path)}
                        className="navbar-button"
                    >
                        <Icon className="navbar-link-icon" />
                        {label}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;