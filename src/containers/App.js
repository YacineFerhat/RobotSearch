import React, {Component} from 'react';
//import {robot} from './robot';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component{
  constructor(){
    super()
    this.state ={
      robot : [],
      searchfield : ''
    } 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>{this.setState({robot:users})})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render()
  {
    const { robot , searchfield } = this.state;
    const filteredRobots = robot.filter(robot=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
  
    return!robot.length ?
      <h1 className="tc">Loading</h1>:    
      (
        <div className ='tc'>
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robot={filteredRobots}/>
          </Scroll>
        </div>
      );
  }
}

export default App;
