import React, {useEffect} from 'react';
import logo from './logo.svg';
import './logo.css';

const Logo = ({repeat}) => { 

    useEffect(()=>{
        console.log('Logo repeat update changed - value: ' + repeat);
    },[repeat])
    
    let elements =[];
    for (let index = 0; index < repeat; index++) {
        elements.push(<img key={index} src={logo} className="App-logo" alt="logo" />)        
    }

    return(
        <div className="App-logo-container">
            {elements}
        </div>
    )    
}; 
export default Logo;