import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const login = window.localStorage.getItem("isLoggedIn");
    let location = useLocation();

    React.useEffect(() => { }, [location]);

    const handleLogOut = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    const checklogin = (login) => {
        if (login) {
            return (
                <button
                    onClick={handleLogOut}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors duration-200"
                >
                    Logout
                </button>
            )
        }
    }

    return (
        <nav className="w-full bg-[#faf7f2] border-b border-[#e8e0d4]">
            <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">

                {/* Brand */}
                <Link
                    to="/"
                    className="text-[15px] font-extrabold italic tracking-tight text-stone-900 no-underline"
                >
                    i<span className="text-amber-600 not-italic">N</span>otebook
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-1">
                    <Link
                        to="/"
                        className={`text-[13px] font-medium px-4 py-1.5 rounded-full no-underline transition-colors duration-150 ${location.pathname === '/'
                                ? 'bg-stone-900 text-[#faf7f2]'
                                : 'text-stone-400 hover:text-stone-700'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`text-[13px] font-medium px-4 py-1.5 rounded-full no-underline transition-colors duration-150 ${location.pathname === '/about'
                                ? 'bg-stone-900 text-[#faf7f2]'
                                : 'text-stone-400 hover:text-stone-700'
                            }`}
                    >
                        About
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center">
                    {checklogin(login)}
                </div>

            </div>
        </nav>
    )
}