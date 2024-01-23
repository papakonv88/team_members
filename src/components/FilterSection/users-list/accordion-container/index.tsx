import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Grid, Typography, Stack} from "@mui/material";
import UserAvatar from "../../../../assets/img/user.jpg";
import {styled} from "@mui/system";
import {User} from "../../../../entities";
import React from "react";

const StyledAccordion = styled(Accordion)(({theme}) => ({
    border: `2px solid ${theme.palette.secondary.main}`,
}));

const StyledAccordionSummary = styled(AccordionSummary)(({theme}) => ({
    backgroundColor: theme.palette.secondary.contrastText,
    minHeight: 55,
    maxHeight: 55,
    '&.Mui-expanded': {
        minHeight: 55,
        maxHeight: 55,
    },
    '&:hover': {
        backgroundColor: theme.palette.background.default,
    }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({theme}) => ({
    display: 'flex',
    columnGap: theme.spacing(3),
    alignItems: 'center',
    padding: theme.spacing(2)
}));

type AccordionContainerProps = {
    user: User;
    idx: number;
    expanded: boolean | string;
    handleChange: (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
}


function AccordionContainer({user, idx, expanded, handleChange}: AccordionContainerProps) {
    return (
        <Grid key={idx} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledAccordion expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}
                             disableGutters={true}
                             elevation={0}
            >
                <StyledAccordionSummary
                    expandIcon={!expanded ? <AddIcon/> : <RemoveIcon/>}
                    aria-controls={`panel${idx}-content`}
                    id={`panel${idx}-header`}
                >
                    <Typography variant={'user'}>{user.name}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Avatar alt="User" src={UserAvatar} sx={{height: '85px', width: '85px'}}/>
                    <Stack direction={'column'}>
                    <Typography variant={'infoHeader'} pb={0.5}>
                        {user.email}
                    </Typography>
                        <Typography variant={'infoBody'}>
                            {user.address.street}, {user.address.suite}
                        </Typography>
                        <Typography variant={'infoBody'}>
                            {user.address.zipcode}, {user.address.city}
                        </Typography>
                    </Stack>

                </StyledAccordionDetails>
            </StyledAccordion>
        </Grid>
    )
}

export default AccordionContainer;