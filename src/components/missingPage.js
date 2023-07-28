import { useNavigate } from "react-router-dom";
import { styled, withTheme } from "styled-components";

import './loginForm.css';

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

const StyledButton = styled.button`
    cursor: pointer;
    font-size: 1.5rem;
    width: 80%;
    margin: 1rem 10%;
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

const MissingPage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
    }


    return(
        <LoginWrapper>

            <section className="login--signin">

                <h1>404 Page not found</h1>
                <StyledButton onClick={logout}>Go back to home page</StyledButton>

            </section>

        </LoginWrapper>
    )
}

export default withTheme(MissingPage)