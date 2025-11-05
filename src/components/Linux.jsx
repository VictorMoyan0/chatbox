import React from "react";
import { Server } from "lucide-react";
import '../styles/linux.css';

function Linux(){
    const commands = [
        { name: 'chmod', description: 'Cambia los permisos de archivos y directorios', example: 'chmod 755 script.sh' },
        { name: 'chown', description: 'Cambia el propietario de un archivo', example: 'chown usuario:grupo archivo.txt' },
        { name: 'sudo', description: 'Ejecuta comandos con privilegios de superusuario', example: 'sudo apt update' },
        { name: 'firewall (ufw)', description: 'Gestiona el firewall del sistema', example: 'sudo ufw enable' },
    ];

    const userCommands = [
        { title: 'Crear Usuario', command: 'sudo useradd -m nombre' },
        { title: 'Agregar a Grupo', command: 'sudo usermod -aG grupo usuario' },
        { title: 'Ver Usuarios', command: 'cat /etc/passwd' },
        { title: 'Ver Grupos', command: 'groups usuario' },
    ];

    return(
    <main className="linux-page">
      <section className="linux-wrapper">
        <header className="page-header">
          <Server className="page-icon" />
          <h1 className="page-title">Seguridad en Linux</h1>
        </header>

        <section className="content-sections">
          {/* 📂 Sistema de Permisos */}
          <article className="feature-card border-green">
            <h2 className="feature-title text-green">Sistema de Permisos</h2>
            <p className="feature-description">
              Linux utiliza un sistema robusto de permisos para controlar el acceso a archivos y directorios. 
              Cada archivo tiene tres tipos de permisos para tres categorías de usuarios.
            </p>

            <div className="code-section">
              <div className="code-preview">
                <p>$ ls -la</p>
                <p className="code-output">-rwxr-xr-- 1 usuario grupo 4096 Nov 1 10:30 archivo.txt</p>
              </div>

              <div className="permissions-list">
                <div className="permission-item">
                  <h4 className="permission-title">Propietario (rwx)</h4>
                  <p>Lectura, Escritura, Ejecución</p>
                </div>
                <div className="permission-item">
                  <h4 className="permission-title">Grupo (r-x)</h4>
                  <p>Lectura, Ejecución</p>
                </div>
                <div className="permission-item">
                  <h4 className="permission-title">Otros (r--)</h4>
                  <p>Solo Lectura</p>
                </div>
              </div>
            </div>
          </article>

          {/* ⚙️ Comandos Esenciales */}
          <article className="feature-card border-blue">
            <h2 className="feature-title text-blue">Comandos Esenciales de Seguridad</h2>
            <div className="command-section">
              {commands.map((cmd, index) => (
                <div key={index} className="command-item">
                  <h3 className="command-name">{cmd.name}</h3>
                  <p className="command-description">{cmd.description}</p>
                  <code className="command-example">{cmd.example}</code>
                </div>
              ))}
            </div>
          </article>

          {/* 👥 Usuarios y Grupos */}
          <article className="feature-card border-purple">
            <h2 className="feature-title text-purple">Usuarios y Grupos</h2>
            <p className="feature-description">
              Linux gestiona la seguridad mediante usuarios y grupos. Cada usuario tiene un ID único (UID) 
              y puede pertenecer a múltiples grupos.
            </p>

            <div className="user-section">
              {userCommands.map((item, index) => (
                <div key={index} className="user-item">
                  <h4 className="user-title">{item.title}</h4>
                  <code className="command-example">{item.command}</code>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
    )
}

export default Linux;