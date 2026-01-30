import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState("info");

  const showNotification = (msg, variant = "info") => {
    setMessage(msg);
    setType(variant);

    setTimeout(() => {
      setMessage(null);
    }, 1500);
  };

  return (
    <NotificationContext.Provider value={{ message, type, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }
  return context;
}