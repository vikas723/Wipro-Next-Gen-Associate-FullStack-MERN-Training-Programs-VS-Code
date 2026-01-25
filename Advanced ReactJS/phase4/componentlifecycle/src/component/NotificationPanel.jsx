
import { useEffect, useState } from "react";
function NotificationPanel() {
  const [count, setCount] = useState(0);
  useEffect(() => { // It will mounted and run once after setting the state 
    console.log(" Notification service started"); //Mounted  
    const intervalId = setInterval(() => { // Setting the Interval
      console.log("Fetching notifications..."); 
      setCount((prev) => prev + 1);
    }, 3000); //for 3s

    // Notification is where the timer you have set start running
    // When component is active app keeps fetching data and UI Updates automatically
    return () => {
      console.log(" Notification service stopped");
      clearInterval(intervalId); // for stopping the service or when timer is finished we use clear interval
      // when interval is cleared the memory is finished or released
    };
  }, []);
  return (
    <div>
      <h3>Notifications fetched: {count}</h3>
    </div>
  );
}
export default NotificationPanel;