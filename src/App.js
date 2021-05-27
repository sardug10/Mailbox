import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/:tag/mail/:id' component={HomeScreen} />
        <Route path='/:tag' component={HomeScreen} />
        <Redirect exact from ='/' to='/inbox' />
      </Switch>
    </div>
  );
}

export default App;
