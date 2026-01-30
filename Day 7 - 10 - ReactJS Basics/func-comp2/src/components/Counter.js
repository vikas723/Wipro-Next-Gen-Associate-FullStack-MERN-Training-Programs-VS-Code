import { useState } from 'react' // Example of UseState

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> Count: {count}</h2> {/*count - > current value,  0 is initial value*/}
      <button onClick={() => setCount(count+1)}> {/*Button click updates state , Component re-renders automatically*/}
        Increase
      </button>
    </div>
  ) 
}
export default Counter;