import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FaReact, FaServer, FaRobot, FaLinux, FaTools, FaMoneyBillAlt, FaSun, FaMoon, FaBars } from 'react-icons/fa';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import AI from './components/AI';
import Linux from './components/Linux';
import LearningResources from './components/LearningResources';
import PaymentProcessing from './components/PaymentProcessing';
import About from './components/About';
import Home from './components/Home';

function App() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a> {/* Skip to content link */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header 
          className="p-4 sm:p-8 flex flex-col items-center w-full"
          style={{
            backgroundImage: theme === 'dark' 
              ? 'linear-gradient(135deg, #1a202c, #2d3748)' 
              : 'linear-gradient(135deg, #edf2f7, #e2e8f0)'
          }}
          role="banner" /* Adding ARIA role */
        >
          <h1 className={`text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Developers Resource Portal
          </h1>
          <nav className="w-full sm:flex sm:justify-center" role="navigation" aria-label="Main Navigation">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <button onClick={toggleMenu} className="text-white sm:hidden focus:outline-none" aria-label="Toggle menu">
                <FaBars size={24} />
              </button>
              <button onClick={toggleTheme} className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded sm:hidden" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
            <div className={`sm:flex flex-col sm:flex-row sm:space-x-4 sm:mt-4 ${isOpen ? 'block' : 'hidden'} w-full sm:w-auto`}>
              <Link to="/">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700'} text-white`}>
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700'} text-white`}>
                  About
                </button>
              </Link>
              <Link to="/frontend">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-600 hover:to-pink-700'} text-white`}>
                  Front End
                </button>
              </Link>
              <Link to="/backend">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700'} text-white`}>
                  Back End
                </button>
              </Link>
              <Link to="/ai">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700'} text-white`}>
                  AI
                </button>
              </Link>
              <Link to="/linux">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700'} text-white`}>
                  Linux
                </button>
              </Link>
              <Link to="/learning-resources">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-500 hover:via-teal-600 hover:to-teal-700'} text-white`}>
                  Learning Resources
                </button>
              </Link>
              <Link to="/payment-processing">
                <button className={`font-bold py-2 px-4 rounded mb-2 sm:mb-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-600 hover:via-gray-800 hover:to-gray-900' : 'bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-700'} text-white`}>
                  Payment Processing
                </button>
              </Link>
            </div>
          </nav>
          <div className="hidden sm:block mt-4">
            <button onClick={toggleTheme} className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>
        <main id="main-content" className="p-4 sm:p-8 flex flex-col items-center" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<FrontEnd />} />
            <Route path="/backend" element={<BackEnd />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/linux" element={<Linux />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="/payment-processing" element={<PaymentProcessing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
