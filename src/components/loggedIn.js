import React from "react";
import { styled, withTheme } from "styled-components";

import './loginForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

const LoginWrapper = styled.div`
    text-align: center;
    display: felx;
    flex-direction: column;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.body}};
`;

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

const LoggedIn = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const user = location.state.userID

    const password = Cookies.get(user)

    return(
        <LoginWrapper>

            <section className="login--signin">

                <h1 className="instructions">Hello {user}</h1>
                <p>Your password is: {password}</p>
                <StyledButton onClick={() => navigate("/")}>Sign out</StyledButton>

            </section>

        </LoginWrapper>
    )
}

export default withTheme(LoggedIn)