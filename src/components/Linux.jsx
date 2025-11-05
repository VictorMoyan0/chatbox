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
        <>

        </>
    )
}

export default Linux;