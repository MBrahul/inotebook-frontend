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
    const [spinner , setSpinner]=useState(false);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = async(e) => {
        setSpinner(true);
        e.preventDefault();
        const login = await verifyUser(user.email, user.password);
        if (login) {
            setUser({
                email: "",
                password: ""
            });
           window.location.reload();
           setSpinner(false);
        }
        else {
            alert("Login With Correct Credentails");
            setSpinner(false);
        }
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

                {/* <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button> */}
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In { spinner? <img src={loading} alt="loading" />:null}</button>
               
                <p className='my-3' style={{
                    "display": "block",
                    "margin": "5px 0px"
                }} >Don't have an account? <Link to="/signIn">Sign in</Link></p>
            </form>

        </div>
    )
}
