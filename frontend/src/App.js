import {Browser as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-900 to-blue-600">
      <Navbar />

    </div>
  );
}

export default App;