import React from "react";
import { useTheme } from "styled-components";

import "./navbar.css"

import SwitchInput from "./switchInput";

const NavBar = (props) => {

    const theme = useTheme()

    return(
        <nav className="navbar" style={{backgroundColor: theme.body}}>
            <h1 className="nav--logo">Igor Pacholski</h1>
            <SwitchInput
                toggleTheme = {props.toggleTheme}
                isDarkTheme = {props.isDarkTheme}
            />
        </nav>
    )
}

export default NavBar