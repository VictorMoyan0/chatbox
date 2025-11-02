import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "../styles/chat.css";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

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
        model: "gemini-2.5-flash",
        contents: preguntaActual,
        config: {
                systemInstruction:
                "Eres un experto de linux sabés mucho bash, comandos, react y demás cosas sobre el tema. Escribelo de una manera simple, es decir sin utilizar *, si vas a utilizar numeros da un salto de linea al usarlos.",
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
        { role: "ai", text: "⚠️ Error al conectar con Gemini." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
        <h1>💬 Asistente de IA </h1>
        <div className="chat-box">
            {messages.map((msg, i) => (
            <div key={i} className={msg.role === "user" ? "msg user" : "msg ai"}>
                <b>{msg.role === "user" ? "Tú:" : "Gemini:"}</b>
                <p>{msg.text}</p>
            </div>
            ))}
            {loading && <p>⏳ Generando respuesta...</p>}
        </div>

        <div className="chat-input">
            <input
            type="text"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend} disabled={loading}>
            Enviar
            </button>
        </div>
    </div>
    );
}

export default Chat;