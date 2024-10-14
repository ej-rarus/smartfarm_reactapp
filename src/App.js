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
import Diary from './pages/Diary';
import DiaryPost from './components/DiaryPost';
import DiaryNewPost from './pages/DiaryNewPost';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <div className='header'>
          <Nav/>
        </div>
        <div className='main'>
          <Sidebar/>
          <Routes>
            {/* 각 페이지로의 라우트 설정 */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/controlpanel" element={<ControlPanel/>} />
            <Route path="/diary" element={<Diary/>} />
            <Route path="/diary/:id" element={<DiaryPost />} /> {/* 동적 라우트 */}
            <Route path="/diary/new" element={<DiaryNewPost />} /> {/* 글쓰기 경로 추가 */}

          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
