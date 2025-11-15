import React from "react";
import { Terminal } from "lucide-react";
import "../styles/bash.css";

function Bash() {
  const scripts = [
    {
      title: "1. Verificar Actualizaciones del Sistema",
      code: `#!/bin/bash
# Script para verificar actualizaciones
echo "Verificando actualizaciones disponibles..."
sudo apt update
echo "------------------------------"
apt list --upgradable
echo "------------------------------"
echo "Para instalar: sudo apt upgrade"`,
    },
    {
      title: "2. Monitorear Intentos de Login Fallidos",
      code: `#!/bin/bash
# Detectar intentos de acceso fallidos
echo "Intentos de login fallidos:"
sudo grep "Failed password" /var/log/auth.log | tail -20
echo "------------------------------"
echo "IPs con más intentos:"
sudo grep "Failed password" /var/log/auth.log | \\
grep -oP '\\d+\\.\\d+\\.\\d+\\.\\d+' | sort | uniq -c | sort -nr`,
    },
    {
      title: "3. Backup Automático",
      code: `#!/bin/bash
# Script de backup simple
FECHA=$(date +%Y%m%d_%H%M%S)
ORIGEN="/home/usuario/documentos"
DESTINO="/backup"
echo "Iniciando backup: $FECHA"
tar -czf "$DESTINO/backup_$FECHA.tar.gz" "$ORIGEN"
echo "Backup completado: backup_$FECHA.tar.gz"`,
    },
    {
      title: "4. Escanear Puertos Abiertos",
      code: `#!/bin/bash
# Verificar puertos abiertos localmente
echo "Puertos en escucha en el sistema:"
sudo netstat -tuln | grep LISTEN
echo "------------------------------"
echo "Procesos con puertos abiertos:"
sudo lsof -i -P -n | grep LISTEN`,
    },
  ];

  const essentialCommands = [
    { name: "grep", description: "Buscar patrones en archivos" },
    { name: "awk", description: "Procesamiento de texto avanzado" },
    { name: "sed", description: "Editor de flujo para transformar texto" },
    { name: "find", description: "Buscar archivos en el sistema" },
    { name: "ps", description: "Listar procesos en ejecución" },
    { name: "top", description: "Monitor de recursos en tiempo real" },
  ];

  return (
    <div className="bash-container">
      <div className="bash-content">
        {/* Encabezado */}
        <header className="bash-header">
          <Terminal className="bash-icon" />
          <h1 className="bash-title">Bash & Scripting de Seguridad</h1>
        </header>

        <main className="bash-sections">
          {/* Sección: Introducción */}
          <section className="bash-section intro-section">
            <h2 className="bash-section-title blue">¿Qué es Bash?</h2>
            <p className="bash-section-text">
              Bash (Bourne Again Shell) es un intérprete de comandos y lenguaje
              de scripting utilizado en sistemas Unix/Linux. Permite automatizar
              tareas de administración y seguridad del sistema mediante scripts.
            </p>

            <div className="features-box">
              <h3 className="features-title">Características Principales:</h3>
              <ul className="features-list">
                <li>• Ejecución de comandos del sistema</li>
                <li>• Variables y estructuras de control</li>
                <li>• Tuberías y redirecciones</li>
                <li>• Automatización de tareas repetitivas</li>
                <li>• Procesamiento de texto y archivos</li>
              </ul>
            </div>
          </section>

          {/* Sección: Scripts */}
          <section className="bash-section scripts-section">
            <h2 className="bash-section-title cyan">Scripts de Seguridad Útiles</h2>
            <div className="scripts-list">
              {scripts.map((script, index) => (
                <article key={index} className="script-card">
                  <h3 className="script-title">{script.title}</h3>
                  <pre className="script-code">{script.code}</pre>
                </article>
              ))}
            </div>
          </section>

          {/* Sección: Comandos esenciales */}
          <section className="bash-section commands-section">
            <h2 className="bash-section-title purple">Comandos Bash Esenciales</h2>
            <div className="commands-grid">
              {essentialCommands.map((cmd, index) => (
                <div key={index} className="command-card">
                  <code className="command-name">{cmd.name}</code>
                  <p className="command-description">{cmd.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Bash;