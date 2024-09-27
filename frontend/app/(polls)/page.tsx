"use client";

import { useState } from "react";
import NewPollForm from "./blocks/NewPollForm";
import PollList from "./blocks/PollList";
import { SiteHeader } from "@/components/site-header";

export default function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-background text-foreground">
          <NewPollForm onSend={handleSend} />
          <PollList data={messages} />
        </div>
      </main>
    </>
  );
}
