import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Music from './pages/Music';
import Box from './components/Box'

const App = () => {
  return (
    <div>
      <div className='flex'>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<HomePage />} />
              <Route path="/music" element={<Music />} />
            </Routes>
          </BrowserRouter>
        </div>
        <aside id='leftSidebar' className='transbar'>
          <Box />
        </aside>
        <aside id='rightSidebar' className='transbar'>
        </aside>
      </div>
    </div >
  );
};

export default App;