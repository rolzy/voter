import React, { useState } from "react";
import PollForm from "./polls/PollForm";
import PollList from "./polls/PollList";

function App() {
  const [polls, setPolls] = useState<string[]>([]);
  const handleSend = (newPoll: string) => {
    setPolls([newPoll, ...polls]);
  };

  return (
    <>
      <PollForm onSend={handleSend} />
      <PollList data={polls} />
    </>
  );
}

export default App;
