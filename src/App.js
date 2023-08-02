import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Music from './pages/Music';
import Sidebar from './components/Sidebar';
import ThemeContext from './components/ThemeContext';

const App = () => {

  const [theme, setTheme] = React.useState("dark")

  const contextValue = {
    theme,
    updateTheme: (setTheme)
  }

  return (
    <div>
      <ThemeContext.Provider value={contextValue} >
        <Sidebar />
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
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;