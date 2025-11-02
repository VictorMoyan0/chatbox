import { AlertTriangle, Server, Terminal } from 'lucide-react';
import Hero from './Hero';
import Card from './Card';
import CTA from './CTA';
import '../styles/home.css';

function Home(){
    const features = [
        { id: 'threats', icon: AlertTriangle, title: 'Amenazas y Ataques', description: 'Conoce los principales tipos de ataques informáticos, malware y técnicas de intrusión que amenazan los sistemas modernos.', color: 'red' },
        { id: 'linux', icon: Server, title: 'Seguridad en Linux', description: 'Aprende sobre permisos, usuarios, grupos y mejores prácticas para asegurar sistemas Linux.', color: 'green' },
        { id: 'bash', icon: Terminal, title: 'Bash & Scripting', description: 'Domina la línea de comandos y automatiza tareas de seguridad con scripts en Bash.', color: 'blue' },
    ];
    return(
    <div className="home-page">
      <div className="home-container">
        <Hero />
        <div className="features-grid">
          {features.map(f => (
            <Card
              key={f.id}
              icon={f.icon}
              title={f.title}
              description={f.description}
              color={f.color}
              onClick={() => console.log(f.id)}
            />
          ))}
        </div>
        <CTA onClick={() => navigate('/chat')} />
      </div>
    </div>
    )
}

export default Home;