import './App.css';

import MainApp from './MainApp';
import store from './appstore';
import { Provider } from 'react-redux'
import {  BrowserRouter } from "react-router-dom";

function App () {
  return ( 
    <Provider store={store}>
      <BrowserRouter>
      <MainApp />
    </BrowserRouter>
        
     </Provider>
   );
}

export default App ;


