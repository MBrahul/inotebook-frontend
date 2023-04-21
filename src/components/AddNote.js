import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {

  const context = useContext(noteContext);
  const { addNote } = context;
  const userName=window.localStorage.getItem("userName");
  const [note, setNote] = useState({ title: '', tag: '', description: '' });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });

  }
  const handleAdd = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag, 'cyan');
    setNote({
      title: "",
      tag: "",
      description: ''
    });
  }

  return (
    <div className='container my-3'>
      <h5 className='text-center' style={{
        fontFamily: 'Tangerine',
        fontSize: "36px"
      }} >Hello {userName}</h5>
      <form>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title'
            aria-describedby="emailHelp" value={note.title} onChange={onChange} />

        </div>


        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="email" className="form-control" id="ta" name='tag' aria-describedby="emailHelp" value={note.tag} onChange={onChange} />

        </div>
        <label htmlFor="description">Description</label>
        <div className="form-floating mb-3">
          <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea2" name='description' style={{ height: "100px" }} value={note.description} onChange={onChange}></textarea>

        </div>

        <button type="submit" className="btn btn-outline-primary" onClick={handleAdd}>Add This Note</button>


      </form>

    </div>
  )
}

export default AddNote
