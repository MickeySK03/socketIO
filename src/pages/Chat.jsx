/* eslint-disable react/prop-types */
import ChatBar from "../component/ChatBar";
import ChatBody from "../component/ChatBody";
import ChatFooter from "../component/ChatFooter";

export default function Chat({ socket }) {
  return (
    <div className="chat_main">
      <ChatBar socket={socket} />
      <ChatBody socket={socket} />
      <ChatFooter socket={socket} />
    </div>
  );
}
