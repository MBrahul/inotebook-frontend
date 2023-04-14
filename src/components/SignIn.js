import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';

export default function SignIn() {
    const context = useContext(noteContext);
    const { addUser } = context;

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
        }
        else {
            addUser(data.name, data.email, data.password);
            console.log('user successfully created');
            setData({
                name: '',
                email: '',
                password: '',
                confirm_password: ""
            });
        }


    };


    return (
        <div className='container my-3'>
            <h3 className='text-center'>iNotebook</h3>

            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"
                        value={data.name} onChange={onChange} />

                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="confirm_password" onChange={onChange} />
                </div>



                <button type="submit" className="btn btn-primary" onClick={createUser} >Sign in</button>

            </form>

        </div>
    )
}
