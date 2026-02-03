import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState("register");
  const [queue, setQueue] = useState([]);
  
  // Registration State
  const [formData, setFormData] = useState({ name: "", age: "", symptom: "", is_emergency: false });
  const [ticket, setTicket] = useState(null);
  
  // Chatbot State
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // CHANGE THIS URL AFTER DEPLOYING BACKEND (e.g., https://your-app.onrender.com)
  const API_BASE_URL = "http://127.0.0.1:8000"; 
  // const API_BASE_URL = "https://hospital-backend-hackathon.onrender.com"; // Use this format after deploy

  // --- API CALLS ---

  const fetchQueue = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/queue`);
      setQueue(res.data);
    } catch (err) {
      console.error("Queue fetch error", err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/register`, formData);
      setTicket(res.data);
      fetchQueue(); // Refresh queue
      alert(`Registered! Token: ${res.data.token}`);
    } catch (err) {
      alert("Registration failed. Is backend running?");
    }
  };

  const handleChat = async () => {
    if (!chatMessage) return;
    const newHistory = [...chatHistory, { sender: "user", text: chatMessage }];
    setChatHistory(newHistory);
    setIsLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/chat`, { message: chatMessage });
      setChatHistory([...newHistory, { sender: "bot", text: res.data.response }]);
    } catch (err) {
      setChatHistory([...newHistory, { sender: "bot", text: "Error connecting to AI." }]);
    }
    setIsLoading(false);
    setChatMessage("");
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  // --- RENDER ---
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>🏥 CareConnect AI</h1>
        <div className="nav-links">
          <button onClick={() => setActiveTab("register")}>Registration</button>
          <button onClick={() => setActiveTab("queue")}>Live Queue</button>
          <button onClick={() => setActiveTab("chat")}>AI Helpdesk</button>
        </div>
      </nav>

      <div className="content">
        {/* REGISTRATION TAB */}
        {activeTab === "register" && (
          <div className="card">
            <h2>Patient Registration</h2>
            <form onSubmit={handleRegister}>
              <input placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
              <input placeholder="Age" type="number" onChange={e => setFormData({...formData, age: e.target.value})} required />
              <input placeholder="Symptoms" onChange={e => setFormData({...formData, symptom: e.target.value})} required />
              <label>
                <input type="checkbox" onChange={e => setFormData({...formData, is_emergency: e.target.checked})} />
                Critical Emergency?
              </label>
              <button type="submit">Get Token</button>
            </form>
            {ticket && (
              <div className="ticket-box">
                <h3>Token #{ticket.token}</h3>
                <p>Est. Wait: {ticket.wait_time} mins</p>
              </div>
            )}
          </div>
        )}

        {/* QUEUE TAB */}
        {activeTab === "queue" && (
          <div className="card">
            <h2>Live Waiting List</h2>
            <table>
              <thead><tr><th>Token</th><th>Name</th><th>Priority</th><th>Wait</th></tr></thead>
              <tbody>
                {queue.map((p, idx) => (
                  <tr key={idx} style={{background: p.priority === "Emergency" ? "#ffebee" : "white"}}>
                    <td>{p.token}</td>
                    <td>{p.name}</td>
                    <td>{p.priority}</td>
                    <td>{p.wait_time}m</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CHATBOT TAB */}
        {activeTab === "chat" && (
          <div className="card chat-card">
            <h2>🤖 AI Assistant</h2>
            <div className="chat-window">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className="message bot">Thinking...</div>}
            </div>
            <div className="chat-input">
              <input 
                value={chatMessage} 
                onChange={e => setChatMessage(e.target.value)}
                placeholder="Ask about timings, doctors..." 
              />
              <button onClick={handleChat}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
