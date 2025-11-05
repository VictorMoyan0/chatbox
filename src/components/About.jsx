import React from 'react';
import { Users, Code, Shield, Terminal } from 'lucide-react';
import '../styles/about.css'
 
function About() {
    const technologies = [
        'React.js para el frontend',
        'Tailwind CSS para estilos',
        'Lucide React para iconos',
        'API de Gemini para IA',
    ];
    return(
    <div className="about-container">
      <div className="about-content">
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">
            <Users className="title-icon" />
            Quiénes Somos
          </h1>
          <div className="title-divider"></div>
        </div>

        {/* Project Info Card */}
        <div className="card project-card">
          <div className="card-header">
            <Shield className="card-icon" />
            <h2 className="card-title">Sobre Este Proyecto</h2>
          </div>
          <p className="card-text">
            Este portal educativo fue desarrollado como parte del Trabajo Práctico Final de la materia{' '}
            <span className="highlight highlight-purple">Aplicaciones de 6to año</span>, 
            con el objetivo de crear una plataforma interactiva que integre conceptos fundamentales de Sistemas 
            Operativos con tecnologías web modernas.
          </p>
          <p className="card-text">
            La temática elegida se centra en la{' '}
            <span className="highlight highlight-indigo">seguridad informática</span>, 
            abarcando amenazas, protección de sistemas Linux y automatización mediante Bash scripting.
          </p>
        </div>

        {/* Team Info Card */}
        <div className="card team-card">
          <div className="card-header">
            <Code className="card-icon" />
            <h2 className="card-title">El Equipo</h2>
          </div>
          <div className="team-sections">
            <div className="team-section developers-section">
              <h3 className="section-title">
                <Terminal className="section-icon" />
                Desarrolladores
              </h3>
              <p className="section-text">
                Estudiantes de 6to año comprometidos con el aprendizaje de tecnologías web y la seguridad 
                en sistemas operativos.
              </p>
            </div>
            <div className="team-section subject-section">
              <h3 className="section-title">📚 Materia</h3>
              <p className="section-text">
                Aplicaciones - 6to Año
                <br />
                <span className="year-text">Trabajo Práctico Final - 2024</span>
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Card */}
        <div className="card tech-card">
          <h2 className="tech-title">💻 Tecnologías Utilizadas</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-bullet"></div>
                <span className="tech-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="about-footer">
          <p className="footer-text">
            ✨ Desarrollado con pasión por la tecnología y la educación ✨
          </p>
        </div>
      </div>
    </div>
    )
}
export default About;