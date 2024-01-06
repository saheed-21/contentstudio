import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home';
import Signin from './SignUp.js';
import Aboutus from './Aboutus.js';
import Contactus from './Contactus.js';
// const pages = ['Login', 'Signup', 'Aboutus'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    
  };

  return (

    <Router>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
              {/* <Link to='./register'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
              </Link> */}
            {/* ))} */}
            
            <Link to="/" style={{
                paddingLeft:'20px',
            }}><Button style={{
              color:'white'
            }}>Home</Button></Link>
            
            <Link to="/login" style={{
                paddingLeft:'20px',
            }}><Button style={{
              color:'white'
            }}>Login</Button></Link>
            
            <Link to="/Signin" style={{
                paddingLeft:'20px',
            }}><Button style={{
              color:'white'
            }}>SIGN up</Button> </Link>
            <Link to="/Aboutus" style={{
                paddingLeft:'20px',
            }}><Button style={{
              color:'white'
            }}>About Us</Button> </Link>
            <Link to="/Contactus" style={{
                paddingLeft:'20px',
            }}><Button style={{
              color:'white'
            }}>Contact Us</Button> </Link>
          </Box>
          <TravelExploreOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CONTENT STUDIO
          </Typography>

          
        </Toolbar>
      </Container>
    </AppBar>
     <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route exact path='/login' element={< Login/>} />
         <Route exact path='/Signin' element={<Signin />} />
         <Route exact path='/aboutus' element={<Aboutus/>} />
         <Route exact path='/contactus' element={<Contactus />} />
     </Routes>
 </Router>
  );
}
export default ResponsiveAppBar;
