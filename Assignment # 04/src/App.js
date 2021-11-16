import './App.css';
import { useState } from 'react';
import { Container, Box, Paper, styled, AppBar, Typography, Button, Input, Divider, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import questions from './data-files/questionsObj';
import Confetti from 'react-confetti'







function App() {
  const [queIndex, setQueIndex] = useState(0)


  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? ' var(--main-color)' : '#308fe8',
    },
  }));


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const [nameBox, setnameBox] = useState(true)
  const [questionsContainer, setQuestionsContainer] = useState(false)
  const [activeConfetti, setactiveConfetti] = useState(true)

  const [resultSummary, setresultSummary] = useState(false)
  const [grade, setgrade] = useState()
  const [showAnswers, setShowAnswers] = useState(false)
  
  const [percentage, setPercentage] = useState()

  const [userAnswer, setUserAnswer] = useState()
  const [marks, setMarks] = useState(0)

  const [nextBtn, setNextBtn] = useState(true)


  // Name Section
  // First Name 
  let firstNameInp = (e) => {
    setFirstName(e.target.value)
  }
  // Last Name 
  let lastNameInp = (e) => {
    setLastName(e.target.value)
  }
  // Start Quiz Button 
  let startQuiz = () => {
    if (firstName.length === 0 || lastName.length === 0) {
      setErrorMsg(true)
    }
    else {
      setnameBox(false)
      setQuestionsContainer(true)
    }
  }

  // Questions Section
  let selectedOption = (e) => {
    setNextBtn(false)
    setUserAnswer(e.target.value)
  }

  let viewAnswers = () => {
    setShowAnswers(!showAnswers)
    setresultSummary(!resultSummary)

  }
  let closeAnswers = () => {
    setShowAnswers(!showAnswers)
    setresultSummary(!resultSummary)
    setactiveConfetti(false)
  }


  let nextQue = () => {
    if (queIndex === questions.length - 1) {
      questions[queIndex].userAnswer = userAnswer


      if (userAnswer === questions[queIndex].answer) {
        setMarks(marks + 1)
        questions[queIndex].score = 1
      }
        setPercentage(marks / questions.length * 100)

      if ((marks/questions.length * 100) <= 100 && (marks/questions.length * 100) >= 90) {
        setgrade('A+')
      }
      else if ((marks/questions.length * 100) < 90 && (marks/questions.length * 100) >= 80) {
        setgrade('A')
      }
      else if ((marks/questions.length * 100) < 80 && (marks/questions.length * 100) >= 70) {
        setgrade('B')
      }
      else if ((marks/questions.length * 100) < 70 && (marks/questions.length * 100) >= 60) {
        setgrade('C')
      }
      else if ((marks/questions.length * 100) < 60 && (marks/questions.length * 100) >= 50) {
        setgrade('D')
      }
      else if ((marks/questions.length * 100) < 40 && (marks/questions.length * 100) >= 30) {
        setgrade('E')
      }
      else {
        setgrade('F')
      }

      // if ((marks / questions.length * 100) <= 100 && (marks / questions.length * 100) >= 90) {
      //   setgrade('A+')
      // }
      // else if ((marks / questions.length * 100) < 90 && (marks / questions.length * 100) >= 80) {
      //   setgrade('A')
      // }
      // else if ((marks / questions.length * 100) < 80 && (marks / questions.length * 100) >= 70) {
      //   setgrade('B')
      // }
      // else if ((marks / questions.length * 100) < 70 && (marks / questions.length * 100) >= 60) {
      //   setgrade('C')
      // }
      // else if ((marks / questions.length * 100) < 60 && (marks / questions.length * 100) >= 50) {
      //   setgrade('D')
      // }
      // else if ((marks / questions.length * 100) < 40 && (marks / questions.length * 100) >= 30) {
      //   setgrade('E')
      // }
      // else {
      //   setgrade('F')
      // }


      setQuestionsContainer(false)
      setresultSummary(true)



    }
    else {
      if (userAnswer === questions[queIndex].answer) {
        setMarks(marks + 1)
        questions[queIndex].score = 1
      }
      questions[queIndex].userAnswer = userAnswer
      setQueIndex(queIndex + 1)
      setNextBtn(true)
    }
  }
















  return (


    <Box>


      {nameBox && <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>
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
                  <Input sx={{ py: 1 }} fullWidth={true} placeholder="First Name" onChange={(e) => firstNameInp(e)} />
                </Box>


                <Box sx={{ py: 2, }} component="div">
                  <Input sx={{ py: 1 }} fullWidth={true} placeholder="Last Name" onChange={(e) => lastNameInp(e)} />
                </Box>

                {errorMsg && <Typography sx={{ fontSize: '13px', color: 'red' }} >Please fill the input fields first to start quiz!</Typography>
                }

                <ul className='list-unstyled text-start'>
                  <li className="fs-6 my-4"><span>Total Questions:</span> <span className="fw-bold">{questions.length} </span></li>
                  <li className="fs-6 my-4"><span>Passing criteria: </span> <span className="fw-bold">60%</span></li>
                  <li className="fs-6 my-4"><span>Time Duration: </span> <span className="fw-bold">10 Minutes</span></li>
                </ul>


                <Box sx={{ py: 2, my: 1, }} component="div">
                  <Button fullWidth={true} variant="outlined" onClick={startQuiz}>Start Quiz</Button>
                </Box>

              </Box>


            </Box>
          } />
        </Box>
      </Container >
      }


      {questionsContainer && <Box> <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>

        <Box component="div"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 1000,
              height: 650,
            },
          }}>
          <Paper sx={{ margin: '0 auto' }} elevation={3} children={

            <Box>
              <Box component="div">
                <AppBar position="static" sx={{ py: 3, textAlign: 'start', backgroundColor: ' var(--main-color)' }}>
                  <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase' }}>
                    <Typography variant="h6" component="div">
                      Question {queIndex + 1}/{questions.length}
                    </Typography>
                    <Typography variant="h6" component="div">
                      General Knowledge Quiz
                    </Typography>
                    <Typography variant="h6" component="div">
                    </Typography>
                  </Container>
                </AppBar>
              </Box>


              <Box component="div">
                <Container maxWidth="xl" sx={{ my: 5 }}>
                  <Typography variant="h4" component="div" sx={{ my: 4, textAlign: 'start', fontSize: '25px', color: ' var(--main-color)' }}>

                    {
                      `Q${queIndex + 1}: ` + questions[queIndex].question
                    }

                  </Typography>

                  <Divider />




                  <Box sx={{ my: 2 }}>
                    <RadioGroup
                      aria-label="question"
                      name="radio-buttons-group" onChange={(e) => selectedOption(e)}
                    >
                      {questions[queIndex].options.map((x, index) => {
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





                  <Box sx={{ textAlign: 'right' }}>
                    <Button variant="contained" sx={{ py: '12px', px: 3, borderRadius: '5px', backgroundColor: 'var(--main-color)' }} disabled={nextBtn} onClick={nextQue} >{questions.length !== queIndex + 1 ? "Next Quextion" : 'Finish Quiz'}</Button>
                  </Box>

                </Container>
              </Box>
            </Box>


          } />



        </Box>
      </Container >

        <Container maxWidth="lg">
          <BorderLinearProgress variant="determinate" value={(queIndex + 1) / questions.length * 100} /></Container ></Box>
      }





      {resultSummary && <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>

        {activeConfetti && <Box sx={{ with: '100wh' }}>
          <Confetti
            width={'2000'}
            height={'2000'}
            numberOfPieces={800}
            recycle={false}
            wind={0}
            gravity={0.10}
            run={percentage > 60 ? true : false}

          />
        </Box>
        }
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
                    {`${firstName} ${lastName}`}
                  </Typography>


                  <Box sx={{ my: 2 }}>
                    <Typography sx={{ my: 2, fontSize: '18px', fontWeight: 'bold' }} component="div">
                      Grade: {grade}
                    </Typography>
                    <Typography sx={{ my: 2, fontSize: '18px', fontWeight: 'bold' }} component="div">
                      Percentage: {(marks / questions.length * 100).toFixed(2)}%
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
                  <li className="fs-6 my-2"><span>Total Marks</span> <span className="fw-bold">{questions.length} </span></li>
                  <li className="fs-6 my-2"><span>Obtained Marks: </span> <span className="fw-bold">{marks}</span></li>
                  <li className="fs-6 my-2"><span>Correct Answers: </span> <span className="fw-bold">{marks} </span></li>
                  <li className="fs-6 my-2"><span>Status: </span> <span className="fw-bold">{(marks / questions.length * 100) >= 60 ? 'Pass' : 'Fail'}</span></li>
                </ul>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button variant="contained" sx={{ py: 1, px: 3, borderRadius: '5px', backgroundColor: 'var(--main-color)' }} onClick={viewAnswers} >View Answers</Button>
                </Box>
              </Box>


            </Box>
          } />
        </Box>
      </Container >
      }



      {showAnswers && <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh' }}>

        <Box component="div"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 1000,
              height: 520,
            },
          }}>
          <Paper sx={{ margin: '0 auto' }} elevation={3} children={


            <Box component="div">
              <Typography sx={{ backgroundColor: 'var(--main-color)', py: 2, color: 'white', fontSize: '20px' }} >
                Answers
              </Typography>

              <Box sx={{ py: 3, px: 3, color: 'var(--main-color)', height: 380, overflowY: 'scroll', textAlign: 'left' }}>


                {questions.map((ques, ind) => {
                  return <Box key={ind} sx={{ py: 2, fontSize: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                      <Typography variant="h6">Q{ind + 1}: {ques.question}</Typography>

                      <Typography color={ques.score === 1 ? '#008000' : 'error'} sx={{ fontSize: '18px' }} >{ques.score === 1 ? "Correct ✔" : 'Wrong ×'}
                      </Typography>
                    </Box>

                    <Box sx={{ py: 1, fontSize: '20px' }}>
                      <ul className='px-0 mx-0 w-75'>{
                        ques.options.map((x, index) => {
                          if (x === ques.answer && ques.userAnswer === ques.answer) {
                            return <li key={index} className='py-2 px-2 my-2 list-unstyled correctAns'>{x}</li>
                          }
                          else if (x === ques.userAnswer && ques.userAnswer !== ques.answer) {
                            return <li key={index} className='py-2 px-2 my-2 list-unstyled wrongAns'>{x}</li>
                          }

                          else if (x === ques.answer && ques.userAnswer !== ques.answer) {
                            return <li key={index} className='py-2 px-2 my-2 list-unstyled correctAns'>{x}</li>
                          }

                          else {
                            return <li key={index} className='py-2 px-2 my-2 list-unstyled'>{x}</li>
                          }

                        })}

                      </ul>
                    </Box>
                  </Box>

                })}



              </Box>


              <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" sx={{ mt: 3, mx: 4, px: 3, borderRadius: '5px', backgroundColor: 'var(--main-color)' }} onClick={closeAnswers} >Close</Button>
              </Box>
            </Box>
          } />
        </Box>
      </Container >
      }

    </Box >


  );
}

export default App;
