import { useNavigate } from "react-router-dom";

function Card({icon: Icon, title, description, color, path}){
    const navigate = useNavigate();
    return(
        <div className="feature-card" onClick={() => navigate(path)}>
            <Icon className="feature-icon" style={{ color }} />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    )
}

export default Card;