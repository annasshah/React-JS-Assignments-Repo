import { Typography, Box, Container, Grid, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar';
import { useLocation } from 'react-router';
import StatisticsCard from '../components/StatisticsCard';
import { useNavigate } from 'react-router'
export default function DetailsPage() {

    const [detailedView, setDetailedView] = useState([])

    // const location = useLocation();
    // console.log(location.state);
    const location = useLocation();


    useEffect(() => {
        setDetailedView(location.state)
    }, []);


    const navigate = useNavigate()
    const toHomePage = () => {
        navigate("/");
    };



    return (
        <>
            <TopBar topBarTitle={`Detailed view of ${detailedView.state} State`} />
            <Container>

                <Box sx={{ my: 3 }}><Typography align='left' variant='h5' sx={{ fontWeight: 'bold' }}>
                    {detailedView.state} State Statistics
                </Typography>

                    <Stack spacing={2} direction='row'>
                        <Typography align='left' variant='body1'>
                            Last update date: {detailedView.lastUpdateEt}
                        </Typography>

                        <Typography align='left' variant='body1'>
                            Modified date {detailedView.dateModified}
                        </Typography>
                    </Stack>
                </Box>

                <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Test Results</Typography>
                <Grid container spacing={2}>
                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Total Test Results' cardData={detailedView.totalTestResults} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Total Positive Casses' cardData={detailedView.positive} />

                    <StatisticsCard bgColor='#e0f3df' cardTitle='Total Recovered' cardData={detailedView.recovered} />

                    <StatisticsCard bgColor='#ffe5e4' cardTitle='Total Deaths' cardData={detailedView.death} />
                </Grid>

                <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Hospitalized</Typography>

                <Grid container spacing={2}>
                    <StatisticsCard bgColor='#e4dae6' cardTitle='Hospitalized' cardData={detailedView.hospitalized} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Hospitalized Currently' cardData={detailedView.hospitalizedCurrently} />

                    <StatisticsCard bgColor='#fce8fd' cardTitle='Hospitalized Cumulative' cardData={detailedView.hospitalizedCumulative} />

                    <StatisticsCard bgColor='#ffe5b8' cardTitle='Hospitalized Cumulative' cardData={detailedView.hospitalizedCumulative} />
                </Grid>


                <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Tests Viral</Typography>
                <Grid container spacing={2}>
                    <StatisticsCard bgColor='#ffe5b8' cardTitle='Total Tests Viral' cardData={detailedView.totalTestsViral} />

                    <StatisticsCard bgColor='#e4dae6' cardTitle='Positive Tests Viral' cardData={detailedView.positiveTestsViral} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Negative Tests Viral' cardData={detailedView.negativeTestsViral} />
                </Grid>


                <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Test Results</Typography>
                <Grid container spacing={2}>
                    <StatisticsCard bgColor='#e4dae6' cardTitle='Total Test Results' cardData={detailedView.totalTestResults} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Total Positive Casses' cardData={detailedView.positive} />

                    <StatisticsCard bgColor='#ffe5e4' cardTitle='Total Deaths' cardData={detailedView.death} />
                </Grid>

                <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Increase Rate</Typography>
                <Grid container spacing={2}>

                    <StatisticsCard bgColor='#ffe5e4' cardTitle='Total Test Results Increase' cardData={detailedView.totalTestResultsIncrease} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Positive Increase' cardData={detailedView.positiveIncrease} />

                    <StatisticsCard bgColor='#ddf0f8' cardTitle='Negative Increase' cardData={detailedView.negativeIncrease} />

                    <StatisticsCard bgColor='#e0f3df' cardTitle='Death Increase' cardData={detailedView.deathIncrease} />

                    <StatisticsCard bgColor='#e0f3df' cardTitle='Hospitalized Increase' cardData={detailedView.hospitalizedIncrease} />

                    <StatisticsCard bgColor='#ffe5e4' cardTitle='Total' cardData={detailedView.total} />

                </Grid>


                <Box sx={{ my: 3, textAlign: 'left' }}>
                    <Button variant="outlined" color='error' size='large' onClick={toHomePage}>Go Back To Home</Button>
                </Box>
            </Container>
        </>
    )
}
