import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import ModeContext from './Context/modeContext';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const modeHandleChange = (dark) => {
    const newMode = !dark;
    setIsDark(newMode);
  };
  const [mode, setMode] = useState('dark');
  return (
    <Router>
      <ModeContext.Provider value={{ isDark, modeHandleChange }}>
        <div className={isDark ? 'body-dark' : 'body-light'}>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
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
        </div>
      </ModeContext.Provider>
    </Router>
  );
};

export default App;
