import {useContext} from "react";
import {ThemeContext} from "../StyleThemeProvider";

const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    return theme;
}
export default useThemeContext