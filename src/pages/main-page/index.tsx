import {ContainerProps, Container} from "@mui/material";
import FilterSection from "../../components/FilterSection";

function MainContainer(props: ContainerProps) {
    return (
        <Container
            disableGutters={true}
            sx={{ padding: { xl: 5, lg: 5, md: 5, sm: 2, xs: 1 } }}
            maxWidth={false}
            {...props}>
                <FilterSection/>
        </Container>
    )
}

export default MainContainer;