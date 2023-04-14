import React, { useContext } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
import noteContext from '../context/notes/NoteContext';

export default function Navbar() {

    const context = useContext(noteContext);
    const { login,userName } = context;

    let location = useLocation();

    React.useEffect(() => {

    }, [location]);

const checklogin=(login)=>{
    if(login===true){
        return   <Link to="" className='link-dark mx-2' style={{color:'white',textDecoration:"none"}}><i className="fa-solid fa-user mx-2"></i>Hello ,{userName}
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
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
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
