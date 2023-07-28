import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Route, Routes } from "react-router-dom";

import './App.css';

import { lightTheme, darkTheme } from './themes';

import NavBar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import LoggedIn from './components/loggedIn';
import MissingPage from './components/missingPage';

// jwt token

const StyledApp = styled.div`
  max-width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`

const StyledSection = styled.section`
  margin: 1rem 1rem;
  height: calc(100vh - 50px - 8rem);
  min-height: calc(30vh + 400px);
  display: flex;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.sectionBg};
`

const App = () => {

  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <NavBar
          toggleTheme = {toggleTheme}
          isDarkTheme = {isDarkTheme}
        />
          <StyledSection>
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/loggedIn" element={<LoggedIn />} />

                <Route path='*' element={<MissingPage />} />
              </Routes>
          </StyledSection>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
