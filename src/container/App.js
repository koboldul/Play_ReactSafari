import React, { Component } from 'react';
import {StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Bogdan', age: 28 },
      {id: '2', name: 'dsfs', age: 29 }
    ],
    showsPersons: false
  };

  togglePersonName = () => {
    const isShowing =  this.state.showsPersons;
    this.setState({ showsPersons: !isShowing  });
  };

  deletePersonHandler = (id) => {
    const persons = 
      this.state.persons.filter(p => p.id !== id);

    this.setState({ persons: persons});
  };

  changeNameHandler = (event, id) => {
    let cpAll = [...this.state.persons]
    let person = cpAll.find(p => p.id === id);

    if (person){
      person.name = event.target.value;
      this.setState({persons: cpAll});
    }
  };

  render() {
    let persons = null;

    if (this.state.showsPersons){
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.changeNameHandler}
        />
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit togglePersonName={this.togglePersonName} state={this.state}/>
          {persons}        
        </div>
      </StyleRoot>
    );
  }
}

export default App;
