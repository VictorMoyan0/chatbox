import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import "../styles/chat.css";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // Preguntas sugeridas
  const suggestedQuestions = [
    '¿Qué es un ataque DDoS?',
    '¿Cómo funcionan los permisos en Linux?',
    'Dame ejemplos de comandos bash para seguridad',
    '¿Qué es el ransomware?',
  ];

  // Auto-scroll cuando hay nuevos mensajes
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Guardar la pregunta del usuario
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const preguntaActual = input;
    setInput("");
    setLoading(true);

    // Crear objeto para Gemini
    const object = {
      model: "gemini-2.0-flash-exp",
      contents: preguntaActual,
      config: {
        systemInstruction:
          "Eres un experto en Linux, seguridad informática, comandos bash y sistemas operativos. Tu objetivo es explicar conceptos de manera clara y práctica. Escribe de forma simple y directa, sin usar asteriscos para formato. Si usas números o listas, da un salto de línea antes de cada punto. Proporciona ejemplos de código cuando sea relevante.",
      },
    };

    try {
      const response = await ai.models.generateContentStream(object);

      let aiText = "";

      for await (const chunk of response) {
        aiText += chunk.text;
        setMessages((prev) => {
          const updated = [...prev];
          if (updated[updated.length - 1]?.role === "ai") {
            updated[updated.length - 1].text = aiText;
            return [...updated];
          }
          return [...updated, { role: "ai", text: aiText }];
        });
      }

      // Agregar salto de línea al final
      setMessages((prev) => {
        const updated = [...prev];
        if (updated[updated.length - 1]?.role === "ai") {
          updated[updated.length - 1].text += "\n";
        }
        return updated;
      });
    } catch (error) {
      console.error("Error generando contenido:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Error al conectar con Gemini. Por favor, verifica tu API key o intenta nuevamente." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Manejar Enter para enviar
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Función para usar pregunta sugerida
  const handleSuggestionClick = (question) => {
    setInput(question);
  };

  return (
    <div className="chat-container">
      <h1>💬 Asistente de IA</h1>
      
      <div className="chat-box" ref={chatBoxRef}>
        {messages.length === 0 ? (
          <div className="empty-state msg ai">
            <p>
              💬 ¡Hola! Soy tu asistente de Sistemas Operativos.
              <br /><br />
              Puedo ayudarte con:
              <br />• Explicar conceptos de seguridad
              <br />• Comandos de Linux y Bash
              <br />• Tipos de ataques y malware
              <br />• Mejores prácticas de protección
            </p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={msg.role === "user" ? "msg user" : "msg ai"}>
              <b>{msg.role === "user" ? "Tú:" : "🤖 Gemini:"}</b>
              <p>{msg.text}</p>
            </div>
          ))
        )}
        {loading && <p className="loading-message">⏳ Generando respuesta...</p>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe tu pregunta sobre sistemas operativos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {/* Sección de preguntas sugeridas */}
      <div className="suggestions-container">
        <h3 className="suggestions-title">💡 Preguntas Sugeridas:</h3>
        <div className="suggestions-grid">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(question)}
              className="suggestion-button"
              disabled={loading}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;