import React, { Component } from 'react';
import MonsterCard from './MonsterCard/MonsterCard';
class MonsterRolodex extends Component {
  constructor() {
      super();
      this.state = {
        monsters : [],
        searchField: ''
      };
    }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => 
      response.json().then(users => {
        let monsters = [];
        console.log('users :', users);
        Object.keys(users).forEach( user => {
          monsters.push(users[user]);
        })
        this.setState({monsters: monsters})
      })
    )
  }

  onSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state
    let filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div>
        <input className='search' type='search' placeholder='search monsters' onChange={(e) => this.onSearch(e)}/>
        {filteredMonsters.map(monster => (
          <MonsterCard
          key={monster.id}
          monster={monster}
          />
        ))}
      </div>
    );
  }
}

export default MonsterRolodex;