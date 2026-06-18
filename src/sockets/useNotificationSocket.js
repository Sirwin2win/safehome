import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSocket } from "./socket";
import { addNotification } from "../features/notifications/notificationSlice";

export const useNotificationSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = getSocket();

    if (!socket) return;

    const handleNotification = (data) => {
      console.log("LIVE NOTIF:", data);
      dispatch(addNotification(data));
    };

    socket.on("notification", handleNotification);

    return () => {
      socket.off("notification", handleNotification);
    };
  }, [dispatch]);
};
