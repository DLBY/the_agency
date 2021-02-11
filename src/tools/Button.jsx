import React, { useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import ModeContext from '../Context/modeContext';

const Button = () => {
  const { isDark, modeHandleChange } = useContext(ModeContext);
  // console.log(isDark);
  return (
    <DarkModeToggle
      onChange={() => modeHandleChange(isDark)}
      checked={isDark}
      size={80}
      speed={1.7}
      className="toggle-btn"
    />
  );
};

export default Button;
