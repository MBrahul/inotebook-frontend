import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import loading from './loading.gif'
import noteContext from '../context/notes/NoteContext'

export default function Login() {
    const context = useContext(noteContext);
    const { verifyUser } = context;
    const [user, setUser] = useState({
        email: "",
        password: ''
    });
    const [spinner, setSpinner] = useState(false);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        setSpinner(true);
        e.preventDefault();
        const login = await verifyUser(user.email, user.password);
        if (login) {
            setUser({ email: "", password: "" });
            window.location.reload();
            setSpinner(false);
        } else {
            alert("Login With Correct Credentials");
            setSpinner(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl shadow-sm p-8">

                {/* Header */}
                <div className="mb-7">
                    <div className="inline-flex items-center justify-center w-11 h-11 bg-amber-100 rounded-xl text-lg mb-4">
                        📓
                    </div>
                    <h2 className="text-[22px] font-extrabold italic tracking-tight text-stone-900 leading-tight">
                        Welcome back
                    </h2>
                    <p className="text-[13px] text-stone-400 mt-1">
                        Sign in to i<span className="text-amber-600 not-italic font-extrabold">N</span>otebook
                    </p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">

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
                            value={user.email}
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
                            value={user.password}
                            onChange={onChange}
                            className="w-full bg-white border border-[#e7e0d8] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                    </div>

                    <hr className="border-[#e8e0d4] my-1" />

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={spinner}
                        className="w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 text-[#faf7f2] font-bold text-[13px] py-3 rounded-lg transition-colors duration-200 tracking-wide flex items-center justify-center gap-2"
                    >
                        {spinner ? (
                            <>
                                <img src={loading} alt="loading" className="w-4 h-4" />
                                <span>Signing in...</span>
                            </>
                        ) : (
                            'Sign In →'
                        )}
                    </button>

                </form>

                <p className="text-center text-[12px] text-stone-400 mt-5">
                    Don't have an account?{' '}
                    <Link to="/sign-up" className="text-amber-600 font-bold no-underline hover:text-amber-700">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    )
}