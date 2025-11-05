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
    return(

    )
}
export default Bash;