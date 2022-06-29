import React, { useEffect, useState, useTransition } from 'react';
import ReactDOM from 'react-dom/client';

const divRoot = document.getElementById('root')
const root = ReactDOM.createRoot(divRoot)

root.render(
  <div>
    <Clock />
  </div>
)

function Clock() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count', count)
  }, [count])
 
  return (
    <div>
      <div>Число: {count}</div>
     <button onClick={() => setCount(count +1)}>
      Увеличить
      </button>
    </div>
    
  )

}