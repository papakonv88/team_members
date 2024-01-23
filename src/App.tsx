import getTheme from "./theme/index.tsx";
import {ThemeProvider} from "@mui/material";
import MainPage from "./pages/index.tsx"

function App() {
    const theme = getTheme;
    return (
        <ThemeProvider theme={theme}>
            <MainPage/>
        </ThemeProvider>
    )
}

export default App
