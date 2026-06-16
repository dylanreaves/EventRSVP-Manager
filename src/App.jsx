import { useState } from 'react'
import './App.css'


export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // function updateName (event) {
  //   setName(event.target.value)
  // }

  return (
    <div>
      <h1>Company Picnic RSVP</h1>
      <form>
        <label for="name"> Name </label>
        <input type="name" name="name"></input>
        <br/>
        <label for="email"> Email </label>
        <input type="email" name="email"></input>
        <br/>
        <button type="submit"> Add Guest </button>
      </form>
      <p> {name} </p>
      <p> {email} </p>
    </div>
  )
}