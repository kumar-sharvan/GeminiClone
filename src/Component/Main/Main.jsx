import React, { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const [prompt, setPrompt] = useState("");
  const { onSent, responses } = useContext(Context);
  const responseContainerRef = useRef(null);

  // Scroll to the latest response automatically
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop =
        responseContainerRef.current.scrollHeight;
    }
  }, [responses]);

  // Handle "Enter" key press to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleSend = () => {
    if (prompt.trim()) {
      onSent(prompt);
      setPrompt("");
    }
  };

  return (
    <div className="main-container">
      <h1 className="hello-text text-gradient mb-3">Hello, Users</h1>

      {/* AI Responses Container */}
      <div className="responses-container" ref={responseContainerRef}>
        {responses.length > 0 ? (
          responses.map((item, index) => (
            <div key={index} className="response-card">
              <div className="prompt-text">
                <strong className="text-warning">You:</strong> {item.prompt}
              </div>
              <div className="ai-response">
                <strong className="text-info">Gemini:</strong> {item.response}
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No responses yet...</p>
        )}
      </div>

      {/* Input Bar (Fixed at Bottom) */}
      <div className="input-container">
        <div className="input-group">
          <span className="input-group-text bg-secondary text-white">
            <i className="fa-solid fa-image"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyPress} // ✅ Press Enter to send
            autoFocus
          />
          <button className="btn btn-primary" onClick={handleSend}>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
