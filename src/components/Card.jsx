function Card({icon: Icon, title, description, color, onClick}){
    return(
        <div className={`feature-card feature-${color}`} onClick={onClick}>
            <Icon className="feature-icon" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    )
}

export default Card;