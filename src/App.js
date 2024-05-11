// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{

     setalert({
      msg:message,
      type:type 

     })
     setTimeout(() => {
      setalert(null);
     }, 1500);
  }

  if (mode === "light") document.body.style.backgroundColor = "white";
  else document.body.style.backgroundColor = "grey";
  const toggleMode = () => {
    if (mode === "light") 
    {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been enabled","success");
    } 
    else 
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled","success")
    }
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //        rel="noopener noreferrer"
    //     >
    //      please don't Learn React
    //     </a>
    //   </header>
    // </div>

    //{/* <Navbar title="textutils" aboutText="About TextUtils" />  */}
    <div className="app">
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
        
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={<TextForm showalert={showalert} mode={mode} heading="enter the text to analyze" />}
        />
      </Routes>
    </div>
  );
}

export default App;
