import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const context = useContext(noteContext);
    const { addUser } = context;
    const nav = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ""
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const createUser = (e) => {
        e.preventDefault();
        if (data.password !== data.confirm_password) {
            alert('password and confirm-password does not match');
        } else {
            const success = addUser(data.name, data.email, data.password);
            if (success) {
                setData({ name: '', email: '', password: '', confirm_password: "" });
                nav("/");
            } else {
                alert("Error");
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl shadow-sm p-8">

                {/* Header */}
                <div className="mb-7">
                    <div className="inline-flex items-center justify-center w-11 h-11 bg-amber-100 rounded-xl text-lg mb-4">
                        📓
                    </div>
                    <h2 className="text-[22px] font-extrabold italic tracking-tight text-stone-900 leading-tight">
                        Join i<span className="text-amber-600 not-italic">N</span>otebook
                    </h2>
                    <p className="text-[13px] text-stone-400 mt-1">
                        Your notes, always with you.
                    </p>
                </div>

                <form onSubmit={createUser} className="flex flex-col gap-4">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="inputName" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="inputName"
                            name="name"
                            placeholder="John Doe"
                            value={data.name}
                            onChange={onChange}
                            className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="inputEmail" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            name="email"
                            placeholder="you@example.com"
                            value={data.email}
                            onChange={onChange}
                            className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                        <p className="text-[11px] text-stone-400">We'll never share your email with anyone else.</p>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="inputPassword" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                            Password
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            name="password"
                            placeholder="••••••••"
                            onChange={onChange}
                            className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="inputConfirm" className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="inputConfirm"
                            name="confirm_password"
                            placeholder="••••••••"
                            onChange={onChange}
                            className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                    </div>

                    <hr className="border-[#e8e0d4] my-1" />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-stone-900 hover:bg-stone-800 text-[#faf7f2] font-bold text-[13px] py-3 rounded-lg transition-colors duration-200 tracking-wide"
                    >
                        Create Account →
                    </button>

                </form>

                <p className="text-center text-[12px] text-stone-400 mt-5">
                    Already have an account?{' '}
                    <a href="/" className="text-amber-600 font-bold no-underline hover:text-amber-700">
                        Log in
                    </a>
                </p>

            </div>
        </div>
    )
}