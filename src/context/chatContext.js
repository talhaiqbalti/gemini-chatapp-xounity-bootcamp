"use client";
import { createContext, useState, useContext } from "react";
import run from "@/lib/gemini";
import { AwardIcon } from "lucide-react";

// Create the context
const ChatContext = createContext();

// Create the context provider component
export const ChatContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Define the onSend function
  const onSend = async () => {
    setPrompt("");
    setLoading(true);
    const response = await run(prompt);
    await setResult(response);
    setLoading(false);
    return response;
  };

  const options = {
    prompt,
    setPrompt,
    prevPrompt,
    setPrevPrompt,
    result,
    loading,
    onSend,
  };

  return (
    <ChatContext.Provider value={options}>{children}</ChatContext.Provider>
  );
};

//custom context hook
export const useChatContext = () => {
  const context = useContext(ChatContext);
  return context;
};
