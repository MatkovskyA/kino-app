import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import CardMovie from './pages/CardMovie/CardMovie';

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cardmovie" element={<CardMovie />} /> 
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;



