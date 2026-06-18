import { useSelector } from "react-redux";
import { selectUnreadCount } from "../features/notifications/notificationSlice";

export default function NotificationBell() {
  const unreadCount = useSelector(selectUnreadCount);
  console.log(unreadCount);
  const items = useSelector((state) => state.notifications.items);
  console.log("items:", items);

  return (
    <div>
      🔔{" "}
      {unreadCount > 0 && (
        <span className="text-red-500 text-lg font-bold -ms-2">
          {unreadCount}
        </span>
      )}
    </div>
  );
}
