import StyledThemeProvider from "./StyleThemeProvider";
import App from "./App";

const Index = () => {
    return(
        <StyledThemeProvider>
            <App/>
        </StyledThemeProvider>
    )
}

export default Index