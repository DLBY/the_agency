import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModeContext from './Context/modeContext';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

AOS.init();

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const modeHandleChange = (dark) => {
    const newMode = !dark;
    localStorage.setItem('dark', JSON.stringify({ darkMode: newMode }));
    setIsDark(newMode);
  };

  useEffect(() => {
    const localStorageDark = JSON.parse(localStorage.getItem('dark'));
    const userMedia = matchMedia('(prefers-color-scheme: dark)');
    if (!localStorageDark && userMedia) {
      setIsDark(userMedia.matches);
    } else {
      setIsDark(localStorageDark.darkMode);
    }
  }, []);

  return (
    <Router>
      <ModeContext.Provider value={{ isDark, modeHandleChange }}>
        <div className={isDark ? 'body-dark' : 'body-light'}>
          <Navbar />
          <main>
            <Switch>
              <Route path="/the_agency" exact>
                <Home />
              </Route>

              <Route path="/works">
                <Works />
              </Route>

              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </ModeContext.Provider>
    </Router>
  );
};

export default App;
