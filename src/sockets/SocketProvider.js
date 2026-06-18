import { useEffect } from "react";
import { connectSocket, getSocket } from "./sockets/socket";

export default function SocketProvider({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const socket = connectSocket(token);

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return children;
}
