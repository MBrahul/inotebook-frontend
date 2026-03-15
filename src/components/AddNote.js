import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const userName = window.localStorage.getItem("userName");
  const [note, setNote] = useState({ title: '', tag: '', description: '' });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleAdd = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag, 'cyan');
    setNote({ title: "", tag: "", description: '' });
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-10">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-7">
          <p className="text-[12px] font-bold text-amber-600 uppercase tracking-widest mb-1">
            Good to see you
          </p>
          <h2 className="text-[24px] font-extrabold italic tracking-tight text-stone-900 leading-tight">
            Hello, {userName} 👋
          </h2>
          <p className="text-[13px] text-stone-400 mt-1">
            What's on your mind today?
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl shadow-sm p-7">

          <h3 className="text-[13px] font-bold text-stone-500 uppercase tracking-widest mb-5">
            New Note
          </h3>

          <form onSubmit={handleAdd} className="flex flex-col gap-4">

            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="title" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Note title..."
                value={note.title}
                onChange={onChange}
                className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>

            {/* Tag */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tag" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                Tag
              </label>
              <input
                type="text"
                id="tag"
                name="tag"
                placeholder="e.g. personal, work, ideas..."
                value={note.tag}
                onChange={onChange}
                className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Write your note here..."
                value={note.description}
                onChange={onChange}
                rows={4}
                className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
              />
            </div>

            <hr className="border-[#e8e0d4] my-1" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-stone-800 text-[#faf7f2] font-bold text-[13px] py-3 rounded-lg transition-colors duration-200 tracking-wide"
            >
              Add Note →
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNote