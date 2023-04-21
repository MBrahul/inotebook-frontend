import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";


export default function Navbar() {
    const login = window.localStorage.getItem("isLoggedIn");
    let location = useLocation();

    React.useEffect(() => {

    }, [location]);

    const handleLogOut = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    const checklogin = (login) => {
        if (login) {
            return <Link to="" className='link-dark mx-2' style={{ color: 'white', textDecoration: "none" }}><i className="fa-solid fa-right-from-bracket" onClick={handleLogOut} ></i>
            </Link>
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{
                        fontFamily: 'Tangerine',
                        fontSize: "36px"
                    }}>iNotebook</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item" >
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current="page" to="/about" >About</Link>
                            </li>



                        </ul>


                    </div>
                    <div>

                        {checklogin(login)}


                    </div>
                </div>

            </nav>
        </div>
    )
}
