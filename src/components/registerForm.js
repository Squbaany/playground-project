import React, { useState, useEffect } from "react";
import { styled, withTheme } from "styled-components";
import Cookies from "js-cookie";

import './loginForm.css';
import { Link, useNavigate } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const StyledButton = styled.button`
    cursor: pointer;
    font-size: 1.5rem;
    width: 60%;
    margin: 1rem 20%;
    border: none;
    border-radius: 1.5rem;
    padding: 0.7rem;
    color: #fff;
    background: linear-gradient(to right, #CF00B3 0%, #00B3CF 100%);
    transition: .4s;
    &:hover {
        filter:drop-shadow(0px 0px 0.6rem ${(props) => props.theme.color});
    }
`;

const StyledInput = styled.input`
    margin: 0.2rem calc(10% - 1rem);
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    width: 80%;
    transition: 0.4s;
    &:focus {
        outline: none;
        filter: drop-shadow(0px 0px 0.2rem ${(props) => props.theme.color});
    }
`;

const RegisterWrapper = styled.div`
    text-align: center;
    display: felx;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.body}};
`;

const RegisterForm = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confPassword, setConfPassword] = useState('');
    const [validConf, setValidConf] = useState(false);
    const [confFocus, setConfFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setValidUser(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
        setValidConf(password === confPassword)
    }, [password, confPassword])

    useEffect(() => {
        setErrMsg('');
    }, [user, password, confPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const verifyUser = USER_REGEX.test(user)
        const verifyPassword = PWD_REGEX.test(password)

        if (!verifyUser || !verifyPassword) {
            setErrMsg("Invalid entry")
            return
        }

        if(Cookies.get(user)) {
            setErrMsg("Username taken")
            return
        }

        Cookies.set(user, password)
        
        setUser('')
        setPassword('')
        setConfPassword('')

        navigate("/registered")
    }

    return(
        <RegisterWrapper>

            <section className="login--signin">

            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>

                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="username">Username:</label>

                    <StyledInput
                        type="text" 
                        id="username" 
                        className="login--input"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    ></StyledInput>

                    <p  className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
                            4 to 24 characters. Must begin with a letter.<br />
                            Letters, numbers and underscores allowed.<br />
                    </p>

                    <label htmlFor="password">Password:</label>

                    <StyledInput
                        type="password" 
                        id="password" 
                        className="login--input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                    ></StyledInput>

                    <p className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            8 to 24 characters.
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: ! @ # $
                    </p>

                    <label htmlFor="match_password">Confirm password:</label>

                    <StyledInput
                        type="password" 
                        id="match_password" 
                        className="login--input"
                        onChange={(e) => setConfPassword(e.target.value)}
                        value={confPassword}
                        required
                        onFocus={() => setConfFocus(true)}
                        onBlur={() => setConfFocus(false)}
                    ></StyledInput>

                    <p className={confFocus && !validConf ? "instructions" : "offscreen"}>
                            Must match the first password input field.
                    </p>

                    <StyledButton>Sign up</StyledButton>

                    Already have an account?

                    <Link to="/"> Sign in</Link>

                </form>

            </section>

        </RegisterWrapper>
    )
}

export default withTheme(RegisterForm)