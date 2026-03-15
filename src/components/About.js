import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-14">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[12px] font-bold text-amber-600 uppercase tracking-widest mb-1">
            About
          </p>
          <h2 className="text-[28px] font-extrabold italic tracking-tight text-stone-900 leading-tight">
            What is i<span className="text-amber-600 not-italic">N</span>otebook?
          </h2>
          <p className="text-[14px] text-stone-400 mt-2 leading-relaxed">
            A simple, personal space to capture your thoughts — anytime, anywhere.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">

          {/* Card 1 */}
          <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-lg shrink-0">
                📓
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-stone-900 uppercase tracking-wide mb-1">
                  Your Notes, Your Space
                </h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">
                  iNotebook is a personal note-taking app that lets you create, organize, and manage your notes securely in the cloud. No clutter, no distractions — just your thoughts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-lg shrink-0">
                🔒
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-stone-900 uppercase tracking-wide mb-1">
                  Private & Secure
                </h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">
                  Every note is tied to your account. Only you can see, edit, or delete your notes. Your data stays yours — always.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-lg shrink-0">
                🏷️
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-stone-900 uppercase tracking-wide mb-1">
                  Organised with Tags
                </h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">
                  Add tags to your notes to keep things tidy. Whether it's work, personal, or ideas — find what you need instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-lg shrink-0">
                ☁️
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-stone-900 uppercase tracking-wide mb-1">
                  Always in Sync
                </h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">
                  Your notes are stored in the cloud and accessible from any device. Log in from anywhere and pick up right where you left off.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer strip */}
        <div className="mt-10 bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-[13px] font-extrabold italic text-stone-900 tracking-tight">
              i<span className="text-amber-600 not-italic">N</span>otebook
            </p>
            <p className="text-[12px] text-stone-400 mt-0.5">
              Built with React & Node.js
            </p>
          </div>
          <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1.5 rounded-full">
            v1.0
          </span>
        </div>

      </div>
    </div>
  )
}