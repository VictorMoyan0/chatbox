import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "../styles/chat.css";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

function Chat(){
  const [messages, setMessages] = useState([]); // historial de mensajes
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await ai.models.generateContentStream({
        model: "gemini-2.0-flash",
        contents: input,
        config: {
          systemInstruction:
            "Eres un estudiante secundario deprimido que responde con un tono sarcástico y pesimista.",
        },
      });

      let aiResponse = "";

      // Leer la respuesta por partes
      for await (const chunk of response.stream) {
        aiResponse += chunk.text();
        setMessages((prev) => {
          const updated = [...prev];
          if (updated[updated.length - 1]?.role === "ai") {
            updated[updated.length - 1].text = aiResponse;
            return [...updated];
          }
          return [...updated, { role: "ai", text: aiResponse }];
        });
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Error al conectar con Gemini." },
      ]);
    } finally {
      setLoading(false);
    }
  };

    return(
    <div className="chat-container">
        <h1>💬 Chat con IA (Gemini)</h1>
        <div className="chat-box">
            {messages.map((msg, i) => (
            <div
                key={i}
                className={msg.role === "user" ? "msg user" : "msg ai"}
            >
                <b>{msg.role === "user" ? "Tú:" : "Gemini:"}</b>
                <p>{msg.text}</p>
            </div>
            ))}
            {loading && <p>⏳ Generando respuesta...</p>}
        </div>
        <div className="chat-input">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSend} disabled={loading}>
            Enviar
            </button>
        </div>
    </div>        
    )
}

export default Chat;