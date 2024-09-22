import React, { useState } from "react";

interface PollFormProps {
  onSend: (poll: string) => void;
}

function PollForm({ onSend }: PollFormProps): JSX.Element {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-testid="pollText"
      />
      <button onClick={handleSend} data-testid="sendButton">
        Send
      </button>
    </>
  );
}

export default PollForm;
