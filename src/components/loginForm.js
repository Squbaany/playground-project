import React, { useState, useEffect } from "react";
import { styled, withTheme } from "styled-components";

import './loginForm.css';

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

const LoginWrapper = styled.div`
    margin-left: auto;
    max-width: 800px;
    text-align: center;
    display: felx;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.body}};
`;

const LoginForm = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(user, password)

        setUser('')
        setPassword('')
    }

    return(
        <LoginWrapper>
            <section className="login--signin">
            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <StyledInput
                        key="username_key" 
                        type="text" 
                        id="username" 
                        className="login--input"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    ></StyledInput>
                    <label htmlFor="password">Password:</label>
                    <StyledInput
                        key="password_key"
                        type="password" 
                        id="password" 
                        className="login--input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    ></StyledInput>
                    <StyledButton>Sign in</StyledButton>
                    Don't have an account?
                    <a href="#"> Sign Up</a>
                </form>
            </section>
        </LoginWrapper>
    )
}

export default withTheme(LoginForm)