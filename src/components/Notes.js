import NoteItem from './NoteItem'
import { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/NoteContext'


export default function Notes() {

  const context = useContext(noteContext);
  const { notes, deleteNote, editNote, getNotes } = context;
  const [currentNote, setCurrentNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    getNotes();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const handleDelete = (id) => {
    deleteNote(id);

  }


  const handleEdit = (id) => {
    notes.forEach(note => {
      if (note._id === id) {
        setCurrentNote(note);
      }
    });
  };

  const onChange = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
  }
  const saveChanges = () => {
    editNote(currentNote.title, currentNote.tag, currentNote.description, currentNote._id);

  }

  return (
    <div className="container my-3 ">
      <h3 className='text-center' style={{
        fontFamily: 'Tangerine',
        fontSize: "48px"
      }}>--Your Notes--</h3>
      {/* <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search by title and tag" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className='row'>
        {notes.map((note) => {
          if (notes.length >= 0) {
            return <NoteItem key={note._id} title={note.title} description={note.description} id={note._id} tag={note.tag} date={note.date} handleEdit={handleEdit} currentNote={currentNote} handleDelete={handleDelete} onChange={onChange} saveChanges={saveChanges} bcolour={note.bcolour} />

          }
          else {
            return <h3>Nothing to show</h3>
          }


        })}
      </div>
    </div >
  )
}

