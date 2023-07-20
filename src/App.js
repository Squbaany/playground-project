import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';

import { lightTheme, darkTheme } from './themes';

import NavBar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Registered from './components/registered';
import LoggedIn from './components/loggedIn';

const loginRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/registerForm",
    element: <RegisterForm />,
  },
  {
    path: "/registered",
    element: <Registered />
  },
  {
    path: "/loggedIn",
    element: <LoggedIn />
  }
])

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
            <div className='sectionTextWrapper'>
              <StyledH1>Login form</StyledH1>
              <Styledp>Simple login/register form with credentials stored in a cookie. </Styledp>
            </div>
            <div className='sectionContent'>
              <RouterProvider router={loginRouter}>
              </RouterProvider>
            </div>
          </StyledSection>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
