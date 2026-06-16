import { useState } from 'react'
import './App.css'


export default function App() {
  const [name, setName] = useState('')
  // function updateName (event) {
  //   setName(event.target.value)
  // }
  return (
    <div>
      <h1>RSVP Practice</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>{name}</p>
    </div>
  )
}