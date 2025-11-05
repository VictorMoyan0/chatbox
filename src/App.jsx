import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Chat from './components/Chat.jsx'
import About from './components/About.jsx'
import Threats from "./components/Threats.jsx"
import Linux from "./components/Linux.jsx"
import './styles/general.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/linux" element={<Linux />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;