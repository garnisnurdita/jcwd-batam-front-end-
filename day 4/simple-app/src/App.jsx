import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile"
import ButtonLogin from './components/buttonLogin';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import About from './components/about';
 
function App() {
  let name = "Jordan";
  const arr = ["John", "Denny", "Steve"]
  return (
    <div 
    // style={{ textAlign : "center" }}
    className="color-red">
      <h1>{name}</h1>
      {
        arr.map((val) => {
          return (
            <Profile name={val} age="30" />
          )        })
      }
      <ButtonLogin />

      <h2>Welcome to Purwadhika</h2>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<About/>} />

      </Routes>

    </div>
  );
}

export default App;
