export default function List ({guest, onRemove}) {
    return (
        guest.map((guest)=>{
          return (
            <div key={guest.id}>
              <li>Name: {guest.name} -- Email:{guest.email}</li>
              <button onClick={() => onRemove(guest.id)}>Remove Guest</button>
            </div>
          )
        })
    )
}