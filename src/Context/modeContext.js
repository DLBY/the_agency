import { createContext } from 'react';

const ModeContext = createContext({
  isDark: false,
  modeHandleChange: () => {},
});

export default ModeContext;
