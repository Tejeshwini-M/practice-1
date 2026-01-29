import React from 'react'
import first from './component/first'
import second from './component/second'

export default function App() {
  return (
    <div>
      <p>My first React App with class and function components</p>
      <h1>First Component</h1>
      <input type='text' placeholder='Enter your name'></input>
      <first />
      <second/>
      </div>
  )
}
