import React, {Component} from 'react';
import './App.css';
import {robot} from './robot';
import CardList from './CardList';

const App =() => {
  return(
    <div>
      <h1>RobotFriends</h1>
      <CardList robot={robot}/>
    </div>
  );
}

export default App;
