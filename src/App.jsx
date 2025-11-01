import {  useEffect, useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from './components/Chat.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
      <Chat />
    </>
  )
}

export default App;