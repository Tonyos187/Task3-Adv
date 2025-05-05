import React from "react";
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Academics from "./Pages/Academics/Academics";


// اعتذر عالتخبيص بهالتاسك، واجهت مشكلة بقسم الغاليري روحت كتير وقت عليها
//  وما قدرت اعرف حلها، ف راح الوقت وما قدرت رتب التاسك متل ما بدي 

// سوء تنظيم بالمجمل بدل ما كفي شغل بباقي التاسك وارجعلها
// :(

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
