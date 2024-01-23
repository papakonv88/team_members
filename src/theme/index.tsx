import React from 'react';
import {createTheme} from "@mui/material";
import '@mui/material/Button'
import '@mui/material/Typography'
import '@mui/material/styles'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
        count: React.CSSProperties;
        user: React.CSSProperties;
        infoHeader: React.CSSProperties;
        infoBody: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        count?: React.CSSProperties;
        user?: React.CSSProperties;
        infoHeader?: React.CSSProperties;
        infoBody?: React.CSSProperties
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        logo: true;
        count: true;
        user: true;
        infoHeader: true;
        infoBody: true;
    }
}
const getTheme = createTheme({
    palette: {
        primary: {
            main: '#00A3E3'
        },
        secondary: {
            main: '#E7E7E7',
            contrastText: '#F9F9F9',
        },
        background: {
            default: '#FFFFFF'
        }
    },
    components: {
        MuiTextField: {
            variants: [
                {
                    props: {variant: 'outlined'},
                    style: {
                        border: `2px solid #E7E7E7`,
                        opacity: 0.5,
                        borderRadius: '4px',
                        '& .MuiOutlinedInput-input': {
                            opacity: 0.5
                        },
                        '& .MuiOutlinedInput-input.Mui-focused': {
                            opacity: 1
                        },
                        '& .MuiOutlinedInput-input:hover': {
                            opacity: 1
                        },
                        "& label.Mui-focused": {
                            color: 'inherit'
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                border: `2px solid #E7E7E7`,
                                opacity: 1,
                                borderRadius: '4px',
                            },
                            '& > MuiInputAdornment': {
                                opacity: 1
                            }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                border: `2px solid #E7E7E7`,
                                opacity: 1,
                                borderRadius: '4px',
                            }
                        }
                    },
                }
            ],
        }
    },
    typography: {
        logo: {
            fontSize: '2rem', fontWeight: '500', color: '#AFBAC9'
        },
        count: {
            fontSize: '2rem', fontWeight: '700'
        },
        user: {
            fontSize: '1.25rem', fontWeight: '700'
        },
        infoHeader: {
            color: '#31B1E9', fontSize: '1rem', fontWeight: '700'
        },
        infoBody: {
            color: '#BCBCC3', fontSize: '1rem', fontWeight: '700'
        }
    }
});

export default getTheme;