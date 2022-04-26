<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

=======
import {Browser as Router, Routes, Route } from 'react-router-dom'
>>>>>>> 93e0815ba7f778e5b1df98852a0020376a76e325
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
<<<<<<< HEAD
        <div className="w-screen h-screen bg-gradient-to-b from-blue-900 to-blue-600">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' component={Home} />
            </Routes>
        </Router>
        </div>
=======
    <div className="w-screen h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      <Navbar />

    </div>
>>>>>>> 93e0815ba7f778e5b1df98852a0020376a76e325
  );
}

export default App;