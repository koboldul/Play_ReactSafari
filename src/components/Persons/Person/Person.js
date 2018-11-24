import React from 'react';
import Radium from 'radium'

import './Person.css'

const person  = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person' style={style}>
            {props.children} 
            <p onClick={props.click}>I'm a {props.name}  person</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);