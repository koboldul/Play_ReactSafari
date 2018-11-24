import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
  render() {
    return this.props.persons.map((p) => {
      return (<Person 
        name={p.name} 
        click={() => this.props.clicked(p.id)}
        changed={(event) => this.props.changed(event, p.id)}
        key={p.id}>
        Age: {p.age}
      </Person>
    )});
  };
}
export default Persons;