import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signup from './Components/signup/signup';

function App() {
  return (
    // <div className="App">
    // <Login/>
    // </div>
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
