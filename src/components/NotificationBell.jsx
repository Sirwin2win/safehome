import { useSelector } from "react-redux";

export default function NotificationBell() {
  const unreadCount = useSelector((state) => state.notifications.unreadCount);

  return <div>🔔 {unreadCount > 0 ? unreadCount : ""}</div>;
}
