import React from 'react';
import './App.css'

const Todo = ({onClick, completed,text}) => {
  return (
    <div className='todo'>
         <li 
         onClick={onClick}
         style={{
             textDecoration: completed? 'line-through' :'none'
         }}
    >{text}
  </li>
    </div>
  )
}

export default Todo