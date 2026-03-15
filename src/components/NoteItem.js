import { useState } from 'react';

export default function NoteItem(props) {
    const { title, description, id, tag, bcolour, handleEdit, currentNote, handleDelete, onChange, saveChanges, date } = props;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* Note Card */}
            <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">

                {/* Top row — tag + actions */}
                <div className="flex items-center justify-between">
                    {tag && tag !== 'General' && tag !== '' ? (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ) : (
                        <span />
                    )}

                    <div className="flex items-center gap-3 ml-auto">
                        <button
                            onClick={() => { handleEdit(id); setModalOpen(true); }}
                            className="text-stone-400 hover:text-amber-600 transition-colors duration-150 bg-transparent border-none p-0"
                            title="Edit"
                        >
                            <i className="fa-regular fa-pen-to-square text-[14px]"></i>
                        </button>
                        <button
                            onClick={() => handleDelete(id)}
                            className="text-stone-400 hover:text-red-500 transition-colors duration-150 bg-transparent border-none p-0"
                            title="Delete"
                        >
                            <i className="fa-solid fa-trash-can text-[14px]"></i>
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h5 className="text-[14px] font-extrabold tracking-tight text-stone-900 uppercase leading-snug">
                    {title}
                </h5>

                {/* Description */}
                <p className="text-[13px] text-stone-500 leading-relaxed flex-1">
                    {description}
                </p>

                {/* Date */}
                <div className="pt-2 border-t border-[#e8e0d4]">
                    <p className="text-[11px] text-stone-400 font-medium">
                        Added on {date.substring(0, 10)}
                    </p>
                </div>

            </div>

            {/* Edit Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    style={{ backgroundColor: 'rgba(28, 25, 23, 0.5)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
                >
                    <div className="w-full max-w-md bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl shadow-xl overflow-hidden">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e0d4]">
                            <div>
                                <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest">
                                    Editing
                                </p>
                                <h3 className="text-[16px] font-extrabold italic tracking-tight text-stone-900">
                                    Edit Note
                                </h3>
                            </div>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors border-none text-[14px]"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-5 flex flex-col gap-4">

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="edit-title" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="edit-title"
                                    name="title"
                                    value={currentNote.title}
                                    onChange={onChange}
                                    className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="edit-tag" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                                    Tag
                                </label>
                                <input
                                    type="text"
                                    id="edit-tag"
                                    name="tag"
                                    value={currentNote.tag}
                                    onChange={onChange}
                                    className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="edit-description" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                                    Description
                                </label>
                                <textarea
                                    id="edit-description"
                                    name="description"
                                    rows={4}
                                    value={currentNote.description}
                                    onChange={onChange}
                                    className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                                />
                            </div>

                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e8e0d4]">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="text-[13px] font-bold text-stone-500 hover:text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors border-none bg-transparent"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => { saveChanges(); setModalOpen(false); }}
                                className="bg-stone-900 hover:bg-stone-800 text-[#faf7f2] font-bold text-[13px] px-5 py-2 rounded-lg transition-colors duration-200 border-none"
                            >
                                Save Changes →
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}