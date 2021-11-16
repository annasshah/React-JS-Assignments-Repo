import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import { Typography, Box, Container, Stack, Grid, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router'
// import { MdCoronavirus } from "react-icons/md";
// import { FaHeartbeat } from "react-icons/fa";
// import { GiHealingShield } from "react-icons/gi";
// import { GiLoveInjection } from "react-icons/gi";
import StatisticsCard from '../components/StatisticsCard';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,Tooltip,BarChart,Bar } from 'recharts';


export default function Home() {
    const navigate = useNavigate()

    const [apiData, setApiData] = useState([])
    const [renderData, setRenderData] = useState()

    const apiHandle = axios.create({
        baseURL: "https://api.covidtracking.com/v1/states/current.json",
    });


    const getData = () => {
        apiHandle.get().then((res) => {
            setApiData(res.data);
        });
    };

    let showDetails = (e) => {
        let selectedVal = e.target.value
        if (selectedVal === 'Select State') {
            setRenderData('')
        }
        else {
            setRenderData(apiData.filter((data => data.state === selectedVal)))
        }
    }


    const detailedView = () => {

        navigate("details", { state: renderData[0] });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <TopBar topBarTitle={'Covid 19 Facts and Figures'} />
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Stack spacing={2} direction='column'>
                        <Box><Typography variant='body1'>
                            See the Realtime Worldwide
                        </Typography>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                                COVID-19 Situation!
                            </Typography></Box>
                        <Typography variant='body1'>
                            The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity.It is highly contagious, meaning it spreads fast. Its novelty means that scientists aren't completely sure as to how it behaves since they have very little history to go on.
                        </Typography>
                        <Box sx={{ py: 2 }}>
                            {/* Product Type Section  */}
                            <Stack spacing={2} direction='row' justifyContent="center" alignItems="center">
                                <Typography>Select State to Fatch Data</Typography>

                                <select name="" id="" className='px-3 py-2 rounded-2 mx-3' onChange={(e) => showDetails(e)}>
                                    <option value="Select State">Select State</option>

                                    {
                                        apiData.map((e, i) => {
                                            return <option key={i} value={e.state}>{e.state}</option>
                                        })
                                    }
                                </select>
                            </Stack>
                        </Box>
                    </Stack>

                    {!renderData && <Box sx={{ my: 3 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Realtime Worldwide COVID-19 Statistics </Typography>
                        <ResponsiveContainer width='100%' aspect={3}>
                            <LineChart data={apiData} >
                                <CartesianGrid strokeDasharray='2 2' />
                                <XAxis dataKey='state' interval={'preserveStartEnd'} />
                                <YAxis/>
                                <Tooltip  cursor={false}/>
                                <Legend />
                                <Line type='monotone' dataKey='positive' stroke='red' activeDot={{ r: 5 }} />
                                <Line type='monotone' dataKey='probableCases' stroke='orange' activeDot={{ r: 5 }} />
                                <Line type='monotone' dataKey='negative' stroke='green' activeDot={{ r: 5 }} />
                                <Line type='monotone' dataKey='totalTestResults' stroke='blue' activeDot={{ r: 5 }} />
                                <Line type='monotone' dataKey='negativeTestsViral' stroke='violet' activeDot={{ r: 5 }}/>

                            </LineChart>


                        </ResponsiveContainer>



                    </Box>}






                    {renderData && <Box>
                                                
                        <ResponsiveContainer width='100%' aspect={3}>
                        <BarChart data={apiData}>
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey={renderData[0]} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="positive" fill="#8884d8" />
                            <Bar dataKey="negative" fill="#bb1111" />
                            <Bar dataKey="pending" fill="#8557e9" />
                            <Bar dataKey="totalTestResults" fill="green" />
                            <Bar dataKey="hospitalizedCurrently" fill="red" />
                            <Bar dataKey="hospitalizedCumulative" fill="orange" />
                            <Bar dataKey="totalTestsViral" fill="violet" />
                            <Bar dataKey="positiveTestsViral" fill="#1dff54" />
                            <Bar dataKey="negativeTestsViral" fill="#ff1dc8" />
                            <Bar dataKey="positiveCasesViral" fill="#700a58" />
                            <Bar dataKey="total" fill="#d5b014" />
                            <Bar dataKey="totalTestResultsIncrease" fill="#14c7d5" />
                            <Bar dataKey="posNeg" fill="#82ca9d" />
                        </BarChart>
                        </ResponsiveContainer>

                        <Box sx={{ my: 3 }}><Typography align='left' variant='h5' sx={{ fontWeight: 'bold' }}>
                            {renderData[0].state} State Statistics
                        </Typography>

                            <Stack spacing={2} direction='row'>
                                <Typography align='left' variant='body1'>
                                    Last update date: {renderData[0].lastUpdateEt}
                                </Typography>

                                <Typography align='left' variant='body1'>
                                    Modified date {renderData[0].dateModified}
                                </Typography>
                            </Stack>
                        </Box>


                        {/* <Typography sx={{ mb: 1, mt: 2, fontWeight: 'bold' }} align='left' variant='h6'>Test Results</Typography> */}
                        <Grid container spacing={2}>
                            <StatisticsCard bgColor='#ddf0f8' cardTitle='Total Test Results' cardData={renderData[0].totalTestResults} />

                            <StatisticsCard bgColor='#ddf0f8' cardTitle='Total Positive Casses' cardData={renderData[0].positive} />

                            <StatisticsCard bgColor='#e0f3df' cardTitle='Total Recovered' cardData={renderData[0].recovered} />

                            <StatisticsCard bgColor='#ffe5e4' cardTitle='Total Deaths' cardData={renderData[0].death} />
                        </Grid>

                        <Box sx={{ my: 3, textAlign: 'right' }}>
                            <Button variant="outlined" color='error' size='large' onClick={detailedView}>Go See Full Statistics</Button>
                        </Box>
                    </Box>}
                </Box>
            </Container>


        </>
    )
}
