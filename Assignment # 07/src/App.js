import './App.css';
import RouterApp from './config.js/routerApp';
import { Provider } from 'react-redux';
import store from './config.js/store';



function App() {
  return (
      <Provider store={store}>
        <RouterApp />
      </Provider>

  )
}

export default App;
