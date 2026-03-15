import AddNote from './AddNote';
import Notes from './Notes';
import Login from './Login';


export default function Home() {
  const login = localStorage.getItem("isLoggedIn");

  const checklogin = (login) => {
    if (login) {
      return ( <div>
        <AddNote />
        <Notes />
      </div>
      )

    }
    else{
      return (
        <div className="">
          <Login/>
        </div>
      )
    }
  }

  return (
    <div className="">

      {checklogin(login)}

    </div>
    
  )
}
