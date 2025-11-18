import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './Views/HomeView';
import { ProjectsView } from './Views/ProjectsView';
import { AnimatePresence } from 'motion/react';
import { AboutView } from './Views/AboutView';
import { TechsView } from './Views/TechsView';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on every location change
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/techs" element={<TechsView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
