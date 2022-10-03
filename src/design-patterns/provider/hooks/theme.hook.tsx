import {useContext} from "react";
import {ThemeContext} from "../StyleThemeProvider";

const useThemeContext = () => {
    return useContext(ThemeContext);
}
export default useThemeContext