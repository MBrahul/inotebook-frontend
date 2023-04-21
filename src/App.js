 
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import NoteState from "./context/notes/NoteState";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom"
function App() {

 

  return (
  
    <NoteState>
      <Router>
        <Navbar />
        
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signIn" element={<SignIn />} />

        </Routes>


      </Router>
    </NoteState>
   

  );


}

export default App;
