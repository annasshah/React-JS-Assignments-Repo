import React, { useEffect } from 'react'
import { Container, Box, Paper, AppBar, Typography, Button, FormControlLabel, Radio, Divider, RadioGroup, Grid, Stack, Hidden } from '@mui/material'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router";
import { useState } from 'react';


export default function QuestionSection() {

    const state = useSelector((state) => state)
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        location.state === null && navigate('/')
    }, [])
    


    const [queIndex, setQueIndex] = useState(0)

    const [userAnswer, setUserAnswer] = useState()

    const [marks, setMarks] = useState(0)

    
    const [percentage, setPercentage] = useState()
    const [grade, setgrade] = useState()
    

    const [nextBtn, setNextBtn] = useState(true)




    let selectedOption = (e) => {
        setNextBtn(false)
        setUserAnswer(e.target.value)
    }




    let nextQue = () => {
        if (queIndex === state.length - 1) {
            state[queIndex].userAnswer = userAnswer
            if (userAnswer === state[queIndex].answer) {
                setMarks(marks + 1)
            }

            setPercentage(marks / state.length * 100)
            if ((marks / state.length * 100) <= 100 && (marks / state.length * 100) >= 90) {
                setgrade('A+')
            }
            else if ((marks / state.length * 100) < 90 && (marks / state.length * 100) >= 80) {
                setgrade('A')
            }
            else if ((marks / state.length * 100) < 80 && (marks / state.length * 100) >= 70) {
                setgrade('B')
            }
            else if ((marks / state.length * 100) < 70 && (marks / state.length * 100) >= 60) {
                setgrade('C')
            }
            else if ((marks / state.length * 100) < 60 && (marks / state.length * 100) >= 50) {
                setgrade('D')
            }
            else if ((marks / state.length * 100) < 40 && (marks / state.length * 100) >= 30) {
                setgrade('E')
            }
            else {
                setgrade('F')
            }


            let obj = {
                ...location.state,
                marks,
                grade,
                percentage
            }


            navigate('/result-Section',{ state: obj} )

        }
        else {
            if (userAnswer === state[queIndex].answer) {
                setMarks(marks + 1)
            }
            state[queIndex].userAnswer = userAnswer
            setQueIndex(queIndex + 1)
            setNextBtn(true)
        }
    }





    return (
        <Box> <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>
            <Grid container >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>



                    <Paper sx={{ margin: '0 auto' }} elevation={3} children={

                        <Box>
                            <Box component="div">
                                <AppBar position="static" sx={{ py: 3, textAlign: 'start', backgroundColor: ' var(--main-color)' }}>
                                    <Hidden mdDown={true}>
                                        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase' }}>
                                            <Typography align='center' variant="h6" component="div">
                                                General Knowledge Quiz
                                            </Typography>
                                            <Typography align='center' variant="h6" component="div">
                                                Question
                                                &nbsp;{queIndex + 1} / {state.length}
                                            </Typography>
                                        </Container>
                                    </Hidden>
                                    <Hidden mdUp={true}>
                                        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase' }}>
                                            <Stack direction='column' spacing={2}>
                                                <Typography align='center' variant="h6" component="div">
                                                    General Knowledge Quiz
                                                </Typography>
                                                <Typography align='center' variant="h5" component="div">
                                                    Question
                                                    &nbsp;{queIndex + 1} / {state.length}
                                                </Typography>
                                            </Stack>
                                        </Container>
                                    </Hidden>

                                </AppBar>
                            </Box>


                            <Box component="div">
                                <Container maxWidth="xl" sx={{ my: 5 }}>
                                    <Typography variant="h4" component="div" sx={{ my: 4, textAlign: 'start', fontSize: '25px', color: ' var(--main-color)' }}>

                                        {
                                            `Q${queIndex + 1}: ` + state[queIndex].question
                                        }

                                    </Typography>

                                    <Divider />




                                    <Box sx={{ my: 2 }}>
                                        <RadioGroup
                                            aria-label="question"
                                            name="radio-buttons-group"
                                            onChange={(e) => selectedOption(e)}
                                        >
                                            {state[queIndex].options.map((x, index) => {
                                                return <FormControlLabel key={index} sx={{ my: 2 }} value={x} control={<Radio sx={{
                                                    color: ' var(--main-color)',
                                                    '&.Mui-checked': {
                                                        color: ' var(--main-color)',
                                                    }
                                                }} />} label={x} />

                                            })
                                            }
                                        </RadioGroup>
                                    </Box>





                                    <Box sx={{ textAlign: 'right',pb:3}}>
                                        <Button variant="contained" sx={{ py: '12px', px: 3, borderRadius: '5px', backgroundColor: 'var(--main-color)' }}
                                            disabled={nextBtn} onClick={nextQue}
                                        >
                                            {state.length !== queIndex + 1 ? "Next Quextion" : 'Finish Quiz'}
                                        </Button>
                                    </Box>

                                </Container>
                            </Box>
                        </Box>


                    } />


                </Grid>
            </Grid>



        </Container >
        </Box>

    )
}
