import React, { useState } from "react";
import { useTheme } from "styled-components";

import "./switchInput.css"

export default function SwitchInput({ isDarkTheme, toggleTheme }) {

    const theme = useTheme()

    const [isToggled, setIsToggled] = useState(isDarkTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme()
    }

    return(
        <div className="switch--wrapper">
            <p style={{color: theme.switchParagraphLeft}}>Light</p>
            <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}></input>
            <span className="slider"></span>
            </label>
            <p style={{color: theme.switchParagraphRight}}>Dark</p>
        </div>
    )
}