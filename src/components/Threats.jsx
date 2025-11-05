function Threats(){
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
        {
        title: 'Ransomware',
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
    return(
        <>

        </>
    )
}
export default Threats;