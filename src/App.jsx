import { useState } from 'react'
import './App.css'
import List from './List'


export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [diet_pref, setDietpref] = useState('None')
  const [guests, setGuest] = useState([])
  // function updateName (event) {
  //   setName(event.target.value)
  // }

  function validSubmission(event) {
    console.log("Current Value:", event.target.name.value)
    if (event.target.name.value === '') {
      event.target.name.setCustomValidity("Name is required");
      event.target.name.reportValidity()
      return false
    }

    console.log("VALID")
    // VERY IMPORTANT: Clear previous validity if it was set or else even if they enter a valid name it will be flagged as invalid.
    event.target.name.setCustomValidity("")
    return true
  }

  function handleSumbit(event) {
    event.preventDefault()
    if (!validSubmission(event)) {
      return
    } 

    const newGuest = {
      id: Date.now(),
      name: event.target.name.value,
      email: event.target.email.value,
      diet_pref: event.target.diet_pref.value
    }
    setGuest([...guests, newGuest])

    // Clear Inputs
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.diet_pref.value = 'None'
  }

  function removeGuest (id) {
    const newGuest = guests.filter((guest) => {
      return guest.id !== id
    })

    setGuest(newGuest)
  }

  function getTotalGuests() {
    return guests.length
  }


  return (
    <div>
      <h1>Company Picnic RSVP</h1>
      <form onSubmit={handleSumbit}>
        <label> Name </label>
        <input onChange={(e) => {setName(e.target.value), e.target.setCustomValidity("")}} type="name" name="name"></input>
        <br/>
        <label> Email </label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email"></input>
        <br/>
        <label> Dietary Preference </label>
        <select onChange={(e) => setDietpref(e.target.value)} type="diet_pref" name="diet_pref"> 
          <option> None </option>
          <option> Vegetarian </option>
          <option> Vegan  </option>
          <option> Gluten-Free  </option>
        </select>
        <br/>
        <button type="submit"> Add Guest </button>
      </form>
      <p> {name} </p>
      <p> {email} </p>
      <p> {diet_pref} </p>
      <br/>
      <p>Total Guests: {getTotalGuests()}</p>
      <h2>Guest List: </h2>
      <ul>
        {guests.length === 0 ? <h3>No guest for now</h3> : <List guest={guests} onRemove={removeGuest}/>}
      </ul>
      
    </div>
  )
}