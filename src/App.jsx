import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  useEffect, useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from './components/Chat.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;