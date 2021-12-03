import { Grid, Hidden, Stack, Typography, SvgIcon, Divider } from '@mui/material'
import { useSelector } from 'react-redux';


export default function MoreDetails() {

    const apiData = useSelector((state) => state)
    const globalData = apiData.data


    let tempInCelsius = (Kelvin) => {
        return Math.round(Kelvin - 273.15)
    }

    let tempInFahrenheit = (Kelvin) => {
        return Math.round(((Kelvin - 273.15) * 1.8) + 32)
    }

    return (
        <>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>More Details</Typography>

                <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '1.2px', px: '0px', mb: '10px' }} />

                <Stack spacing={1}>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body1'>Fahrenheit:</Typography>
                        <Typography variant='body1'>{tempInFahrenheit(globalData.main.feels_like)}°F</Typography>
                    </Stack>
                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body1'>Feel Like:</Typography>
                        <Typography variant='body1'>{tempInCelsius(globalData.main.feels_like)}°C</Typography>
                    </Stack>

                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />


                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body1'>Pressure:</Typography>
                        <Typography variant='body1'>{tempInCelsius(globalData.main.pressure)} mgh</Typography>
                    </Stack>

                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />
                </Stack>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} ></Grid>


            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >

            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>&nbsp;</Typography>

                <Stack spacing={1}>

                <Stack direction='row' justifyContent='space-between'>
                        <Typography sx={{fontWeight:'bold'}} variant='body1'>Wind</Typography>
                    </Stack>

                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />
                    
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body1'>Speed:</Typography>
                        <Typography variant='body1'>{globalData.wind.speed}m/s</Typography>
                    </Stack>
                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body1'>deg:</Typography>
                        <Typography variant='body1'>{globalData.wind.deg}°</Typography>
                    </Stack>

                    <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '0.5px' }} />

                </Stack>


            </Grid>
        </>
    )
}
