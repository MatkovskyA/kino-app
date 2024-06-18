import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import CardMovie from './pages/CardMovie/CardMovie';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
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



