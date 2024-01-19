/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatBody({ socket }) {
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();
  // console.log(localStorage.getItem("userName"));

  useEffect(() => {
    socket.on("receiver", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };
  console.log(messages);

  const x = messages.map((message) => {
    return message.text;
  });
  console.log(x);
  return (
    <>
      <header>
        <p>chat room</p>
        <button onClick={handleLeaveChat}>Leave chat</button>
      </header>
      <div className="chat_container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">you</p>
              <div className="message__sender">
                <p> {message.text} </p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p className="receiver__name">{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
