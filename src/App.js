import React, {Component} from 'react';
//import {robot} from './robot';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'

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
    const filteredRobots = this.state.robot.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  
    if(this.state.robot.length===0){
      return <h1 className="tc">Loading</h1>
    }
    else {
  return(
    <div className ='tc'>
      <h1>RobotFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robot={filteredRobots}/>
      </Scroll>
    </div>
  );}
}
}

export default App;
