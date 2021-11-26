import React from 'react'
import { Box, Paper, Typography, Input, Container, Button } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
    

export default function Home() {

    const state = useSelector((state)=>state)
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errorMsg, setErrorMsg] = useState(false)


      // Start Quiz Button 
      let startQuiz = () => {

        if (firstName.length === 0 || lastName.length === 0) {
          setErrorMsg(true)
        }
        else {

            let userDetails = {
                firstName:firstName,
                lastName:lastName
            }

            navigate('/question-section', { state: userDetails } )
        }
      }


    return (
        <div>
            <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>
                <Box component="div"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 400,
                            height: 500,
                        },
                    }}>
                    <Paper sx={{ margin: '0 auto' }} elevation={3} children={


                        <Box component="div">
                            <Typography sx={{ backgroundColor: 'var(--main-color)', py: 2, color: 'white', fontSize: '20px' }} >
                                General Knowledge Quiz
                            </Typography>


                            <Box sx={{ mt: 2, mb: 4, px: 3, }}>
                                <Box sx={{ py: 2 }}>
                                    <Input sx={{ py: 1 }} fullWidth={true} placeholder="First Name" 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                    />
                                </Box>


                                <Box sx={{ py: 2, }} component="div">
                                    <Input sx={{ py: 1 }} fullWidth={true} placeholder="Last Name" 
                                    onChange={(e) => setLastName(e.target.value)} 
                                    />
                                </Box>

                                {errorMsg&&<Typography sx={{ fontSize: '13px', color: 'red' }} >Please fill the input fields first to start quiz!</Typography>}
                                

                                <ul className='list-unstyled text-start'>
                                    <li className="fs-6 my-4"><span>Total Questions:</span> <span className="fw-bold">{state.length}
                                    </span></li>
                                    <li className="fs-6 my-4"><span>Passing criteria: </span> <span className="fw-bold">60%</span></li>
                                    <li className="fs-6 my-4"><span>Time Duration: </span> <span className="fw-bold">10 Minutes</span></li>
                                </ul>


                                <Box sx={{ py: 2, my: 1}} component="div">
                                    <Button fullWidth={true} variant="outlined" 
                                    onClick={startQuiz}
                                    >Start Quiz</Button>
                                </Box>

                            </Box>


                        </Box>
                    } />
                </Box>
            </Container >

        </div>
    )
}
