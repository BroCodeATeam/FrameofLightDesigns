import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
        <div className="w-screen h-screen bg-gradient-to-b from-slate-500 to-blue-900">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </Router>
        </div>
  );
}

export default App;