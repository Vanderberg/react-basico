import React, {useState} from 'react';
import logo from './logo.svg';
import './logo.css';

const Logo = () => { 
    const [repeat, setRepeat] = useState(1)
    
    let elements =[];
    for (let index = 0; index < repeat; index++) {
        elements.push(<img key={index} src={logo} className="App-logo" alt="logo" />)        
    }

    return(
    <>
        <div className="App-logo-container">
            {elements}
        </div>
        <div className="App-logo-buttons">
           <button disabled={repeat === 6} onClick={() => setRepeat((repeat) => repeat + 1)}>Logo +</button>
           <button disabled={repeat === 1} onClick={() => setRepeat((repeat) => repeat - 1)}>Logo -</button>             
        </div>
    </>    
    )    
    
}; 
export default Logo;