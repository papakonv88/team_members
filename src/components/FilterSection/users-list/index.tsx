import {Grid} from "@mui/material";
import {User} from "../../../entities";
import {useState} from "react";
import React from 'react';
import AccordionContainer from "./accordion-container";

type UsersProps = {
    users: User[];
}

function UsersList({ users }: UsersProps) {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} rowGap={1}>
            {users.map((user: User, idx: number) => (
              <AccordionContainer key={idx} user={user} idx={idx} expanded={expanded} handleChange={handleChange} />
            ))}

        </Grid>
    )
}

export default UsersList;