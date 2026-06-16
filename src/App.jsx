import { useState } from 'react'
import './App.css'


export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuest] = useState([])
  // function updateName (event) {
  //   setName(event.target.value)
  // }
  function handleSumbit(e) {

    e.preventDefault()
    const newGuest = {
      id: Date.now(),
      name: e.target.name.value,
      email: e.target.email.value
    }
    setGuest([...guests, newGuest])
    e.target.name.value = ''
    e.target.email.value =''

  }



  return (
    <div>
      <h1>Company Picnic RSVP</h1>
      <form onSubmit={handleSumbit}>
        <label> Name </label>
        <input onChange={(e)=> setName(e.target.value)} type="name" name="name"></input>
        <br/>
        <label> Email </label>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email"></input>
        <br/>
        <button type="submit"> Add Guest </button>
      </form>
      <p> {name} </p>
      <p> {email} </p>
      <br/>
      <h2>Guest List: </h2>
      <ul>
        {guests.map((guest)=>{
          return (
            <li>Name: {guest.name} -- Email:{guest.email}</li>
          )
        })}
      </ul>
      
    </div>
  )
}