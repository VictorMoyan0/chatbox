import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/general.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Chat from './components/Chat.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;