import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const divRoot = document.getElementById('root')
const root = ReactDOM.createRoot(divRoot)

root.render(
  <div>
    <FavoriyeList />
  </div>
)

function FavoriyeList() {
  const [list, setList] = useState(['Пельмени'])
  const [value, setValue] = useState('')

  function addItem() {
    setList(list.concat([value]))
  }

  return (
    <div>
      value: {value}
      <input type='text' 
        value={value} 
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={addItem}>Добавить</button>
    <ul>
     {list.map((item) => (<li>{item}</li>))}
    </ul>
    </div>
    
  )

}