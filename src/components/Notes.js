import NoteItem from './NoteItem'
import { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import loading_gif from './loading.gif';

export default function Notes() {

  const context = useContext(noteContext);
  const { notes, deleteNote, editNote, getNotes } = context;
  const [loading, setLoading] = useState(true);
  const [currentNote, setCurrentNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    getNotes(); // eslint-disable-next-line react-hooks/exhaustive-deps
    setLoading(false);
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
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[12px] font-bold text-amber-600 uppercase tracking-widest mb-1">
            Your collection
          </p>
          <h2 className="text-[24px] font-extrabold italic tracking-tight text-stone-900">
            Your Notes
          </h2>
          <p className="text-[13px] text-stone-400 mt-1">
            {notes.length > 0 ? `${notes.length} note${notes.length > 1 ? 's' : ''} saved` : ''}
          </p>
        </div>

        {/* States */}
        {loading ? (
          /* Loading */
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <img src={loading_gif} alt="loading" className="w-10 h-10" />
            <p className="text-[13px] text-stone-400 font-medium">Loading your notes...</p>
          </div>

        ) : notes.length === 0 ? (
          /* Empty */
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl">
              📓
            </div>
            <p className="text-[15px] font-bold text-stone-700 italic">No notes yet</p>
            <p className="text-[13px] text-stone-400">Start by adding your first note above.</p>
          </div>

        ) : (
          /* Notes Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteItem
                key={note._id}
                title={note.title}
                description={note.description}
                id={note._id}
                tag={note.tag}
                date={note.date}
                handleEdit={handleEdit}
                currentNote={currentNote}
                handleDelete={handleDelete}
                onChange={onChange}
                saveChanges={saveChanges}
                bcolour={note.bcolour}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}