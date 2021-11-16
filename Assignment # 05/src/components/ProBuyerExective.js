import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import React from 'react'

export default function ProBuyerExective() {
    return (
        <div>

            <Paper elevation={0} sx={{backgroundColor:'#333333',px:2,py:2}} children={
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' ,pb:1 }}> <img src="https://img.alicdn.com/imgextra/i1/O1CN01h1du8I1IZRwJhj11v_!!6000000000907-2-tps-102-36.png" width='50px' alt="" />
                        <Typography noWrap sx={{ fontWeight: 'bold',fontSize:15, color: '#f2cb8e',marginLeft:'10px'}}>
                            Pro Buyer Exclusive
                        </Typography>
                    </Box>


                    <Typography noWrap align='left' sx={{ fontSize: 11, color: '#f2cb8e',pb:1 }}>
                        Get payment terms and much more
                    </Typography>

                    <Button fullWidth={true} sx={{fontSize:'12px', backgroundColor: '#f2cb8e', color: '#333333',p:0,py:'3px',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px',borderTopRightRadius:'15px'}} variant='contained'>
                        Upgrade
                    </Button>
                </Box>
            } />




        </div>
    )
}
