import React from "react";
import { styled, withTheme } from "styled-components";

import './loginForm.css';

import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
    position: relative;
    text-align: center;
    width:100%;
    display: felx;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.body}};
`;

const Registered = () => {

    return(
        <LoginWrapper>

            <section className="login--signin">

                <h1 className="instructions">Succesfully registered!</h1>
                <Link to="/">Sign in</Link>

            </section>

        </LoginWrapper>
    )
}

export default withTheme(Registered)