import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // All your react component will be re-rendered
import './index.css' // It is a global css
import App from './App.jsx'



const root1 = document.getElementById('root'); // without using the strict mode
createRoot(root1).render(<App/>)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const root = document.getElementById("root");
createRoot(root.render(
  <StrictMode>
    <App />
  </StrictMode>,
))