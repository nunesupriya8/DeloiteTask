//import logo from './logo.svg';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import Signup from './Components/Signup';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    
                    <Route path="/" element={<Signup />} />
                    <Route path="/Signin" element={<Signin />} />
          
                </Routes>
            </div>
        </Router>
    );
}

export default App;

