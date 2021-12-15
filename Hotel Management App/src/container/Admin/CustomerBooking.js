import React from 'react'
import { Typography,SvgIcon, Stack} from '@mui/material'
import { BsDashLg } from 'react-icons/bs';

export default function CustomerBooking() {
    return (
        <div>
            <Stack>

                <Typography variant='h4' sx={{ fontWeight: 'bold', px: 0 }}>Customer Booking</Typography>
                <SvgIcon><BsDashLg /></SvgIcon>

            </Stack>

        </div>
    )
}