import React, { createContext, useState } from "react";
import run from "../config/gemini"; // ✅ Import the Gemini API function

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [responses, setResponses] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  const onSent = async (prompt) => {
    if (!prompt.trim()) return;

    console.log("Sending message:", prompt); // ✅ Debugging log

    try {
      const response = await run(prompt); // ✅ Fetch AI response from Gemini API

      setResponses((prevResponses) => [...prevResponses, { prompt, response }]);

      setChatHistory((prevChats) => [...prevChats, prompt]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
    }
  };

  const clearChat = () => {
    setResponses([]);
    setChatHistory([]);
  };

  return (
    <Context.Provider value={{ responses, onSent, chatHistory, clearChat }}>
      {children}
    </Context.Provider>
  );
};
