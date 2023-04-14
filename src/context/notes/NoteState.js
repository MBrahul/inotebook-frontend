import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://inotebook-backend-6x50.onrender.com"
  const s1 = []

  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName]=useState("");

  const [notes, setNotes] = useState(s1);
  //add a new user

  const addUser = async(name, email, password) => {
    let userDetails = {
      name:name,
      email: email,
      password: password
    }
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    });
    const json = await response.json();
    if (json.created) {
      console.log(json);
      setLogin(true);
      setToken(json.token);
      // return redirect("/");
    }
    else {
      // return redirect('/signIn');
    }
    setUserName(name);
  }

  // login a user

  const verifyUser = async (email, password) => {
    let userDetails = {
      email: email,
      password: password
    }
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    });
    const json = await response.json();
    if (json.login) {
      console.log(json);
      setLogin(true);
      setToken(json.token);
      setUserName(json.name);
      // return redirect("/");
    }
    else {
      // return redirect('/login');
    }
  }

  //fatch all notes form db
  const getNotes = async () => {

    const response = await fetch(`${host}/api/note/fatchAllNotes`, {
      method: "GET",
      headers: { 'content-type': 'application/json', 'auth-token': token },
    })
    const json = await response.json()
    // console.log(json);
    setNotes(json);
  }


  //add a note
  const addNote = async (title, description, tag, bcolour) => {

    let random = Math.floor(Math.random() * 5);
    if (random === 0) { bcolour = '#46E39A' }
    else if (random === 1) { bcolour = '#FA42BD' }
    else if (random === 2) { bcolour = '#45ACF0' }
    else if (random === 3) { bcolour = '#FE5F5A' }
    else { bcolour = '#D7F63F' }


    let newNote = {
      title: title,
      description: description,
      tag: tag,
      bcolour: bcolour
    }
    await fetch(`${host}/api/note/addNote`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify(newNote)
    });

    getNotes();
  }

  //delete a note

  const deleteNote = async (id) => {
    await fetch(`${host}/api/note/deleteNote/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': token }
    });
    getNotes();
  }

  // edit a note
  const editNote = async (newTitle, newTag, newDescription, id) => {
    let newNote = {
      title: newTitle,
      description: newDescription,
      tag: newTag
    }
    await fetch(`${host}/api/note/updateNote/${id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify(newNote)
    });
    getNotes();

  }


  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes, login, setLogin, verifyUser ,addUser,userName,setUserName}}>
      {props.children}

    </noteContext.Provider>
  )
}

export default NoteState;