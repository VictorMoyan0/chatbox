import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function Chat(){
    return(
        <div className="chat-container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
            <h1>💬 Chat con IA (Gemini)</h1>
            <div
                className="chat-box"
                style={{
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 10,
                height: 400,
                overflowY: "auto",
                backgroundColor: "#f9f9f9",
                }}
            >
                {messages.map((msg, i) => (
                <div
                    key={i}
                    style={{
                    textAlign: msg.role === "user" ? "right" : "left",
                    margin: "8px 0",
                    }}
                >
                    <b>{msg.role === "user" ? "Tú:" : "Gemini:"}</b>
                    <p
                    style={{
                        display: "inline-block",
                        backgroundColor: msg.role === "user" ? "#d1e7ff" : "#e8ffe8",
                        borderRadius: 10,
                        padding: "8px 12px",
                        maxWidth: "80%",
                    }}
                    >
                    {msg.text}
                    </p>
                </div>
                ))}
                {loading && <p>⏳ Generando respuesta...</p>}
            </div>

            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                style={{ flex: 1, padding: 8 }}
                />
                <button onClick={handleSend} disabled={loading}>
                Enviar
                </button>
            </div>
        </div>
    )
}
export default Chat;