import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return(
        <>
            <nav>
                <ul>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>Sobre Nosotros</li>
                    <li onClick={() => navigate("/chat")}>Chat</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;