/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>sign in to open chat</h1>
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button>Sign In</button>
    </form>
  );
}
