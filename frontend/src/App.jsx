
import { useEffect, useState } from "react"

import axios from 'axios'
function App() {
const [notes,setNotes]=useState( [
  {
    title: "Grocery List",
    description: "Buy milk, eggs, and bread."
  },
  {
    title: "Workout Plan",
    description: "30 minutes running and 20 push-ups."
  },
  {
    title: "Project Idea",
    description: "Create a note-taking app using MERN stack."
  },
  {
    title: "Meeting Reminder",
    description: "Team meeting at 4 PM on Zoom."
  },
  {
    title: "Study Goals",
    description: "Revise JavaScript arrays and objects."
  }
]
)
function fetch(){
axios.get('http://localhost:3000/api/notes')
.then((res)=>{
  setNotes(res.data.notes)
})

}
useEffect(()=>{
  fetch()
},[])


  return (
    <>
   <div className="notes">
    {notes.map((note,idx)=>{
     return <div key={idx}className="note">
      <h1>{note.title}</h1>
      <p>{note.description}</p>
    </div>})}
   </div>
    </>
  )
}

export default App
