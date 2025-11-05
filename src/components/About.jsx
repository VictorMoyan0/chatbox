import React from "react";
import { Users } from "lucide-react";
import "./about.css"; // importamos los estilos

function About() {
  const technologies = [
    "React.js para el frontend",
    "Tailwind CSS para estilos",
    "Lucide React para iconos",
    "API de Gemini para IA",
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">
          <Users className="about-icon" />
          Quiénes Somos
        </h1>

        {/* Sección Proyecto */}
        <div className="about-section project">
          <h2>Sobre Este Proyecto</h2>
          <p>
            Este portal educativo fue desarrollado como parte del Trabajo Práctico Final de la materia{" "}
            <span className="highlight">Aplicaciones de 6to año</span>, con el objetivo de crear una
            plataforma interactiva que integre conceptos de <span className="highlight">Sistemas Operativos</span> con tecnologías web modernas.
          </p>
          <p>
            La temática elegida se centra en la <span className="highlight">seguridad informática</span>, 
            abordando amenazas, protección de sistemas Linux y automatización mediante Bash scripting.
          </p>
        </div>

        {/* Sección Equipo */}
        <div className="about-section team">
          <h2>El Equipo</h2>
          <div className="team-box">
            <div>
              <h3>Desarrolladores</h3>
              <p>
                Estudiantes de 6to año comprometidos con el aprendizaje de tecnologías web y la seguridad 
                en sistemas operativos.
              </p>
            </div>
            <div>
              <h3>Materia</h3>
              <p>
                Aplicaciones - 6to Año <br />
                Trabajo Práctico Final - 2024
              </p>
            </div>
          </div>
        </div>

        {/* Sección Tecnologías */}
        <div className="about-section technologies">
          <h2>Tecnologías Utilizadas</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;