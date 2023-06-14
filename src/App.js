
//import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
        setTimeout(() => {
          setAlert(null);
        },1500 );
  }
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.background ='#042743';
        showAlert("Dark mode has been enabled","success");
    }
    else {
        setMode('light');
        document.body.style.background ='white';
        showAlert("Light mode has been enabled","success");
    }
}
  return (
  <>
  
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
    
      
      
    
      <TextForm showAlert={showAlert} heading="Enter the text to anylize below" mode={mode} />
      <About />
      
  </div> 
  
  </>
  );
}

export default App;