import './App.css';
import {useState, useEffect} from 'react'
import AppRouter from './config/router/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './config/redux/store/Index';
import {auth,onAuthStateChanged} from './config/firebaseconfig/Index'
import { getData,changeUserAuth } from './config/redux/action/Index';


function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1b3a'
      },
      secondary: {
        main: '#fff'
      },
      success:{
        main:'#c5a880'
      }
    },
    typography: {
      // fontFamily: 'Quicksand'
      fontFamily: 'Montserrat'
    }

  })




  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
