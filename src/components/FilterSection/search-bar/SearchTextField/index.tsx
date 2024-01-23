import {TextField, TextFieldProps, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchTextField(props: TextFieldProps) {
    return (
        <TextField
            sx={{ maxWidth: { xl: '750px', lg: '750px', md: '550px', sm: '100%', xs: '100%' } }}
            id="input-with-icon-textfield"
            label={!props.value ? 'Search by Name' : null}
            InputLabelProps={{shrink: false}}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            {...props}
        />
    )
}

export default SearchTextField;