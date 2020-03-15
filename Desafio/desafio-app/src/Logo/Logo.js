import React from 'react';
import logo from './logo.svg';
import './logo.css';

const Logo = ({repeat}) => { 
    
    if (repeat > 6){
        repeat = 6;
    }
    let elements =[];
    for (let index = 0; index < repeat; index++) {
        elements.push(<img key={index} src={logo} className="App-logo" alt="logo" />)        
    }

    return(
        <div>
            {elements}
        </div>
    )    
    
}; 
export default Logo;