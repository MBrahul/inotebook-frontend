import React, { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'



export default function Login() {
 
    const context = useContext(noteContext);
    const { verifyUser } = context;

    const [user, setUser] = useState({
        email: "",
        password: ''
    });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        verifyUser(user.email, user.password);
        setUser({
            email: "",
            password: ""
        });
        
     

    }
    return (
        <div className="container my-3">
            <h3 className='text-center' style={{
                fontFamily: 'Tangerine',
                fontSize: "48px"
            }}>iNotebook</h3>
            <h3 className='text-center' style={{
                fontFamily: 'Playfair Display',
                fontSize: "17px"
            }}>--Log In To Continue--</h3>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
                <p className='my-3' style={{
                    "display": "block",
                    "margin": "5px 0px"
                }} >Don't have an account? <Link to="/signIn">Sign in</Link></p>
            </form>

        </div>
    )
}
