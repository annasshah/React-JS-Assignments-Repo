import { Grid, Stack, Typography, SvgIcon } from '@mui/material';
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { useSelector } from 'react-redux';



export default function CelsiusData() {

    const apiData = useSelector((state) => state)
    const globalData = apiData.data

    let tempInCelsius = (Kelvin) => {
        return Math.round(Kelvin - 273.15)
    }

    return (
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  >
            <Stack direction='column' justifyContent='center' 
            sx={{ height: '45vh', width: '100%' }}
            >

                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1} >

                    <Stack direction='row' alignItems='center' justifyContent='center' >
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${globalData.weather[0].icon}@2x.png`} width='auto' />
                        </div>

                        <Typography sx={{ color: 'var(--primary)', fontWeight: '500', fontSize: '7.2rem' }} variant='h1' >{tempInCelsius(globalData.main.temp)}</Typography>

                    </Stack>

                    <Stack direction='column' justifyContent='center'>
                        <Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h4'>°C</Typography>

                        <Stack direction='row'
                            justifyContent='center'
                            alignItems='center'>
                            <SvgIcon color='primary' fontSize='small'><BsArrowUpShort />
                            </SvgIcon>
                            <Typography sx={{ color: 'var(--primary)', fontWeight: '500', fontSize: '15px' }} variant='h6'>{tempInCelsius(globalData.main.temp_max)}°</Typography>
                        </Stack>
                        <Stack direction='row' justifyContent='center' alignItems='center'>
                            <SvgIcon color='primary' fontSize='small'><BsArrowDownShort />
                            </SvgIcon>
                            <Typography sx={{ color: 'var(--primary)', fontWeight: '500', fontSize: '15px' }} variant='h6'>{(tempInCelsius(globalData.main.temp_min))}°</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='column' spacing={1}>
                    <Typography align='center' sx={{ color: 'var(--primary)', fontWeight: '400',textTransform:'uppercase',fontSize:'1.2rem',letterSpacing:'2px' }} variant='h6'>{globalData.weather[0].main}</Typography>
                    <Typography align='center' sx={{ color: 'var(--primary)', fontWeight: '400',textTransform:'uppercase',fontSize:'0.9rem',letterSpacing:'2px' }} variant='h6'>{globalData.weather[0].description}</Typography>
                </Stack>


            </Stack>

        </Grid>
    )
}
