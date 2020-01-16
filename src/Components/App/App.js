import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../MainPage';

function App() {
  return (
    <div className='App'>
      <Route path ='/' component={Header} />
      <Route exact path ='/' component={MainPage} />
    </div>
  );
}

export default App;
