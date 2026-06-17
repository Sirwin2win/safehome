import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (token) => {
  socket = io("https://api.safehomeproperties.com", {
    auth: { token },
    transports: ["websocket", "polling"],
  });

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};
