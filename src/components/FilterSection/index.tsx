import React from "react";
import SearchBar from "./search-bar";
import Count from "./count";
import {Grid} from "@mui/material";
import {useState, useEffect, useMemo} from "react";
import {User} from "../../entities";
import {usersResults, getData} from "../../utils";
import UsersList from "./users-list";

function FilterSection() {

    const [users, setUsers] = useState<User[] | []>([])
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        getData().then((result) => {
            setUsers(result)
        })
    }, [])

    /*In real-world scenario it could be used along with a Debounce function*/
    const filteredUsers = useMemo(() => {
        if (inputValue) {
            return usersResults(users, inputValue)
        } else {
            return users
        }
    }, [inputValue, users])

    const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setInputValue((e.target as HTMLTextAreaElement).value)
    }

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} rowGap={3}>
            <SearchBar value={inputValue} handleInputChange={handleInputChange}/>
            <Count count={filteredUsers.length}/>
            <UsersList users={filteredUsers}/>
        </Grid>
    )
}

export default FilterSection;