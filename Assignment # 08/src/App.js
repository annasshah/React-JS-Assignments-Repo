import './App.css';
import RouterApp from './config/routerApp';
import { Provider } from 'react-redux';
import store from './config/store';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#012E40'
    },
    secondary: {
      main: '#fff'
    },
    typography:{
      fontFamily: 'Quicksand'
    }
  }
})


function App() {



  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </ThemeProvider>

  );
}

export default App;
