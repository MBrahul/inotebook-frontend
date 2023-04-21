import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://inotebook-backend-4sb9.onrender.com"
  // const host ="http://localhost:4000";
  const s1 = []
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
      localStorage.setItem("isLoggedIn",true);
      localStorage.setItem("token",json.token);
      localStorage.setItem("userName",json.name);
      return true;
    }
    else {
     return false;
    }
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
      localStorage.setItem("isLoggedIn",true);
      localStorage.setItem("token",json.token);
      localStorage.setItem("userName",json.name);
      return true;
    }
    else {
     return false;
    }
  }

  //fatch all notes form db
  const getNotes = async () => {
    const token = window.localStorage.getItem("token");
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
    const token = window.localStorage.getItem("token");
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
    const token = window.localStorage.getItem("token");
    await fetch(`${host}/api/note/deleteNote/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': token }
    });
    getNotes();
  }

  // edit a note
  const editNote = async (newTitle, newTag, newDescription, id) => {
    const token = window.localStorage.getItem("token");
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
    <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes, verifyUser ,addUser}}>
      {props.children}

    </noteContext.Provider>
  )
}

export default NoteState;