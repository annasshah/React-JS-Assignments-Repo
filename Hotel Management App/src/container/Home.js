import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../assets/Spinner";
import { Grid, Box, Typography, Container, Divider, Stack } from "@mui/material";
// import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Slider from "../components/Slider";



export default function Home() {
  const dispatch = useDispatch();
  const productState = useSelector((a) => a.productsReducer.products)
  const loading = useSelector((a) => a.productsReducer.isLoading)
  const userData = useSelector((a) => a.userAuthReducer.userData)

  const stateAdmin = useSelector(state => state.AdminStateReducer.admin)
  const authStateLoading = useSelector(state => state.AdminStateReducer.isLoading)
  const navigate = useNavigate()







  // const [apiData, setApiData] = useState();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stateAdmin) {
      navigate('/to-admin')
    }
    else {
      navigate('/')

    }

    // changeUserAuth(dispatch, true)
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       changeUserAuth(dispatch, true);
    //     } else {
    //       changeUserAuth(dispatch, false);
    //       navigate("/login");
    //     }
    //   })

    // getData(dispatch)

  }, [stateAdmin]);



  return (
    <Box>

      {authStateLoading ? <Spinner /> : <Box >
        {/* <Slider /> */}

        <Stack justifyContent='center' alignItems='center' sx={{ height: "75vh",backgroundColor:'#0000008a' }}>
          <Stack direction='column' spacing={2}>
            <Typography align="center" variant="body2" sx={{ color: '#fff', fontWeight: '500' }}>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</Typography>
            <Typography align="center" variant="h2" sx={{ color: '#fff', fontFamily: 'var(--headingFont)', fontWeight: '700' }}>Most Relaxing Place</Typography>
          </Stack>
        </Stack>


        <Box sx={{ backgroundColor: '#fff',py:4}}>
          <Container >
            <Stack direction='column'
            sx={{ pb: 3}}
            >

              <Typography align='center' variant='body2' sx={{ color: 'var(--secondary)', fontWeight: '500' }}>AVAILABLE ROOMS</Typography>
              <Typography align='center' variant='h2' sx={{ fontFamily: 'var(--headingFont)', fontWeight: '400' }}>Featured Rooms</Typography>
              

            </Stack>

            {loading ? <Spinner /> : <Grid container justifyContent='center' spacing={3}
            // spacing={{ xs: 2, md: 3 }}
            >
              {productState.map((e, i) => {
                return <ProductCard key={i} data={e} />;
              })}
            </Grid>}
          </Container>
        </Box>




      </Box>}
    </Box>
  );
}

{
  /* <h1 style={{ textAlign: 'center' }}>Home Page</h1> */
}
