import { useState, useEffect } from "react";
import { styled, withTheme } from "styled-components";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

import './loginForm.css';

import axios from "../api/axios.ts";
const LOGIN_URL = '/auth';

const StyledButton = styled.button`
    cursor: pointer;
    font-size: 1.5rem;
    width: 50%;
    margin: 1rem 25%;
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
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 1rem;
    width: 80%;
    transition: 0.4s;
    &:focus {
        outline: none;
        filter: drop-shadow(0px 0px 0.3rem ${(props) => props.theme.color});
    }
`;

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

const LoginForm = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, password, roles, accessToken });
            setUser('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }

    return(
        <LoginWrapper>

            <section className="login--signin">

            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>

                <h1>Log in</h1>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="username">Username:</label>

                    <StyledInput
                        type="text" 
                        id="username" 
                        className="login--input"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    ></StyledInput>

                    <label htmlFor="password">Password:</label>

                    <StyledInput
                        type="password" 
                        id="password" 
                        className="login--input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    ></StyledInput>

                    <StyledButton>Sign in</StyledButton>

                    Don't have an account?

                    <Link to="/registerForm"> Sign up</Link>

                </form>

            </section>

        </LoginWrapper>
    )
}

export default withTheme(LoginForm)