function CTA({ onClick }){
    return (
        <div className="cta">
            <h2 className="cta-title">¿Necesitas Ayuda?</h2>
            <p className="cta-text">Nuestro asistente está listo para responder tus preguntas sobre sistemas operativos.</p>
            <button className="cta-button" onClick={onClick}>Hablar con el Asistente</button>
        </div>
    );
}
export default CTA;