import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Stack, Typography, TextField, Button, Avatar, } from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../config/firebaseconfig/Index";
import { useSelector } from "react-redux";
// import { FcGoogle } from 'react-icons/fc';
import SmallSpinner from "../assets/SmallSpinner";



export default function LoginPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState()
  let state = useSelector(state => state)

  const [userDetails, setUserDetails] = useState({});
  const [err, setErr] = useState();

  let login = (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      setErr("Please fill the fields first!");
    }
    else {
      console.log(userDetails);
      signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((success) => {
          // Signed in
          console.log("User successfully login", success);
          navigate('/')
          // ...
        })
        .catch((error) => {
          console.log("User not login", error);
        });
      e.target.reset();
    }
  };


  useEffect(() => {
    setLoading(state.userAuthReducer.isLoading)
    if (state.userAuthReducer.userAuth) {
      navigate('/')
    }

  }, [state.userAuthReducer.userAuth])


  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "90vh" }}
    >
      {loading ? <SmallSpinner /> : <Paper
        square={false}
        elevation={0}
        sx={{
          py: "35px",
          px: 3,
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
        }}
        children={
          <Stack
            alignItems="center"
            spacing={4}
            direction="column"
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => login(e)}
          >
            <Stack>
              <Typography
                align="center"
                sx={{ fontWeight: "bold" }}
                variant="h4"
              >
                Login
              </Typography>
            </Stack>

            {err && <Stack>
              <Typography align='center' variant='body2' sx={{ color: 'red' }}>{err}</Typography></Stack>
            }

            <Stack spacing={2}>
              <TextField
                // id="outlined-basic"
                type="email"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                label="Email"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="password"
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                label="Password"
                variant="outlined"
              />

              <Button type="submit" fullWidth size="large" variant="contained">
                Login
              </Button>
            </Stack>

            <Stack>
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "#cccccc" }}
              >
                or
              </Typography>
              <Typography align="center" sx={{ color: "#343437" }}>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#343437",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Stack>
          </Stack>
        }
      />

      }

    </Stack>
  );
}
