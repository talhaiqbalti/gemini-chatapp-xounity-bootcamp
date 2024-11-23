"use client";

import { useEffect, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

import { useChatContext } from "@/context/chatContext";

export default function ChatPage() {
  const { onSend, prompt, setPrompt, result } = useChatContext();

  const [messages, setMessages] = useState([
    { id: 1, content: "Hello! How can I assist you today?", sender: "ai" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newUserMessage = {
        id: messages.length + 1,
        content: input.trim(),
        sender: "user",
      };
      setMessages([...messages, newUserMessage]);
      setInput("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          content: `I understand you said: "${input.trim()}". How can I help you with that?`,
          sender: "ai",
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">AI Chat Assistant</h1>
        <Button variant="outline" onClick={()=>setMessages([])}>New Chat</Button>
      </header>

      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback>
                    {message.sender === "user" ? "U" : "AI"}
                  </AvatarFallback>
                  <AvatarImage
                    src={
                      message.sender === "user"
                        ? "/user-avatar.png"
                        : "/ai-avatar.png"
                    }
                  />
                </Avatar>
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex space-x-2"
        >
          <Input
            type="text"
            placeholder="Type your message here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow"
          />
          <Button
            type="submit"
            size="icon"
            onClick={async () => {
              if (prompt != "") {
                let arr = messages

                let newUserMessage = {
                  id: messages.length + 1,
                  content: prompt,
                  sender: "user",
                };

                arr.push(newUserMessage);
            
                await setMessages(arr);

                let res = await onSend();

                let newAIMessage = {
                  id: messages.length + 1,
                  content: res,
                  sender: "ai",
                };

                arr.push(newAIMessage)

                await setMessages(arr);

                console.log(messages)
              }else{
                alert("please ask a question!")
              }
            }}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
