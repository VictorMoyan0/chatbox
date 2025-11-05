import React from 'react';
import { AlertTriangle, Bug } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import '../styles/threats.css';

function Threats(){
  const navigate = useNavigate();
    const malwareTypes = [
        {
          title: 'Virus',
          description: 'Se replica insertándose en otros programas. Requiere acción del usuario para propagarse.',
        },
        {
          title: 'Gusanos',
          description: 'Se propagan automáticamente por la red sin intervención del usuario.',
        },
        {
          title: 'Troyanos',
          description: 'Se disfrazan como software legítimo pero ejecutan acciones maliciosas.',
        },
        { title: 'Ransomware',
          description: 'Cifra archivos del sistema y exige pago para restaurar el acceso.',
        },
    ];
    const attackTypes = [
        {
        title: 'DoS/DDoS (Denial of Service)',
        description: 'Sobrecarga un sistema con tráfico excesivo para hacerlo inaccesible a usuarios legítimos.',
        },
        {
        title: 'Phishing',
        description: 'Engaña a usuarios para obtener información sensible haciéndose pasar por entidades confiables.',
        },
        {
        title: 'Man-in-the-Middle (MITM)',
        description: 'Intercepta comunicaciones entre dos partes sin su conocimiento para robar o modificar datos.',
        },
        {
        title: 'SQL Injection',
        description: 'Inyecta código SQL malicioso en campos de entrada para manipular bases de datos.',
        },
    ];
    const recommendations = [
        'Mantén tu sistema operativo y software actualizado',
        'Usa antivirus y firewall activos',
        'No descargues archivos de fuentes desconocidas',
        'Realiza copias de seguridad regularmente',
        'Utiliza contraseñas fuertes y autenticación de dos factores',
    ];
    return(
        <div className="threats-container">
            <div className="threats-content">
        <h1 className="threats-title">
          <AlertTriangle className="title-icon" />
          Amenazas y Tipos de Ataques
        </h1>

        <div className="threats-sections">
          {/* Malware Section */}
          <div className="card malware-card">
            <h2 className="card-title">
              <Bug className="card-icon" />
              Malware y Virus
            </h2>
            <div className="card-content">
              <p className="intro-text">
                El malware es software malicioso diseñado para dañar, explotar o infiltrarse en sistemas. Los tipos principales incluyen:
              </p>
              <div className="malware-grid">
                {malwareTypes.map((malware, index) => (
                  <div key={index} className="malware-item">
                    <h3 className="item-title">{malware.title}</h3>
                    <p className="item-description">{malware.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attack Types Section */}
          <div className="card attacks-card">
            <h2 className="card-title">Tipos de Ataques Comunes</h2>
            <div className="attacks-list">
              {attackTypes.map((attack, index) => (
                <div key={index} className="attack-item">
                  <h3 className="item-title">{attack.title}</h3>
                  <p className="item-description">{attack.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="card recommendations-card">
            <h3 className="recommendations-title">⚠️ Recomendaciones de Seguridad</h3>
            <ul className="recommendations-list">
              {recommendations.map((rec, index) => (
                <li key={index} className="recommendation-item">✓ {rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Threats;