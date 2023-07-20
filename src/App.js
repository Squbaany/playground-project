import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"

import './App.css';

import { lightTheme, darkTheme } from './themes';

import NavBar from './components/navbar';
import LoginForm from './components/loginForm';

const StyledApp = styled.div`
  min-height: 100vh;
  max-width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`

const StyledSection = styled.section`
  margin: 1rem 1rem 0;
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.sectionBg};
`

const StyledH1 = styled.h1`
  height: 3rem;
  margin: 0;
  margin-bottom: 0.5rem;
`

const Styledp = styled.p`
  margin: 0;
  text-align: justify;
`

function App() {

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
            <div className='sectionTextWrapper'>
              <StyledH1>Login form</StyledH1>
              <Styledp>Simple login/register form with credentials stored in a cookie. </Styledp>
            </div>
            <div className='sectionContent'>
              <LoginForm />
            </div>
          </StyledSection>

          <StyledSection>
            <div className='sectionTextWrapper'>
              <StyledH1>Testowy panel</StyledH1>
              <Styledp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Styledp>
            </div>
            <div className='sectionContent'>
              
            </div>
          </StyledSection>

          <StyledSection>
            <div className='sectionTextWrapper'>
              <StyledH1>Testowy panel</StyledH1>
              <Styledp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Styledp>
            </div>
            <div className='sectionContent'>
              
            </div>
          </StyledSection>

          <StyledSection>
            <div className='sectionTextWrapper'>
              <StyledH1>Testowy panel</StyledH1>
              <Styledp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Styledp>
            </div>
            <div className='sectionContent'>
              
            </div>
          </StyledSection>

      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
