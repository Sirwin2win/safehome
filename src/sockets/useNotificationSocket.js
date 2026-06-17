import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSocket } from "./socket";
import {
  addNotification,
  markAllAsReadLocal,
  setUnreadCount,
} from "../features/notifications/notificationSlice";

export const useNotificationSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = getSocket();

    if (!socket) return;

    // NEW NOTIFICATION
    socket.on("notification", (data) => {
      dispatch(addNotification(data));
    });

    // MARK SINGLE READ (from backend eventBus)
    socket.on("notification.read", ({ notificationId }) => {
      dispatch(markAsReadLocal(notificationId));
    });

    // MARK ALL READ
    socket.on("notification.read.all", () => {
      dispatch(markAllAsReadLocal());
    });

    return () => {
      socket.off("notification");
      socket.off("notification.read");
      socket.off("notification.read.all");
    };
  }, [dispatch]);
};
