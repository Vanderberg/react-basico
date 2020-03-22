import React, {useState} from 'react';

//Style
import './Buttons.css';

const Buttons = ({repeat, setRepeat}) => { 
    const [countAdd, setcountAdd] = useState(0);
    const [countRem, setcountRem] = useState(0);

    const handleClickPlus = () =>{
        setRepeat((repeat) => repeat + 1);
        setcountAdd((count) => count + 1)
    }
    
    const handleClickMinus = () =>{
        setRepeat((repeat) => repeat - 1);
        setcountRem((count) => count + 1)
    }

    return(
    <>
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
export default Buttons;