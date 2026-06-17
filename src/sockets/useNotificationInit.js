import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setNotifications,
  setUnreadCount,
} from "../features/notifications/notificationSlice";

export const useNotificationInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      const [notifRes, unreadRes] = await Promise.all([
        axios.get("/notifications?page=1&limit=20"),
        axios.get("/notifications/unread-count"),
      ]);

      dispatch(setNotifications(notifRes.data.data));
      dispatch(setUnreadCount(unreadRes.data.unreadCount));
    };

    load();
  }, [dispatch]);
};
