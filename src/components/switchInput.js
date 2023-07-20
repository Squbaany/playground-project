import React, { useState } from "react";
import { styled, withTheme } from "styled-components";

import "./switchInput.css"

const LeftP = styled.p`
    color: ${(props) => props.theme.switchParagraphLeft};
`

const RightP = styled.p`
    color: ${(props) => props.theme.switchParagraphRight};
`

const SwitchInput = ({ isDarkTheme, toggleTheme }) => {

    const [isToggled, setIsToggled] = useState(isDarkTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme()
    }

    return(
        <div className="switch--wrapper">
            <LeftP>Light</LeftP>
            <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}></input>
            <span className="slider"></span>
            </label>
            <RightP>Dark</RightP>
        </div>
    )
}

export default withTheme(SwitchInput)