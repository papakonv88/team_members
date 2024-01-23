
import SearchTextField from "./SearchTextField";
import {SearchInputProps} from "../../../entities";
import {FormEvent} from "react";
import {Grid} from "@mui/material";

function SearchBar({ value, handleInputChange }: SearchInputProps) {
    return (
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <SearchTextField value={value} onChange={(e) => handleInputChange(e as FormEvent<HTMLTextAreaElement>)} fullWidth={true} />
        </Grid>
    )
}

export default SearchBar;