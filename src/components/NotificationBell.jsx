import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUnreadCount } from "../features/notifications/notificationSlice";
import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = useSelector(selectUnreadCount);
  const { items } = useSelector((state) => state.notifications);
  console.log(items);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        🔔
        {unreadCount > 0 && (
          <span className="text-red-500 text-lg font-bold">{unreadCount}</span>
        )}
      </button>

      {isOpen && <NotificationDropdown />}
    </div>
  );
}
