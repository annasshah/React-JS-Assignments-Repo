import React from 'react'
import Popover from '@mui/material/Popover';
import { Stack, Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { GrFormDown } from "react-icons/gr";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films,countries } from '../data-files/data';


export default function RegionalSettings() {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        // setAnchorEl(null);
    };

    const open = Boolean(anchorEl);











    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography noWrap>English-PKR</Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                </Stack>
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                elevation={false}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 300,
                            height: 300,
                        },
                    }}
                >
                    <Paper elevation={3} sx={{ py: 3, px: 3 }} children={
                        <Box>

                            <Box><Typography sx={{ fontWeight: 'bold' }}>Regional settings</Typography>
                            </Box>

                            <Box>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 100}}
                                    renderInput={(params) => <TextField {...params} label="Movie" />}
                                />


                            </Box>


                        </Box>

                    } />
                </Box>
            </Popover>

        </div>
    )
}
