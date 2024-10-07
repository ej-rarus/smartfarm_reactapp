import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ControlPanel from './pages/ControlPanel';


import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          {/* 각 페이지로의 라우트 설정 */}
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/controlpanel" element={<ControlPanel/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
