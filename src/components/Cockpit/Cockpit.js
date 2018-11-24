import React from 'react';
import Radium from 'radium'

const cockpit = (props) => {
    const style= {
        backgroundColor: 'green',
        border: '1px solid blue',
        cursor: 'pointer',
        margin: '10px',
        height: '40px',
        ':hover': {
            backgroundColor: 'lightgreen'
        }
    };
    
    const classes = [];

    if (props.state.persons.length <= 1) {
      classes.push('red');
      classes.push('bold');
    }

    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">Muhahahha !</h1>
                <p className={classes.join(' ')} > Dynamic classing </p>
            </header>
            
            <button 
                onClick={props.togglePersonName}
                style={style}>
                Toggle
            </button>
        </div>
    );
};

export default Radium(cockpit);