import React from "react";
import useThemeContext from "../../hooks/theme.hook";

const DummyComponent = () => {
    const theme = useThemeContext();

    return(
        <div style={theme.theme}>
            <p>Test!</p>
            <button onClick={theme.toggleTheme}>Click to change the theme</button>
        </div>
    )
}

export default DummyComponent