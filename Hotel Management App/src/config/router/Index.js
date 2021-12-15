import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavbarComponent from '../../components/NavbarComponent'
import { getCartData, setloadingPage } from '../redux/action/Index'
import { changeUserAuth, getData, getUserData, adminState } from '../redux/action/Index'
import { auth, onAuthStateChanged, ref, database, onValue, onChildAdded } from '../firebaseconfig/Index'
import {
    Home, About, Contact, LoginPage, ErrorPage, ProductDetails, MyAccount,
    Hotels,
    CreateAccount, Admin, Bookingform
} from './AppRouter'

export default function AppRouter() {

    const stateAdmin = useSelector(state => state.AdminStateReducer.admin)
    const authStateLoading = useSelector(state => state.AdminStateReducer.isLoading)
    const dispatch = useDispatch()

    const newState = useSelector(a => a)

    console.log(newState);
    useEffect(() => {
        let arr = []
        let refrence = ref(database, "hotels/");
        onChildAdded(refrence, (snapshot) => {
            if (snapshot.exists()) {
                arr.push(snapshot.val())
                getData(dispatch, arr)
            }
        })






        onAuthStateChanged(auth, (user) => {
            if (user) {

                let userUid = user.uid
                const reference = ref(database, `users/${userUid}/profile`)
                //  reference = ref(database, "users/" + userUid);
                onValue(reference, (snapshot) => {
                    let userData = {
                        ...snapshot.val(),
                        useruid: userUid
                    }
                    if (userData.userType === 'client') {
                        adminState(dispatch, true)
                        let arr = []
                        let refrence = ref(database, "bookings/");
                        onChildAdded(refrence, (snapshot) => {
                            if (snapshot.exists()) {
                                if(snapshot.val().clientUid === userUid){
                                    arr.push(snapshot.val())
                                }
                            }
                            getCartData(dispatch,arr)
                        })
                    }
                    else {
                        adminState(dispatch, false)
                        let arr = []
                        let refrence = ref(database, "bookings/");
                        onChildAdded(refrence, (snapshot) => {
                            if (snapshot.exists()) {
                                if(snapshot.val().UserUid === userUid){
                                    arr.push(snapshot.val())
                                }
                            }
                            getCartData(dispatch,arr)
                        })
                    }

                    changeUserAuth(dispatch, true, userData)
                })





                // changeUserAuth(dispatch, true);
            } else {
                changeUserAuth(dispatch, false, {})
                getCartData(dispatch, [])
                adminState(dispatch, false)
                // navigate("/login")
            }
        })



    }, [])


    return (
        <>
            <Router>
                {!authStateLoading && !stateAdmin ? <NavbarComponent /> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<CreateAccount />} />
                    <Route path='/myaccount/*' element={<MyAccount />} />
                    <Route path='/to-admin/*' element={<Admin />} />
                    <Route path='/bookingform' element={<Bookingform />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
                {!authStateLoading && !stateAdmin ? <Footer /> : null}
            </Router>

        </>
    )
}
