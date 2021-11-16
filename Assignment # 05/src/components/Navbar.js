import { Container, Grid, Paper, Typography, Stack, Divider, List, ListItem, ListItemText, Button, ListItemIcon } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import React from 'react'
import logo from '../images/logo.png'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Hidden from '@mui/material/Hidden';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";
import { GrFormDown } from "react-icons/gr";
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Navbar() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);


    }











    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}

        >
            <List>
                <ListItem button>
                    <ListItemText primary={''} /> <Typography sx={{ fontSize: '25px' }}>×</Typography>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemText primary={'Sign in for Free'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Messages'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Orders'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Cart'} />
                </ListItem>
            </List>
            <Divider />



            <List>
                <ListItem button>
                    <ListItemText primary={'All Categories'} /><GrFormDown />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Ready To Ship'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Personal Protective Equipment'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Buyer Central'} /><GrFormDown />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Sell On Alibaba'} /><GrFormDown />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Help'} /><GrFormDown />
                </ListItem>
            </List>
            <Divider />

            <List>
                <ListItem button>
                    <ListItemText primary={'English-PKR'} /><GrFormDown />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Get the App'} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Ship to: '} /><img loading="lazy" width="20" srcSet={`https://flagcdn.com/w40/pk.png 2x`} alt="" /><GrFormDown />
                </ListItem>

            </List>

        </Box>
    );


















    return (
        <div>
            <Hidden mdDown={true}>
                <Paper elevation={2} children={
                    <Box>
                        <Container sx={{ py: 3 }} >


                            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>

                                <Grid item md={2} lg={2} justifySelf={'start'}>
                                    <img src={logo} alt="" width='160px' />
                                </Grid>
                                <Grid item md={7} lg={7}>
                                    <div className='searchInputDiv'>
                                        <div >
                                            <select name="" id="" className='searchBy ps-3 pe-1 py-1 border-0'>
                                                <option value="" >Products</option>
                                                <option value="" >Supliers</option>
                                            </select>
                                            <span className=''>
                                                <input type="text" className='searchInput border-0' placeholder='What are you looking for...' />
                                            </span >
                                        </div>

                                        <div className='d-flex align-items-center'><PhotoCameraOutlinedIcon sx={{ color: 'lightGray' }} />
                                            <button className='searchBtn'><SvgIcon sx={{ fontSize: 22 }} spacing={0}> <IoSearchOutline /> </SvgIcon> Search</button>
                                        </div>
                                    </div>
                                </Grid>


                                <Grid item md={3} lg={3}>
                                    <Stack direction="row" spacing={0} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Stack direction="row" spacing={1} >


                                            <SvgIcon sx={{ fontSize: 29 }} spacing={0}> <AiOutlineUser /></SvgIcon><Typography fontSize={13} noWrap={true}>Sign in <br /> Join Free
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> <BiMessageDots /></SvgIcon><Typography fontSize={12}>Messages
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> < AccountCircleOutlinedIcon sx={{ fontSize: 23 }} /> </SvgIcon><Typography fontSize={12}>Orders
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> < BsCart2 /></SvgIcon><Typography fontSize={12}>Cart
                                            </Typography>
                                        </Stack>

                                    </Stack>

                                </Grid>
                            </Grid>
                        </Container>


                        <Divider />

                        <Container>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>

                                <Grid item md={12} lg={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack direction="row" spacing={2} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>

                                        <Stack id="basic-button"
                                            aria-controls="basic-menu"
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick} direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }} color={'disabled'}> <BsListUl /></SvgIcon>
                                            <Typography>Categories </Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                        </Stack>

                                        <Menu elevation={0}
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            sx={{fontSize:'15px'}}
                                        >
                                            <MenuItem onClick={handleClose}>Machinery / Vehicles & Accessories</MenuItem>
                                            <MenuItem onClick={handleClose}>Comsumer Electronics / Home Appliances</MenuItem>
                                            <MenuItem onClick={handleClose}>Apparel / Fashion Accessories / Timepieces,Jewelry,Eyewear</MenuItem>

                                            <MenuItem onClick={handleClose}>Lights &amp; Lighting / Construction &amp; Real Estate</MenuItem>
                                            <MenuItem onClick={handleClose}>Home &amp; Garden Furniture</MenuItem>
                                            <MenuItem onClick={handleClose}>Fabric &amp; Textiles Raw Material / Home Textiles</MenuItem>
                                            <MenuItem onClick={handleClose}>Beauty &amp; Personal Care / Health &amp; Medical</MenuItem>
                                            <MenuItem onClick={handleClose}>Packaging &amp; Printing / Office &amp; School Supplies</MenuItem>
                                            <MenuItem onClick={handleClose}>Electrical
                                                Equipment &amp; Supplies</MenuItem>

                                            <MenuItem onClick={handleClose}>Tools &amp; Hardware / Security &amp; Protection /Fabrication Service</MenuItem>
                                            <MenuItem onClick={handleClose}>Electrical Equipment &amp;
                                                Supplies / Electronic
                                                Components,Accessories &amp; Telecommunications</MenuItem>
                                            <MenuItem onClick={handleClose}>Sports &amp; Entertainment / Toys &amp; Hobbies / Gifts &amp; Crafts</MenuItem>


                                            <MenuItem onClick={handleClose}>Luggage, Bags &amp; Cases / Shoes &amp; Accessories</MenuItem>
                                            <MenuItem onClick={handleClose}>Minerals &amp; Metallurgy / Chemicals / Rubber &amp; Plastics</MenuItem>
                                            <MenuItem onClick={handleClose}>Agriculture / Food &amp; Beverage</MenuItem>

                                            <MenuItem onClick={handleClose}>Commercial Service Equipment / Business Services</MenuItem>
                                            <MenuItem onClick={handleClose}>Energy / Environment</MenuItem>

                                            <MenuItem variant='primary' onClick={handleClose}>All Categories</MenuItem>
                                        </Menu>




                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography> </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>{('Personal Protective Equipment').slice(0, 20)}</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>Buyer Central</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap >Sell on Alibaba</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>Help</Typography>
                                        </Stack>
                                    </Stack>



                                    <Stack direction="row" spacing={2} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>Get the App</Typography>
                                        </Stack>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>English-PKR</Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                        </Stack>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>Ship to: </Typography><img
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/pk.png 2x`}
                                                alt=""
                                            /><SvgIcon sx={{ fontSize: 20 }} color={'disabled'} > <GrFormDown /> </SvgIcon>
                                        </Stack>


                                    </Stack>





                                </Grid>
                            </Grid>
                        </Container>


                    </Box>
                } />



            </Hidden>


            <Hidden mdUp={true}>
                <Paper elevation={1} children={
                    <Container sx={{ py: 3 }} >

                        <Grid container spacing={0} sx={{ display: 'flex', alignItems: 'center' }}>

                            <Grid item sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <React.Fragment>
                                    <MenuIcon onClick={toggleDrawer('left', true)} />
                                    <Drawer
                                        anchor={'left'}
                                        open={state['left']}
                                        onClose={toggleDrawer('left', false)}
                                    >
                                        {list('left')}
                                    </Drawer>
                                </React.Fragment>

                                <Box>
                                    <img src={logo} alt="" width='180px' />
                                </Box>

                                <Hidden smDown={true}>
                                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography noWrap>English-PKR</Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                    </Stack></Hidden>
                            </Grid>



                            <Grid item sm={12} xs={12} sx={{ mt: 3 }}>
                                <div className='searchInputDiv'>
                                    <div >
                                        <Hidden smDown={true}>
                                            <select name="" id="" className='searchBy ps-3 pe-1 py-1 border-0'>
                                                <option value="" >Products</option>
                                                <option value="" >Supliers</option>
                                            </select>
                                        </Hidden>

                                        <span className=''>
                                            <input type="text" className='searchInput border-0' placeholder='What are you looking for...' />
                                        </span >
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <button className='searchBtn'><SvgIcon sx={{ fontSize: 22 }} spacing={0}> <IoSearchOutline /></SvgIcon></button>
                                    </div>
                                </div>


                            </Grid>
                        </Grid>






                    </Container>
                } />



            </Hidden>

        </div >
    )
}
