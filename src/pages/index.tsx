import {Divider, Stack} from "@mui/material";
import Navigation from "../components/Navigation";
import MainContainer from "./main-page";
import {ChildrenProps} from "../entities";

const Wrapper = ({children}: ChildrenProps) => (
    <Stack
        sx={{
            width: "100%",
            height: "100%",
            background: "background.default",
            overflowY: "hidden",
        }}
    >
        {children}
    </Stack>
);


function MainPage() {


    return (
        <Wrapper>
            <Navigation />
            <Divider sx={{ backgroundColor: 'secondary.main', height: (theme) => theme.spacing(1), borderBottomWidth: 0 }} />
            <MainContainer />
        </Wrapper>
    )
}

export default MainPage;