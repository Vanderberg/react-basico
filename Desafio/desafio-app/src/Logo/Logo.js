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
               <button disabled={repeat === 6} onClick={() => {
               setRepeat((repeat) => repeat + 1);
               setcountAdd((countAdd) => countAdd + 1);
               }}>Logo + ({countAdd})</button>
           <button disabled={repeat === 1} onClick={() => {
               setRepeat((repeat) => repeat - 1);
               setcountRem((countRem) => countRem + 1);
               }}>Logo - ({countRem})</button>             
        </div>
    </>    
    )    
}; 
export default Logo;