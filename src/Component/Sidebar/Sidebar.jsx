import React, { useState, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { clearChat, chatHistory } = useContext(Context);

  return (
    <div className={`sidebar ${extended ? "extended" : "collapsed"}`}>
      <i
        className="fa-solid fa-bars mb-5 mt-3"
        onClick={() => setExtended(!extended)}
      ></i>

      {/* New Chat Button */}
      <div className="top">
        <span onClick={clearChat} style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-plus plus"></i>
        </span>
        {extended && (
          <a onClick={clearChat} className="text-decoration-none">
            New Chat
          </a>
        )}
      </div>

      {/* Recent Chats */}
      <div className="recent">
        <ul className="list-unstyled">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat, index) => (
              <li key={index} className="text-light">
                {extended && chat}
              </li>
            ))
          ) : (
            <li className="text-muted">{extended && "No recent chats"}</li>
          )}
        </ul>
      </div>

      {/* Bottom Links */}
      <div className="bottom mb-0">
        <ul className="list-unstyled">
          <li>
            <i className="fa-solid fa-diamond me-2"></i>
            {extended && <a href="/gem-manager">Gem manager</a>}
          </li>
          <li>
            <i className="bi bi-question-circle me-2"></i>
            {extended && <a href="/help">Help</a>}
          </li>
          <li>
            <i className="fas fa-history me-2"></i>
            {extended && <a href="/activity">Activity</a>}
          </li>
          <li>
            <i className="fa-solid fa-gear me-2"></i>
            {extended && <a href="/settings">Settings</a>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
