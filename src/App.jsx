// import hasteLogo from './assets/haste.png'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
