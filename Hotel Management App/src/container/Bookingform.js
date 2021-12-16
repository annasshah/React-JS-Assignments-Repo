
import React, { useEffect, useRef, useState } from 'react'
import { Typography, Box, Container, SvgIcon, Stack, FormControlLabel, FormLabel, RadioGroup, Radio, Button, Hidden, Grid, Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { BsDashLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateCartData } from '../config/redux/action/Index';
import Alert from '@mui/material/Alert';
import {
    database,
    onChildAdded,
    child,
    ref,
    push,
    update,
    set,
    onValue,
    remove
} from '../config/firebaseconfig/Index'
import Spinner from '../assets/Spinner';











function Bookingform() {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const userProfile = useSelector(state => state.userAuthReducer.userProfile)
    const userBooking = useSelector(state => state.bookingReducer.cart)
    const state = useSelector(state => state)

    const [errMsg, setErrMsg] = useState(false)

    const username = useRef()
    const userEmail = useRef()
    const userContactNumber = useRef()
    const userCnicNumber = useRef()
    const userCountry = useRef()
    const userAddress = useRef()
    const numberOfDays = useRef()
    const numberOfPersons = useRef()
    const numberOfRooms = useRef()











    // Card details 
    const cardNumber = useRef()
    const fullName = useRef()
    const dateOfExpiry = useRef()
    const cvvNumber = useRef()



    const d = new Date();
    let time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`



    // const { userName, cnic, country, email, phoneNumber, address, gender } = userProfile


    const [submitLoading, setSubmitLoading] = useState(false)
    const [bookingStep, setBookingStep] = useState(true)
    const [paymentMethod, setPaymentMethod] = useState(false)


    const [customerData, setCustomerData] = useState()
    const [creditDebitCard, setCreditDebitCard] = useState(false)
    const [checkStateData, setCheckStateData] = useState(false)

    // const [bookingConfirmMsg, setBookingConfirmMsg] = useState(false)


    let labelsx = {
        fontSize: '13px',
        margin: '0 0 5px 0',
        color: 'gray'
    }

    let inputStyle = {
        padding: '10px 8px',
        width: '100%'
    }

    let handleBookingDetails = (e) => {

        e.preventDefault()
        setErrMsg(false)
        let obj = {
            name: username.current.value,
            email: userEmail.current.value,
            contactnumber: userContactNumber.current.value,
            cnicnumber: userCnicNumber.current.value,
            country: userCountry.current.value,
            address: userAddress.current.value,
            numberofdays: numberOfDays.current.value,
            numberofpersons: numberOfPersons.current.value,
            numberofrooms: numberOfRooms.current.value,
            bookingTime: time
        }


        // const { username, userEmail, contactNumber, cnic, country, address, numberOfDays, numberOfPersons, numberOfRooms } = obj

        if (!obj.name || !obj.email || !obj.contactnumber || !obj.cnicnumber || !obj.country || !obj.address || !obj.numberofdays || !obj.numberofpersons || !obj.numberofrooms) {
            setErrMsg(true)
        }
        else {
            setCustomerData(obj)
            setBookingStep(false)
            setPaymentMethod(true)
        }
    }



    let confirmBooking = (e) => {
        e.preventDefault()

        setSubmitLoading(true)

        let paymentDetails = {
            cardNumber: cardNumber.current.value,
            fullName: fullName.current.value,
            dateOfExpiry: dateOfExpiry.current.value,
            cvvNumber: cvvNumber.current.value,
        }



        const newKey = push(child(ref(database), 'bookings')).key

        let bookingDataObject = {
            clientUid: location.state.clientuid,
            UserUid: userProfile.useruid,
            hotelKey: location.state.key,
            bookingkey: newKey,
            bookingData: location.state,
            customerData: customerData,
            paymentDetails: paymentDetails

        }


        let reference = ref(database, `bookings/${newKey}`)

        set(reference, bookingDataObject)
            .then((success) => {
                setSubmitLoading(false)
                setCustomerData({})
                setBookingStep(true)
                setPaymentMethod(false)
                let newArr = [...userBooking, bookingDataObject]
                updateCartData(dispatch, newArr)
                // setBookingConfirmMsg(true)

                // setTimeout(() => {
                //     setBookingConfirmMsg(false)
                // }, 2000);

                navigate('/')
            })














    }







    // hotel 
    // customer 
    // payment

    let checkPaymentMethod = (e) => {
        let selectedMethod = e.target.value

        if (selectedMethod === 'Debit Card' || selectedMethod === 'Credit Card') {
            setCreditDebitCard(true)

        }



    }




    const { userName, cnic, country, email, phoneNumber, address, gender } = userProfile
    const userAuth = useSelector(state => state.userAuthReducer.userAuth)


    useEffect(() => {

        if (!userAuth) {
            navigate('/login')
        }
        else if (userAuth && location.state === null) {
            navigate('/')
        }
        else {
            setCheckStateData(true)
        }

    }, [])




    return (

        <Box sx={{ backgroundColor: '#fff' }}>
            {!checkStateData ? <Spinner /> : <Box>
                <Stack sx={{ height: "45vh", backgroundImage: `url(${location.state.imageLink})`, backgroundPosition: 'center', backgroundColor: '#0000008a', overflow: 'hidden' }}>
                    <Stack justifyContent='center' alignItems='center' sx={{ backgroundColor: '#0000008a', height: "43vh", width: '100%' }} >
                        <Stack direction='column' spacing={2}><Typography align="center" variant="body2" sx={{ color: '#fff', fontWeight: '500' }}>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</Typography>
                            <Typography align="center" variant="h2" sx={{ color: '#fff', fontFamily: 'var(--headingFont)', fontWeight: '700' }}>{location.state.title}</Typography></Stack>
                    </Stack>
                </Stack>

                <Box sx={{ backgroundColor: '#fff' }}>


                    <Container>

                        <Grid container sx={{ py: 3 }} spacing={3}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Box>
                                    <Stack direction='column' spacing={0}>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>Hotel Details</Typography>
                                        <SvgIcon><BsDashLg /></SvgIcon>
                                    </Stack>
                                </Box>


                                <Stack direction='column' spacing={2} sx={{ my: 2, width: '100%' }}>
                                    <img src={location.state.imageLink} alt="" width='100%' />
                                </Stack>


                                <Stack spacing={2}>
                                    <Stack>
                                        <Typography variant='h3' sx={{ color: 'var(--primary)', fontFamily: 'var(--headingFont)', fontWeight: '400' }}>{location.state.title}</Typography>
                                    </Stack>

                                    <Stack>
                                        <Typography variant='body2' sx={{ color: 'var(--lightGray)', fontWeight: '400' }}>{location.state.description}</Typography>
                                    </Stack>


                                    <Stack direction='row' spacing={1}>
                                        <Typography variant='body2' sx={{ color: 'black', fontWeight: '400' }}>Location: </Typography> <Typography variant='body2' sx={{ color: 'var(--lightGray)', fontWeight: '400' }}>{location.state.location}</Typography>
                                    </Stack>

                                    <Stack direction='row' spacing={1}>
                                        <Typography variant='body2' sx={{ color: 'black', fontWeight: '400' }}>Hotel: </Typography> <Typography variant='body2' sx={{ color: 'var(--lightGray)', fontWeight: '400' }}>{location.state.hotelName}</Typography>
                                    </Stack>

                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Typography variant='body2' sx={{ color: 'black', fontWeight: '400' }}>Price: </Typography> <Typography variant='body1' sx={{ color: 'var(--secondary)', fontWeight: '600' }}>Rs. {location.state.price} / Day</Typography>
                                    </Stack>
                                </Stack>




                            </Grid>



                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>

                                {/* {bookingConfirmMsg && <Stack sx={{width:'100%',}} justifyContent='center' alignItems='center'><Stack sx={{position:'fixed',top:'20px'}}> <Alert severity="success">Your Booking has been Confirmed!</Alert></Stack></Stack>} */}

                                {bookingStep && <Box>
                                    <Stack direction='column' spacing={0}>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>Booking Form</Typography>
                                        <SvgIcon><BsDashLg /></SvgIcon>
                                    </Stack>
                                </Box>}

                                {paymentMethod && <Box>
                                    <Stack direction='column' spacing={0}>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold', px: 0 }}>Payment Options</Typography>
                                        <SvgIcon><BsDashLg /></SvgIcon>
                                    </Stack>
                                </Box>}


                                {errMsg && <Stack><Typography align='left' variant='body2' sx={{ color: 'red', my: 2 }}>Please fill the required fileds </Typography></Stack>}


                                {bookingStep && <Stack sx={{ my: 2 }}>
                                    <form
                                        onSubmit={(e) => handleBookingDetails(e)}
                                    >


                                        <Typography sx={{ fontWeight: '600' }}>Personal Details</Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="username" style={labelsx} >User Name: </label>
                                            <input type='text' className='editProfileInput' id='username'

                                                ref={username}

                                                defaultValue={userName ? userName : null}

                                                placeholder='User Name' style={inputStyle} />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="userEmail" style={labelsx} >Email: </label>
                                            <input type='email' className='editProfileInput' id='userEmail'
                                                disabled ref={userEmail}

                                                defaultValue={email ? email : null}

                                                placeholder='Email' style={inputStyle} />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="userContactNumber" style={labelsx} >Contact Number: </label>
                                            <input type='number' className='editProfileInput' id='userContactNumber' ref={userContactNumber}

                                                defaultValue={phoneNumber ? phoneNumber : null}

                                                placeholder='Contact Number' style={inputStyle} />
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="userCnicNumber" style={labelsx} >CNIC Number: </label>
                                            <input type='number' className='editProfileInput' id='userCnicNumber' ref={userCnicNumber}

                                                defaultValue={cnic ? cnic : null}

                                                placeholder='CNIC Number' style={inputStyle} />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="username" style={labelsx} >Country: </label>
                                            <input type='text' className='editProfileInput' id='username' ref={userCountry}

                                                defaultValue={country ? country : null}

                                                placeholder='Country' style={inputStyle} />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="username" style={labelsx} >Address: </label>
                                            <input type='text' className='editProfileInput' id='username' ref={userAddress}

                                                defaultValue={address ? address : null}

                                                placeholder='Address' style={inputStyle} />
                                        </Box>


                                        {/* <Divider sx={{py:'0.9px',my:1,backgroundColor:'black'}}/> */}
                                        <Typography sx={{ fontWeight: '600' }}>Booking Details</Typography>


                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="numberOfPersons" style={labelsx} >Number of Persons </label>
                                            <input type='number' className='editProfileInput' id='numberOfPersons' ref={numberOfPersons} placeholder='Number of Persons' style={inputStyle} />
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="numberOfDays" style={labelsx} >Number of Days </label>
                                            <input type='number' className='editProfileInput' id='numberOfDays' ref={numberOfDays} placeholder='Number of Days' style={inputStyle} />
                                        </Box>


                                        <Box sx={{ mb: 2 }}>
                                            <label htmlFor="numberOfRooms" style={labelsx} >Number of Rooms </label>
                                            <input type='number' className='editProfileInput' id='numberOfRooms' ref={numberOfRooms} placeholder='Number of Rooms' style={inputStyle} />
                                        </Box>

                                        <Hidden smUp={true} >
                                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                                <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem', color: 'white' }} variant='contained' color='info' size='large'>Next Step</Button>

                                            </Stack>
                                        </Hidden>
                                        <Hidden smDown={true} >
                                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                                <Stack justifyContent='center' alignItems='center'><Button type='submit' sx={{ width: '15rem', height: '3rem', color: 'white' }} variant='contained' color='info' size='large'>Next Step</Button>
                                                </Stack>
                                            </Stack>
                                        </Hidden>
                                    </form>
                                </Stack>
                                }

                                {paymentMethod && <Stack sx={{ my: 2 }}>
                                    <form
                                        onSubmit={(e) => confirmBooking(e)}
                                    >

                                        <Stack>
                                            <label className="text-muted" htmlFor="usercategory">Select Payment Method</label>
                                            <select onChange={(e) => checkPaymentMethod(e)} className="py-3 px-2" id='usercategory'>
                                                <option defaultValue='--' disabled value="--">--</option>
                                                <option value="Debit Card">Debit Card</option>
                                                <option value="Credit Card">Credit Card</option>
                                            </select>

                                        </Stack>



                                        {creditDebitCard && <Stack sx={{ my: 2 }}>

                                            <Box sx={{ mb: 2 }}>
                                                <label htmlFor="cardNumber" style={labelsx} >Card Number </label>
                                                <input type='number' className='editProfileInput' id='cardNumber'
                                                    ref={cardNumber}
                                                    placeholder='Enter Card Number' style={inputStyle} />
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <label htmlFor="fullName" style={labelsx} >Full Name</label>
                                                <input type='text' className='editProfileInput' id='fullName'
                                                    ref={fullName}
                                                    placeholder='Enter Full Name' style={inputStyle} />
                                            </Box>

                                            <Stack direction='row' spacing={2} justifyContent='space-between'>
                                                <Box sx={{ mb: 2 }}>
                                                    <label htmlFor="dateOfExpiry" style={labelsx} >Date of Expiry</label>
                                                    <input type='date' className='editProfileInput' id='dateOfExpiry'
                                                        ref={dateOfExpiry}
                                                        placeholder='Enter Expiry Date' style={inputStyle} />
                                                </Box>
                                                <Box sx={{ mb: 2 }}>
                                                    <label htmlFor="cvvNumber" style={labelsx} >CVV</label>
                                                    <input type='number' className='editProfileInput' id='cvvNumber'
                                                        ref={cvvNumber}
                                                        placeholder='Enter CVV Number' style={inputStyle} />
                                                </Box>
                                            </Stack>
                                        </Stack>}

                                        <Hidden smUp={true} >
                                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                                <Button type='submit' fullWidth sx={{ width: '100%', height: '3rem', color: 'white' }} variant={submitLoading ? 'outlined' : 'contained'} color='info' size='large'>{submitLoading ? '' : 'Confirm Booking'}</Button>
                                                {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                                            </Stack>
                                        </Hidden>
                                        <Hidden smDown={true} >
                                            <Stack direction='row' sx={{ my: 3, position: 'relative' }} justifyContent='flex-end'>
                                                <Stack justifyContent='center' alignItems='center'><Button type='submit' sx={{ width: '15rem', height: '3rem', color: 'white' }} variant={submitLoading ? 'outlined' : 'contained'} color='info' size='large'>{submitLoading ? '' : 'Confirm Booking'}</Button>
                                                    {submitLoading ? <Stack sx={{ position: 'absolute' }}> <CircularProgress size={20} disableShrink /></Stack> : null}
                                                </Stack>
                                            </Stack>
                                        </Hidden>
                                    </form>
                                </Stack>
                                }






                            </Grid>


                        </Grid>
                    </Container>
                </Box>

            </Box>



            }

        </Box >



    )





}

export default Bookingform


// let Bookingform = () =>{
//     return(
//         <div>sdjfhsdjfhsfhjdshfdjsk</div>
//     )
// }


// export default Bookingform