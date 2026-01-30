import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './component/Employee'
import Employee2 from './component/Employee2'
import NotificationPanel from './component/NotificationPanel'
// function App() {
//   const [count, setCount] = useState(0)
//   const [show, setShow] = useState(false);

//   return (
//     <>
//      <Employee/>
//      <Employee2/>
//      <div>
//           <button onClick={() => setShow(!show)}>
//         {show ? "Hide Notifications" : "Show Notifications"}
//       </button>
//       {show && <NotificationPanel />}
//       </div>
//     </>
//   )
// }

// export default App
import { Suspense, lazy } from "react";
const LazyLoading = lazy(() => {
  console.log(" Importing Dashboard...");
  return import("./component/LazyLoading");
});
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        Load Dashboard
      </button>
      {show && (
        <Suspense fallback={<h2>Loading Dashboard...</h2>}>
          <LazyLoading />
        </Suspense>
      )}
    </div>
  );
}
export default App;