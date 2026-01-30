import { useNotification } from "../context/NotificationContext";

const styles = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-purple-600",
};

const NotificationBar = () => {
  const { message, type } = useNotification();

  if (!message) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 text-white text-lg font-semibold
      text-center py-3 shadow-md transition-all ${styles[type]}`}
    >
      {message}
    </div>
  );
};

export default NotificationBar;
