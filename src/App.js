import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './helpers';
import AppContainer from './containers/App';

function App() {
  return (
   <>
   <Provider store={store}>
    <AppContainer/>
   </Provider>
   </>
  );
}

export default App;
