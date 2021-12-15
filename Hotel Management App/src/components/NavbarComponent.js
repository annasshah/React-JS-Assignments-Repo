import * as React from "react";
import { Container, AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Avatar, SvgIcon, Stack, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, signOut } from "../config/firebaseconfig/Index";
import { changeUserAuth,getCartData} from "../config/redux/action/Index";
import SmallSpinner from '../assets/SmallSpinner'

const pages = ["Home", "Contact", "About",'Bookingform'];
const userAuthTrue = ["My Account", "Profile", "Logout"];
const userAuthFalse = ["Login", "Create Account"];

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAuthStaus = useSelector((a) => a.userAuthReducer.userAuth);
  const userProfile = useSelector(state => state.userAuthReducer.userProfile)
  const AuthLoading = useSelector((a) => a.userAuthReducer.isLoading);
  // const userCart = useSelector((a) => a.cartReducer.cart);

  // const cartLoading = useSelector((a) => a.cartReducer.isLoading);
  const [userAuth, setUserAuth] = useState();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = () => {
    // setAnchorElNav(null)

    // setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if (page.toLowerCase() === "home") {
      navigate("/");
    } else if (page === "Create Account") {
      navigate("/signup");
    } else if (page.toLowerCase() === "logout") {
      signOut(auth)
      changeUserAuth(dispatch, false);
      getCartData(dispatch, [])
      navigate("/login")
    }
    else if (page.toLowerCase() === 'my account') {
      navigate("/myaccount")
    }
    else if (page.toLowerCase() === 'profile') {
      navigate("/myaccount/")
    }
    else if(page.toLowerCase() === 'Bookingform'){
      navigate("/Bookingform")
    }
    else {
      navigate(`/${page.toLowerCase()}`);
    }
    setAnchorElNav(null)

    setAnchorElUser(null)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserCart = () => { 
    navigate('/myaccount/my-cart')
  };

  useEffect(() => {
    setUserAuth(userAuthStaus);
  }, [userAuthStaus]);

  return (
    <AppBar position="static" sx={{ py: 1 }} elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography

            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO SPACE
          </Typography>


          {/* -------------- Conditional Redering -------------- */}

          {/* {userAuth &&  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*  } */}




          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO SPACE
          </Typography>




          {/* -------------- Conditional Redering -------------- */}

          {/* {userAuth ?  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* : <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>} */}




          <Box sx={{ flexGrow: 0 }}>

            <Stack direction="row" spacing={3} alignItems="center">

              {/* <Stack justifyContent='flex-start' alignItems='flex-end'>
                <SvgIcon sx={{ position: 'relative',pointerEvents:'all',cursor:'pointer' }} onClick={handleUserCart} fontSize="medium">
                  <FaShoppingCart /></SvgIcon>
                {cartLoading ? <Stack sx={{ position: 'absolute', zIndex: '1001', width: '17px', height: '17px', borderRadius: '50%', marginTop: '-8px', marginRight: '-8px' }} justifyContent='center' alignItems='center'><SmallSpinner height='15' /> </Stack>


                  : <Stack sx={{ position: 'absolute', zIndex: '1001', width: '17px', height: '17px', borderRadius: '50%', backgroundColor: 'red', marginTop: '-8px', marginRight: '-8px' }} justifyContent='center' alignItems='center'><Typography sx={{ fontSize: '0.8rem', fontWeight: '600' }}>
                    {userCart.length}
                    
                  </Typography></Stack>}

              </Stack> */}



              {AuthLoading ? <SmallSpinner /> : userAuth ? (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userAuthStaus ? userProfile.userName: null} src="/static/images/avatar/2.jpg" />
                </IconButton>
              ) : (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/static/images/avatar/2.jpg" />
                </IconButton>
              )}
            </Stack>





            {/* -------------- Conditional Redering -------------- */}

            {userAuth ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userAuthTrue.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseNavMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userAuthFalse.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseNavMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}







          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarComponent;






// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useState } from 'react';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


// const NavbarComponent = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(false);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null)
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(false);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default NavbarComponent;
