import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Badge, Button } from '@mui/material';
import SandwichMenu from './SandwichMenu';
import { NavLink } from 'react-router-dom';

const SandwichLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contacts', path: '/contacts'},
]

const AccLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
    return (
      <AppBar position="fixed" color='inherit'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px'}}>
        <Box display='flex' alignItems='center' sx={{ml: 3}}>
          <SandwichMenu />

              <Typography variant="h4" noWrap
              component={NavLink} to={'/'}
              color={'inherit'}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: 5 }}>
            <Button color="inherit" sx={{":hover": {backgroundColor: 'inherit'}}}>
              <Typography variant="h4">SO Clothes</Typography>
            </Button>
          </Typography>
          </Box>

          <Box display='flex' alignItems='center' sx={{mr: 3}}>
          <Button 
          color='inherit'
          sx={{":hover":{backgroundColor:'inherit'}}}>
            
            <LocalMallIcon fontSize='large'></LocalMallIcon>
            <Badge badgeContent='2' color='primary'></Badge>
            </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon fontSize='large'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
        </Toolbar>
      </AppBar>
    );
}