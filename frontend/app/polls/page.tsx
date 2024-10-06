"use client";

import { useState } from "react";
//import NewPollForm from "./forms/NewPollForm";
//import PollList from "./views/PollList";
import PollSwiper from "./views/PollSwiper";

export default function PollPage() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <main className="flex-1">
        <PollSwiper />
      </main>
    </>
  );
}
