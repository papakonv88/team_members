import {Grid, Typography} from "@mui/material";

type CountProp = {
    count: number;
}

function Count({count}: CountProp) {
    return (
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{ display: 'flex', justifyContent: { xl: 'flex-end', lg: 'flex-end', md: 'flex-end', sm: 'center', xs: 'center' } }}>
            <Typography align={'right'} variant={'count'}>{count} People</Typography>
        </Grid>
    )
}

export default Count;