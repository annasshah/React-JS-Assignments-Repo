import { Box, Container, Grid} from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CelsiusData from '../components/CelsiusData';
import TopBar from '../components/TopBar';
import WeatherLocation from '../components/WeatherLocation';
import { WindAirAndHumidity } from '../components/WindAirAndHumidity';
import MoreDetails from '../components/MoreDetails';
import SunriseAndSunset from '../components/SunriseAndSunset';
import { getData } from '../config/action';



export default function Home() {

    const globalData = useSelector((state) => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData);
    }, []);

    return (

        <>
            <TopBar />
            <Box sx={{ mt: 5 }}>
                <Container>
                    <Grid container>

                        {/* <WeatherLocation /> */}

                        <WindAirAndHumidity />

                        <CelsiusData />

                        <SunriseAndSunset />

                        <MoreDetails />


                    </Grid>

                </Container>

            </Box>



        </>

    )
}
