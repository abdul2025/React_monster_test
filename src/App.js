import React, {Component} from 'react'
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }


  }

  // we have the did mount becouse of the class of this class
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(users=> this.setState({monsters : users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state; 
    const filterMonsters = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters}>
          
        </CardList>
      </div>
    )
  }
}

export default App;
