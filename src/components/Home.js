import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Notes from './Notes';
import Login from './Login';


export default function Home() {
  const context = useContext(noteContext);
  const { login } = context;

  const checklogin = (login) => {
    if (login) {
      return ( <div>
        <AddNote />
        <Notes />
      </div>
      )

    }
    else{
      return (
        <div className="container">
          <Login/>
        </div>
      )
    }
  }

  return (
    <div className="container">

      {checklogin(login)}

    </div>
    
  )
}
