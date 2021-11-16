import { Divider, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ConsumerElectronics from '../images/my-market/Consumer Electronics.png'
import Apparel from '../images/my-market/Apparel.png'
import VehiclesAccessories from '../images/my-market/Vehicles & Accessories.png'
import SportsEntertainment from '../images/my-market/Sports & Entertainment.png'
import Machinery from '../images/my-market/Machinery.png'
import HomeGarden from '../images/my-market/Home & Garden.png'
import BeautyPersonalCare from '../images/my-market/Beauty & Personal Care.png'
import AllCategories from '../images/my-market/All Categories.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';














export default function MyMarket() {
    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        My Market
                    </ListSubheader>
                }
            >
                <Divider variant='fullWidth' sx={{ mb: 1 }} />


                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={ConsumerElectronics} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>ConsumerElectronics
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={Apparel} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Apparel
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={VehiclesAccessories} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Vehicles Accessories
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={SportsEntertainment} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Sports &amp; Entertainment
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={Machinery} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Machinery
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={HomeGarden} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Home &amp; Garden
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={BeautyPersonalCare} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>Beauty &amp; Personal Care
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemAvatar sx={{minWidth:'25px',marginRight:'12px'}}>
                        <Avatar sx={{width:25, height:25}} alt="Remy Sharp" src={AllCategories} />
                    </ListItemAvatar>
                    <Typography fontSize={14}>All Categories
                    </Typography>
                    <ListItemText />
                    <KeyboardArrowRightIcon />
                </ListItemButton>
               
            </List>











            {/* <Box sx={{ px: 2 }}>
                <Typography sx={{ fontWeight: 'bold', py: 1 }}>
                    My Market
                </Typography>
                <Divider variant='fullWidth' />


                <Stack direction="column" spacing={2} sx={{ py: 2 }}>


                    <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center'}}>
                        <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /><Typography fontSize={15}>Messages
                        </Typography>
                    </Stack>





                    <Avatar sx={{ width: 28, height: 28 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar sx={{ width: 28, height: 28 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Stack>



            </Box> */}


        </div>
    )
}
