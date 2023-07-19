import React from "react";
import { styled, useTheme } from "styled-components";

import './loginForm.css'

export default function LoginForm() {
    
    const theme = useTheme()

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
        &:hover{
            filter:drop-shadow(0px 0px 0.6rem ${theme.color});
        }
    `

    const StyledInput = styled.input`
    margin: 0.2rem calc(10% - 1rem);
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    width: 80%;
    transition: 0.4s;
    &:focus {
        outline: none;
        filter: drop-shadow(0px 0px 0.2rem ${theme.color});
    }
    `



    return(
        <div 
            className="login--wrapper"
            style={{
                backgroundColor: theme.body, 
                color: theme.color
            }}
        >
            <div className="login--signin">
                <h1>Sign in</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <StyledInput 
                        type="text" 
                        id="username" 
                        className="login--input"
                    ></StyledInput>
                    <label htmlFor="password">Password:</label>
                    <StyledInput 
                        type="password" 
                        id="password" 
                        className="login--input"
                    ></StyledInput>
                    <StyledButton>Sign in</StyledButton>
                    <span>Don't have an account? </span>
                    <a href="#">Sign Up</a>
                </form>
            </div>
        </div>
    )
}