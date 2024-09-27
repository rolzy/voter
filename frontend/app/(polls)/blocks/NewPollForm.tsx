"use client";

import React from "react";
import { useState } from "react";

function NewPollForm({ onSend }): JSX.Element {
  const [inputText, setInputText] = useState("");

  function handleTextChange(event) {
    setInputText(event.target.value);
  }

  function handleSend() {
    onSend(inputText);
    setInputText("");
  }

  return (
    <>
      <input
        type="text"
        data-testid="pollText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </>
  );
}

export default NewPollForm;
