import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './logo.css';

const Logo = () => { 
    const [repeat, setRepeat] = useState();
    const [countAdd, setcountAdd] = useState(0);
    const [countRem, setcountRem] = useState(0);

    useEffect(() =>{
        setRepeat(1);
    },[])

    useEffect(()=>{
        console.log('Logo repeat update changed - value: ' + repeat);
    },[repeat])

    useEffect(()=>{
        console.log('Logo countAdd update changed - value: ' + countAdd);       
    },[countAdd])

    useEffect(()=>{
        console.log('Logo countRem update changed - value: ' + countRem);        
    },[countRem])

    const handleClickPlus = () =>{
        setRepeat((repeat) => repeat + 1);
        setcountAdd((count) => count + 1)
    }
    
    const handleClickMinus = () =>{
        setRepeat((repeat) => repeat - 1);
        setcountRem((count) => count + 1)
    }

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
               <button disabled={repeat === 6} onClick={handleClickPlus}>Logo + ({countAdd})</button>
           <button disabled={repeat === 1} onClick={handleClickMinus}>Logo - ({countRem})</button>             
        </div>
        <div>
            <p><b>Logo +</b> button was clicked {countAdd} times</p>
            <p><b>Logo -</b> button was clicked {countRem} times</p>
        </div>
    </>    
    )    
}; 
export default Logo;