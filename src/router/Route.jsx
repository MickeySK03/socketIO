import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:8888");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home socket={socket} />,
  },
  { path: "chat", element: <Chat socket={socket} /> },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
