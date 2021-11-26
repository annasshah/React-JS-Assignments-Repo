import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router";
import { Container, Box, Paper, Typography, Button, Divider } from '@mui/material'
import { useSelector } from 'react-redux';



export default function ResultSection() {
  const state = useSelector((state) => state)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    location.state === null && navigate('/')
}, [])

  return (
    <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>
      {location.state != null ? 
      <Box component="div"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 555,
        },
      }}>
      <Paper sx={{ margin: '0 auto' }} elevation={3} children={


        <Box component="div">
          <Typography sx={{ backgroundColor: 'var(--main-color)', py: 2, color: 'white', fontSize: '20px' }} >
            Result Summary
          </Typography>


          <Box sx={{ mt: 2, mb: 4, px: 3, color: 'var(--main-color)' }}>

            <Box sx={{ my: 3 }}>
              <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '28px' }} component="div">
                {`${location.state.firstName} ${location.state.lastName}`}
              </Typography>


              <Box sx={{ my: 2 }}>
                <Typography sx={{ my: 2, fontSize: '18px', fontWeight: 'bold' }} component="div">
                  Grade: {location.state.grade}
                </Typography>
                <Typography sx={{ my: 2, fontSize: '18px', fontWeight: 'bold' }} component="div">
                  Percentage: {(location.state.marks / state.length * 100).toFixed(2)}%
                </Typography>

                <Box>
                </Box>

              </Box>
            </Box>

            <Divider />

            <Typography sx={{ mt: 4, mb: 1, fontWeight: 'bold', textTransform: 'uppercase' }} component="div">
              Result Summary
            </Typography>

            <ul className='list-unstyled text-center list-group'>
              <li className="fs-6 my-2"><span>Total Marks</span> <span className="fw-bold">{state.length} </span></li>
              <li className="fs-6 my-2"><span>Obtained Marks: </span> <span className="fw-bold">{location.state.marks}</span></li>
              <li className="fs-6 my-2"><span>Correct Answers: </span> <span className="fw-bold">{location.state.marks} </span></li>
              <li className="fs-6 my-2"><span>Status: </span> <span className="fw-bold">{(location.state.marks / state.length * 100) >= 60 ? 'Pass' : 'Fail'}</span></li>
            </ul>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button variant="contained" sx={{ py: 1, px: 3, borderRadius: '5px', backgroundColor: 'var(--main-color)' }}
                onClick={() => navigate('/')}
              >Back To Home</Button>
            </Box>
          </Box>


        </Box>
      } />
    </Box>:null}

      
    </Container >

  )
}
