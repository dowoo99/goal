import React, { useState } from 'react';
import styled from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function App() {
  const [theme, setTheme] = useState('dark');
  const isLight = theme === 'light';

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router />
      <button onClick={toggleTheme}>
        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </ThemeProvider>
  );
}

export default App;
