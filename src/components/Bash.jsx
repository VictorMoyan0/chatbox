import React from 'react';
import { Terminal } from 'lucide-react';
import '../styles/bash.css';

function Bash(){
      const scripts = [
    {
        title: 'Verificar Actualizaciones del Sistema',
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
        title: 'Monitorear Intentos de Login Fallidos',
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
        title: 'Backup Automático',
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
        title: 'Escanear Puertos Abiertos',
        code: `#!/bin/bash
        # Verificar puertos abiertos localmente

        echo "Puertos en escucha en el sistema:"
        sudo netstat -tuln | grep LISTEN
        echo "------------------------------"
        echo "Procesos con puertos abiertos:"
        sudo lsof -i -P -n | grep LISTEN`,
    },
  ];
    return (
        <div className="bashpage-container">
            <div className="bashpage-content">
                <h1 className="bashpage-title">
                    <Terminal className="bashpage-icon" />
                    Bash & Scripting de Seguridad
                </h1>
                <section className="bashpage-section bashpage-intro">
                    <h2 className="bashpage-section-title blue">¿Qué es Bash?</h2>
                    <p className="bashpage-section-text">
                        Bash (Bourne Again Shell) es un intérprete de comandos y lenguaje de scripting utilizado en 
                        sistemas Unix/Linux. Permite automatizar tareas de administración y seguridad del sistema 
                        mediante scripts.
                    </p>
                    <div className="bashpage-feature-box">
                        <h3 className="bashpage-feature-title">Características Principales:</h3>
                        <ul className="bashpage-feature-list">
                        <li>• Ejecución de comandos del sistema</li>
                        <li>• Variables y estructuras de control</li>
                        <li>• Tuberías y redirecciones</li>
                        <li>• Automatización de tareas repetitivas</li>
                        <li>• Procesamiento de texto y archivos</li>
                        </ul>
                    </div>
                </section>

                <section className="bashpage-section bashpage-scripts">
                    <h2 className="bashpage-section-title cyan">Scripts de Seguridad Útiles</h2>
                    <div className="bashpage-scripts-list">
                        {scripts.map((script, index) => (
                        <div key={index} className="bashpage-script-card">
                            <h3 className="bashpage-script-title">{script.title}</h3>
                            <pre className="bashpage-script-code">{script.code}</pre>
                        </div>
                        ))}
                    </div>
                </section>

                <section className="bashpage-section bashpage-commands">
                    <h2 className="bashpage-section-title purple">Comandos Bash Esenciales</h2>
                    <div className="bashpage-commands-grid">
                        {essentialCommands.map((cmd, index) => (
                        <div key={index} className="bashpage-command-card">
                            <code className="bashpage-command-name">{cmd.name}</code>
                            <p className="bashpage-command-description">{cmd.description}</p>
                        </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Bash;