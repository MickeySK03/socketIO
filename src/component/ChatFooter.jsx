/* eslint-disable react/prop-types */

import { useState } from "react";

export default function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");
  console.log(localStorage.getItem("userName"));

  const data = {
    text: message,
    name: localStorage.getItem("userName"),
    id: `${socket.id}${Math.random()}`,
    socketID: socket.id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("sender", data);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write something"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
}
