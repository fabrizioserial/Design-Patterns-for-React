import React, {useState,createContext} from "react";
import {themes} from "./styles/theme";
import {ContextType} from "./utils/types";

export const ThemeContext = createContext<ContextType>( {theme:themes['dark'], toggleTheme: () => {}});

interface ProviderPatternExampleProps {
    children: JSX.Element
}

const StyledThemeProvider = ({children}:ProviderPatternExampleProps) => {

    const [theme, setTheme] = useState<string>('dark')

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return(
        <ThemeContext.Provider value={{theme: themes[theme],toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default StyledThemeProvider