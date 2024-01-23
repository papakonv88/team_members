import {styled} from '@mui/system';
import {Stack, Typography} from "@mui/material";
import Logo from './../../assets/img/logo.png'

const NavWrapper = styled(Stack)(({ theme }) => ({
    width: 'calc(100% - 100px)',
    position: 'static',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main} 30px, ${theme.palette.background.default} 30px, ${theme.palette.background.default})`,
    top: 0,
    left: 0,
    display: 'flex',
    padding: '50px 50px 20px',
    zIndex: 101 // Stay on top of everything
}));

function Navigation() {
    return (
        <NavWrapper>
            <Stack direction={'row'} columnGap={2} alignItems={'center'}>
                <img src={Logo} alt="ImprovIT" />
                <Typography variant={'logo'}>Team Members</Typography>  {/*In real-world project this could be an enum value*/}
            </Stack>
        </NavWrapper>
    )
}

export default Navigation;